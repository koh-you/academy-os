/**
 * 유형 제목 속 수식을 **읽을 수 있는 글자**로 바꾼다.
 *
 * 교재의 유형 제목에는 전사본의 LaTeX 이 그대로 들어 있다(등록된 교재 3,865개 제목 중 433개).
 * 2026-10-03 에 단원 안 구획 머리줄을 넣으면서 화면에 드러났다 — 그전에는 툴팁과 필터에만 쓰여 눈에 띄지 않았다.
 *
 * 수식 조판기를 넣지 않고(사용자 선택 · 2026-10-03) 흔한 기호만 유니코드로 바꾼다.
 * `\lim`·`\int`·분수처럼 구조가 있는 것은 한 줄로 펴서 적는다 — 교재만큼 예쁘지는 않아도 읽을 수는 있다.
 * 원문이 필요하면 제목 전체가 `title` 속성에 그대로 남아 있다.
 */
const SYMBOLS = Object.freeze({
  alpha: "α", beta: "β", gamma: "γ", theta: "θ", pi: "π", omega: "ω",
  infty: "∞", pm: "±", mp: "∓", times: "×", div: "÷", cdot: "·", cdots: "⋯", ldots: "…",
  ne: "≠", neq: "≠", ge: "≥", geq: "≥", le: "≤", leq: "≤", sim: "∼", approx: "≈", equiv: "≡",
  in: "∈", notin: "∉", cap: "∩", cup: "∪", subset: "⊂", subseteq: "⊆", supset: "⊃", emptyset: "∅",
  to: "→", rightarrow: "→", longrightarrow: "→", leftarrow: "←", Leftrightarrow: "⇔", iff: "⇔",
  mid: "|", angle: "∠", triangle: "△", perp: "⊥", parallel: "∥", prime: "′", degree: "°",
  sum: "Σ", prod: "∏", int: "∫", iint: "∬", oint: "∮", partial: "∂", nabla: "∇", surd: "√"
});
// 글자 그대로 두는 함수 이름(log·sin 등)은 백슬래시만 떼면 된다.
const WORDS = new Set(["log", "ln", "lim", "sin", "cos", "tan", "sec", "csc", "cot", "max", "min", "exp", "det", "deg", "gcd"]);
// 조판 지시라 글로 옮길 것이 없다.
const DROP = new Set(["displaystyle", "limits", "nolimits", "left", "right", "mathopen", "mathclose", "bigl", "bigr", "quad", "qquad", ",", ";", "!"]);
const SUP = Object.freeze({
  0: "⁰", 1: "¹", 2: "²", 3: "³", 4: "⁴", 5: "⁵", 6: "⁶", 7: "⁷", 8: "⁸", 9: "⁹", "+": "⁺", "-": "⁻",
  a: "ᵃ", b: "ᵇ", c: "ᶜ", d: "ᵈ", e: "ᵉ", i: "ⁱ", k: "ᵏ", m: "ᵐ", n: "ⁿ", p: "ᵖ", r: "ʳ", s: "ˢ", t: "ᵗ", x: "ˣ", y: "ʸ"
});
const SUB = Object.freeze({
  0: "₀", 1: "₁", 2: "₂", 3: "₃", 4: "₄", 5: "₅", 6: "₆", 7: "₇", 8: "₈", 9: "₉", "+": "₊", "-": "₋",
  a: "ₐ", e: "ₑ", h: "ₕ", i: "ᵢ", j: "ⱼ", k: "ₖ", l: "ₗ", m: "ₘ", n: "ₙ", o: "ₒ", p: "ₚ", r: "ᵣ", s: "ₛ", t: "ₜ", u: "ᵤ", v: "ᵥ", x: "ₓ"
});

/** text[open] 이 `{` 일 때 짝이 되는 `}` 위치. 없으면 -1. */
function matchBrace(text, open) {
  let depth = 0;
  for (let i = open; i < text.length; i += 1) {
    if (text[i] === "{") depth += 1;
    else if (text[i] === "}" && (depth -= 1) === 0) return i;
  }
  return -1;
}

/** `{...}` 또는 한 글자/한 명령을 하나의 인자로 떼어 { body, rest } 로 돌려준다. */
function takeArg(text) {
  const trimmed = text.replace(/^\s+/, "");
  if (trimmed.startsWith("{")) {
    const close = matchBrace(trimmed, 0);
    if (close > 0) return { body: trimmed.slice(1, close), rest: trimmed.slice(close + 1) };
  }
  const command = /^\\[a-zA-Z]+/.exec(trimmed);
  if (command) return { body: command[0], rest: trimmed.slice(command[0].length) };
  return { body: trimmed.slice(0, 1), rest: trimmed.slice(1) };
}

/** 한 덩어리로 묶여 있어야 읽히는가(분수의 분자처럼). 글자 하나나 괄호로 끝나면 그대로 둔다. */
function needsParens(text) {
  return text.length > 1 && !/^\(.*\)$/.test(text) && /[+\-×÷\s]/.test(text);
}

function convert(math) {
  let out = "";
  let rest = math;
  while (rest.length) {
    const command = /^\\([a-zA-Z]+|.)/.exec(rest);
    if (!command) {
      const char = rest[0];
      rest = rest.slice(1);
      if (char === "^" && /^\s*\\circ/.test(rest)) {
        // `90^\circ` 는 각도다. 위첨자로 올리지 않고 도 기호를 붙인다.
        rest = rest.replace(/^\s*\\circ/, "");
        out += "°";
      } else if (char === "^" || char === "_") {
        const table = char === "^" ? SUP : SUB;
        const arg = takeArg(rest);
        rest = arg.rest;
        // 유니코드에 있는 글자만으로 되어 있으면 올려/내려 쓰고, 아니면 `^(…)` 로 편다.
        // 편 쪽도 안쪽을 다시 변환해야 `a^(px^{2}+qx+r)`·`lim_(h\to 0)` 같은 자리가 날것으로 남지 않는다.
        const inner = convert(arg.body);
        out += [...arg.body].every((c) => table[c]) ? [...arg.body].map((c) => table[c]).join("") : `${char}${inner.length > 1 ? `(${inner})` : inner}`;
      } else if (char !== "{" && char !== "}") out += char;
      continue;
    }
    const name = command[1];
    rest = rest.slice(command[0].length);
    // LaTeX 에서 명령 이름 뒤 공백은 이름의 끝을 알리는 구분자이지 띄어쓰기가 아니다.
    // 삼키지 않으면 `A\cap B` 가 「A∩ B」로 벌어진다.
    if (/^[a-zA-Z]+$/.test(name)) rest = rest.replace(/^[ \t]+/, "");
    if (name === "dfrac" || name === "frac" || name === "tfrac") {
      const top = takeArg(rest); const bottom = takeArg(top.rest);
      rest = bottom.rest;
      const a = convert(top.body), b = convert(bottom.body);
      out += `${needsParens(a) ? `(${a})` : a}/${needsParens(b) ? `(${b})` : b}`;
    } else if (name === "sqrt") {
      const arg = takeArg(rest); rest = arg.rest;
      const inner = convert(arg.body);
      out += `√${inner.length > 1 ? `(${inner})` : inner}`;
    } else if (name === "comp") {
      const arg = takeArg(rest); rest = arg.rest;
      out += `${convert(arg.body)}ᶜ`;
    } else if (name === "mathrm" || name === "text" || name === "textrm" || name === "pt" || name === "mbox" || name === "operatorname") {
      const arg = takeArg(rest); rest = arg.rest;
      out += convert(arg.body);
    } else if (name === "overrightarrow" || name === "overline" || name === "vecAB") {
      const arg = takeArg(rest); rest = arg.rest;
      out += convert(arg.body);
    } else if (name === "mkern" || name === "kern" || name === "hspace") {
      rest = rest.replace(/^\s*-?[\d.]+\s*[a-z]{0,2}/, "");
    } else if (name === "circ") {
      // `90^\circ` 는 도, `f \circ g` 는 합성.
      out += /[⁰¹²³⁴⁵⁶⁷⁸⁹\^]$/.test(out) ? "°" : "∘";
    } else if (SYMBOLS[name]) out += SYMBOLS[name];
    else if (WORDS.has(name)) out += name;
    else if (DROP.has(name)) { /* 조판 지시 — 버린다 */ }
    else if (name === "begin" || name === "end") { const arg = takeArg(rest); rest = arg.rest; }
    else if (name === "\\") out += " / "; // 식 안의 줄바꿈(cases 두 줄 등)은 한 줄에 「/」 로 편다
    else if (!/^[a-zA-Z]+$/.test(name)) out += name; // \{ \% 같은 이스케이프
    else out += name; // 모르는 명령은 이름이라도 남긴다(사라지는 것보다 낫다)
  }
  return out;
}

export function prettifyMathLabel(label) {
  const text = String(label ?? "");
  if (!text.includes("$")) return text;
  // 짝이 맞는 `$...$` 만 바꾼다. 홀수 개면 원문 그대로 둔다(깨진 전사를 더 깨뜨리지 않는다).
  const parts = text.split("$");
  if (parts.length % 2 === 0) return text;
  return parts.map((part, index) => (index % 2 === 1 ? convert(part) : part)).join("").replace(/\s{2,}/g, " ").trim();
}

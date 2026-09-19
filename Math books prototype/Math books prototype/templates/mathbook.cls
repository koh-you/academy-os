\NeedsTeXFormat{LaTeX2e}
\ProvidesClass{mathbook}[2026/05/26 v2 Korean Math Textbook Class]

% -- Options --
\DeclareOption*{\PassOptionsToClass{\CurrentOption}{article}}
\ProcessOptions\relax

\LoadClass[8pt]{extarticle}

% -- Core Packages --
\RequirePackage{geometry}
\RequirePackage{fontspec}
\RequirePackage{kotex}
\RequirePackage{amsmath,amssymb,amsthm}
\RequirePackage{mathtools}
\RequirePackage{tikz}
\usetikzlibrary{calc}
\RequirePackage{tcolorbox}
\tcbuselibrary{skins,breakable}
\RequirePackage{fancyhdr}
\RequirePackage{titlesec}
\RequirePackage{enumitem}
\RequirePackage{multicol}
\RequirePackage{graphicx}
\RequirePackage{xcolor}
\RequirePackage{hyperref}
\RequirePackage{etoolbox}
\RequirePackage{paracol}

% -- Load sub-styles --
\RequirePackage{mathbook-colors}
\RequirePackage{mathbook-layout}
\RequirePackage{mathbook-boxes}
\RequirePackage{mathbook-problems}

% -- Fonts --
\setmainfont{Malgun Gothic}
\setsansfont{Malgun Gothic}
\setmonofont{Consolas}

% -- Math font --
\RequirePackage{unicode-math}
\setmathfont{Latin Modern Math}

% -- Global list settings --
\setlist{nosep, leftmargin=1.5em}

% -- Line skip: 인라인 \dfrac strut(아래 재정의)와 연동 --
% \dfrac 인라인 사용시 strut가 line height/depth를 키움 → natural gap이 음수가 됨
% → lineskip(4pt)이 발동해 추가 여백 확보. 평문 줄은 발동 안 함.
\setlength{\lineskip}{4pt}
\setlength{\lineskiplimit}{0pt}

% -- 인라인 \dfrac 위/아래 여백 자동 보강 --
% textstyle(인라인)에서만 strut 추가 → 분수 줄의 height/depth가 강제로 늘어남
% displaystyle($$...$$)에서는 strut 없음 (이미 \abovedisplayskip 적용됨)
% scriptstyle 등도 strut 없음
\let\origdfrac\dfrac
\renewcommand{\dfrac}[2]{\mathchoice
  {\origdfrac{#1}{#2}}%
  {\rule[-9pt]{0pt}{14pt}\origdfrac{#1}{#2}}%
  {\origdfrac{#1}{#2}}%
  {\origdfrac{#1}{#2}}%
}

% -- Two-column environment for STEP sections --
\setlength{\columnsep}{18pt}
\setlength{\columnseprule}{0pt}

% -- Hyperref --
\hypersetup{
  colorlinks=false,
  pdfencoding=auto
}

\endinput

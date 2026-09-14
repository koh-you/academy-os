import { create, all } from 'mathjs'

const math = create(all)

const expr = process.argv[2]
if (!expr) {
  console.error('Usage: node math-verify.mjs "<expression>"')
  console.error('Examples:')
  console.error('  node math-verify.mjs "2^10"')
  console.error('  node math-verify.mjs "sqrt(144)"')
  console.error('  node math-verify.mjs "derivative(\"x^3 + 2*x\", \"x\")"')
  console.error('  node math-verify.mjs "simplify(\"2x + 3x\")"')
  console.error('  node math-verify.mjs "solve(\"x^2 - 5*x + 6\", \"x\")"')
  process.exit(1)
}

try {
  const result = math.evaluate(expr)
  console.log(`Expression: ${expr}`)
  console.log(`Result: ${math.format(result, { precision: 14 })}`)
} catch (e) {
  console.error(`Error: ${e.message}`)
  process.exit(1)
}

export function add(x, y) {
  return Math.round((x + y) * 1000) / 1000
}

export function rem(x, y) {
  return Math.round((x % y) * 1000) / 1000
}

export function revRem(x, y, value) {
  return Math.round((value * 1000) / 1000)
}

export function revDiv(x, y, value) {
  return value
}

export function sub(x, y) {
  return Math.round((x - y) * 1000) / 1000
}

export function mul(x, y) {
  return Math.round((x * y) * 1000) / 1000
}

export function div(x, y) {
  return Math.round((x / y) * 1000) / 1000
}

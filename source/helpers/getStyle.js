import get from "get-value"

// Returns concatenated string like `styleRule: value` if value exists
export default (styleRule, key, props = {}) => {
  const value = get(props, key)
  return value !== undefined ? `${styleRule}: ${value}` : undefined
}

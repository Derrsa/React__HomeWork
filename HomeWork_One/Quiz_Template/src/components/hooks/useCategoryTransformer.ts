export function useCategoryTransformer(code) {
  switch (code) {
    case "27":
      return "Animals";
    case "21":
      return "Sports";
    case "16":
      return "Games";
    default:
      return "Animals";
  }
}

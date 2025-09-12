/**
 * Given an array of option objects and an array of selected values (strings),
 * returns the filtered array of options that match those selected values.
 */
export function getSelectedOptions(
  allOptions: { value: string; label: string }[],
  selectedValues: string[] | undefined
) {
  if (!Array.isArray(selectedValues)) return [];
  return allOptions.filter((opt) => selectedValues.includes(opt.value));
}

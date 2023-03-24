import { type Option } from '../../../types';

export const getOptionName = (
  options: Option[],
  optionValue: string,
): string => {
  for (const [name, value] of options) {
    if (value === optionValue) {
      return name;
    }
  }

  return options[0][0];
};

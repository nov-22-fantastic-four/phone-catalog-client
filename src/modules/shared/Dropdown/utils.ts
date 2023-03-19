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

  throw Error(`Option with value ${optionValue} doesn't exist!`);
};

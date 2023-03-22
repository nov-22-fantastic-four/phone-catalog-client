const Color = {
  midnightgreen: '#004953',
  spacegray: '#717378',
  rosegold: '#b76e79',
} as const;

export type ColorName = keyof typeof Color;

export const getColorHex = (
  color: ColorName,
): string | undefined => Color[color];

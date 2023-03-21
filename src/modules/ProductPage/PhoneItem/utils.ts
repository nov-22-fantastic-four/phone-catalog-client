enum Color {
  gold = 'gold',
  silver = 'silver',
  midnightgreen = '#004953',
  rosegold = '#b76e79',
  spacegray = '#808080',
}

export const getColorHex = (color: string): string => (
  Color[color as typeof Color] || color
);

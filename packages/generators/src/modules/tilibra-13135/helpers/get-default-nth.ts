export const getDefaultNth = (index: number, total: number) =>
  `${String(index + 1).padStart(String(total).length, '0')}/${total}`;

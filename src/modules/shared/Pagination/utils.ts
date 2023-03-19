export const getPages = (
  currentPage: number,
  totalPages: number,
): number[] => {
  const pages = Array<number>(7)
    .fill(currentPage - 3)
    .map((p, i) => p + i)
    .filter(p => p >= 1 && p <= totalPages);

  while (pages.length > 4) {
    const diffWithFirst = currentPage - pages[0];
    const diffWithLast = pages[pages.length - 1] - currentPage;

    if (diffWithFirst < diffWithLast) {
      pages.pop();
    } else {
      pages.shift();
    }
  }

  return pages;
};

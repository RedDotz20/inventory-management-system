const toStr = (input: string) => {
  const items = input.trim().split(',');
  const parsedItems = items.map((item) => {
    return item.trim();
  });
  return parsedItems;
};

const toInt = (input: string) => {
  const items = input.trim().split(',');
  const parsedItems = items.map((item) => {
    return Number(item.trim());
  });
  return parsedItems;
};

export default { toStr, toInt };

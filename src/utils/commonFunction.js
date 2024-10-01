export const objectKeys = (obj) => {
  return Object.keys(obj);
};

export const objectEntries = (obj) => {
  return Object.entries(obj);
};

export const objectFromEntries = (arr) => {
  return Object.fromEntries(arr);
};

export const getNumber = (value) => {
  return value.match(/^(\d+)/);
};

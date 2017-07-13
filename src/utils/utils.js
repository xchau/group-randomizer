export const options = [
  { label: '2', value: 2 },
  { label: '3', value: 3 },
  { label: '4', value: 4 },
];

export const shuffle = (arr) => {
  let temp;

  for (let i = 0; i < arr.length; i++) {
    let randNum = Math.floor(Math.random() * arr.length);

    temp = arr[i];
    arr[i] = arr[randNum];
    arr[randNum] = temp;
  }

  return arr;
};

export const groupify = (arr, n) => {
  const groups = {};
  let idx = 1;
  let name;

  while (arr.length) {
    name = arr.shift();

    if (!groups.hasOwnProperty(String(idx))) {
      groups[String(idx)] = [];
      groups[String(idx)].push(name);
    }
    else {
      groups[String(idx)].push(name);
    }

    idx += 1;

    if (idx > n) idx = 1;
  }

  return groups;
};

export const capitalize = (str) => {
  return `${str[0].toUpperCase()}${str.slice(1)}`;
}

export const createSet = (str) => {
  let set = str.split(',').map(elem => capitalize(elem.trim())).filter(elem => elem);

  return shuffle(set);
}

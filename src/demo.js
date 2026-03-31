const array = [
  {
    item: 'Bluetooth Speaker',
    price: 49.99,
    isGift: true,
  },
  {
    item: 'Office Chair',
    price: 135.99,
    isGift: true,
  },
];

const output = array.filter((d) => d.isGift === true);

const testFunction = () => {};

function calculateCost(arr) {
  const total = arr.reduce((acc, data) => {
    if (data.isGift) acc = acc + data.price;
    return acc;
  }, 0); // Your code here!
  console.log(total); //559.9300000000001
  return Math.round(total * 100) / 100;
}

function calTotalCost(arr) {
  const total = arr.reduce((acc, currentVal) => {
    acc = currentVal.price + acc;
    return acc;
  }, 0);
  return total;
}

const totalCost = (array) => {
  const total = array.reduce((acc, currentVal) => {
    acc = currentVal.price + acc;
    return acc;
  }, 0);
  return total;
};

const totalPrice = () => {
  const total = array.reduce((acc, currentVal) => {
    acc = acc + currentVal.price;
    return acc;
  }, 0);
};

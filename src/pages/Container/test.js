const array = [1, 2, 4, 5];

/**
 * Attempts to delete one item of the specified value from the container
 *
 * @param {number} value
 * @return {boolean} true, if the value has been deleted, or false, otherwise.
 */
const onDelete = (num) => {
  const removeIndex = array.indexOf(num);
  if (removeIndex === -1) return false;

  array.splice(removeIndex, 1);
  return true;
};
onDelete(10);
console.log(array);

const findMedium = () => {
  const sorted = [...array].sort((a, b) => a - b);
  const mid = Math.floor((sorted.length - 1) / 2);
  console.log(mid);
};

findMedium();

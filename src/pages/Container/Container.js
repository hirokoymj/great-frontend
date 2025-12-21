/**
 * Add 1, 2, 5, 4 -> [1, 2, 4, 5]
 * Median of [1, 2, 4, 5] is 2
 * Delete 1 -> [2, 4, 5]
 * Median of [2, 4, 5] is 4
 */

class Container {
  constructor() {
    this.array = [];
  }

  add(value) {
    this.array.push(value);
  }

  /**
   * Attempts to delete one item of the specified value from the container
   *
   * @param {number} value
   * @return {boolean} true, if the value has been deleted, or false, otherwise.
   */
  delete(value) {
    const index = this.array.indexOf(value);

    if (index === -1) {
      return false;
    }

    this.array.splice(index, 1); // remove ONE item
    return true;
  }

  /**
   * Finds the container's median integer value, which is
   * the middle integer when the all integers are sorted in order.
   * If the sorted array has an even length,
   * the leftmost integer between the two middle
   * integers should be considered as the median.
   *
   * @return {number} the median if the array is not empty, or
   * @throws {Error} a runtime exception, otherwise.
   */
  getMedian() {
    if (this.array.length === 0) {
      throw new Error('Container is empty');
    }

    const sorted = [...this.array].sort((a, b) => a - b);
    const mid = Math.floor((sorted.length - 1) / 2);

    return sorted[mid];
  }
}

module.exports = Container;

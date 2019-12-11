stringsAnswers = {
  /**
   * Reduces a string by removing letters that repeat more than amount times.
   * 
   * Example: reduceString('aaaabbb', 1) should reduce to 'ab'
   * Example: reduceString('aaaabbb', 2) should reduce to 'aabb'
   * 
   * @param {String} str - String that is to be reduced
   * @param {Number} amount - The maximum number of adjacent repeated letters in the result string.
   * @returns {String} A string with no more than amount number of repeated letters.
   */
  reduceString: function reduceString(str, amount) {
    const temp = [];
    let ans = '';
    const count = [];
    let num = 1;
    for (let i = 1; i <= str.length; i++) {
      if (str[i - 1] !== str[i]) {
        temp.push(str[i - 1]);
        count.push(num);
        num = 1;
      } else {
        num++;
      }
    }
    for (let i = 0; i < temp.length; i++) {
      if (count[i] < amount) {
        ans = ans + temp[i].repeat(count[i]);
      } else {
        ans = ans + temp[i].repeat(amount);
      }
    }
    return ans;
  },

  /**
   * Reverses a string of text
   * 
   * Example: reverseString('abc') should be 'cba'
   * 
   * @param {String} str - a string of text to be reversed
   * @returns {String} The original string of text str reversed.
   */
  reverseString: function reverseString(str) {
    let left = 0;
    let right = str.length - 1;
    const arr = str.split('');
    while (left < right) {
      const temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
      left++;
      right--;
    }
    return arr.join('');
  },
};

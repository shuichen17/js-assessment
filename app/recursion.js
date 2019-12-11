recursionAnswers = {
  /**
   * List the files in a given directory, of a filesystem described by data.
   * Data is an object that looks like this:
   * {
      dirName: 'app',
      files: ['index.html', 'page.html'],
      subDirs: [{...}]
      }
   *
   * Where ... is the same type of object
   * 
   * @param {fileSystemObject} data - a file system object as described above
   * @param {String} dirName - a directory name the files are desired to be listed from.
   * Note: This parameter is optional. If it is not provided, list ALL files.
   * 
   * @returns {Number[]} The files under the directory dirName, including subdiretories.
   */
  listFiles: function listFiles(data, dirName) {
    const ans = [];
    function helperAll(system, temp) {
      if (system.files !== undefined) {
        temp.push(...system.files);
      }
      if (system.subDirs.length !== 0) {
        for (let i = 0; i < system.subDirs.length; i++) {
          helperAll(system.subDirs[i], temp);
        }
      }
      return temp;
    }
    function helperSub(system, name, temp) {
      if (system.files !== undefined && system.dirName === name) {
        temp.push(...system.files);
        if (system.subDirs.length !== 0) {
          for (let i = 0; i < system.subDirs.length; i++) {
            helperAll(system.subDirs[i], temp);
          }
        }
      }
      if (system.subDirs.length !== 0) {
        for (let i = 0; i < system.subDirs.length; i++) {
          helperSub(system.subDirs[i], name, temp);
        }
      }
      return temp;
    }
    if (dirName === undefined) {
      return helperAll(data, ans);
    }
    return helperSub(data, dirName, ans);
  },

  /**
   * Determines the fibonacci number at position n.
   * https://en.wikipedia.org/wiki/Fibonacci_number
   * 
   * The first few fibonacci numbers are: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
   * 
   * @param {Number} n - the index of the fibonacci number desired
   * @returns {Number} The nth fibonacci number
   */
  fibonacci: function fibonacci(n) {
    if (n <= 1) {
      return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
  },
};

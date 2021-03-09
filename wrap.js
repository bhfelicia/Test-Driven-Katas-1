const wrap = (line, maxLength) => {
  const arrLine = line.split("");
  const returnArr = [];
  for (let i = 0; i < arrLine.length; i++) {
    if ((i + 1) % maxLength === 0) {
      const newArr = arrLine.slice(0, i);
      const idxOfSpace = newArr.find(" ");
      newArr.splice(idxOfSpace, "\n");
      returnArr.concat(newArr);
    }
    return returnArr.join("");
  }
};
module.exports = wrap;

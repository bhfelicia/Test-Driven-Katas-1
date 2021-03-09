const wrap = (line, maxLength) => {
  const arrLine = line.split('');
  let returnArr = [];
  for (let i = 0; i < arrLine.length; i++) {
    if ((i + 1) % maxLength === 0) {
      const newArr = arrLine.slice(0, i);
      const reverse = newArr.reverse();
      const idxOfSpace = reverse.indexOf(' ');
      reverse.splice(idxOfSpace, 0, '\n');
      const backToNormal = reverse.reverse();
      returnArr = returnArr.concat(backToNormal);
    }
  }
  return returnArr.join('');
};
module.exports = wrap;

const wrap = (line, maxLength) => {
  const arrLine = line.split("");
  let returnArr = [];
  let value = 0;
  for (let i = 0; i < arrLine.length; i++) {
    if ((i + 1) % maxLength === 0) {
      let newArr = arrLine.slice(value, i);

      value = i;
      console.log(arrLine[i + 1]);
      if (arrLine[i + 1] === " ") {
        console.log("in the if");
        returnArr = returnArr.concat(newArr);
      } else {
        const reverse = newArr.reverse();
        const idxOfSpace = reverse.indexOf(" ");

        reverse.splice(idxOfSpace, 0, "\n");
        const backToNormal = reverse.reverse();
        returnArr = returnArr.concat(backToNormal);
      }
    }
  }
  return returnArr.join("");
};
module.exports = wrap;

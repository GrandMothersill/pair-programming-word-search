const wordSearch = (letters, word) => {
  let reversedWord = word.split('').reverse().join('');
  console.log(reversedWord);
  const horizontalJoin = letters.map(ls => ls.join(''));
  if (horizontalJoin) {
    for (let l of horizontalJoin) {
      if (l.includes(word || reversedWord)) {
        return true;
      }
    }
  }

  const verticalJoin = letters.map(ls => ls.join(''));
  if (verticalJoin) {
    for (let i = 0; i < verticalJoin[1].length; i++) {
      const subArray = [];
      for (let j = 0; j < verticalJoin.length; j++) {
        subArray.push(verticalJoin[j][i]);
      }
      let newString = subArray.join('');
      if (newString.includes(word || reversedWord)) {
        return true;
      }
    }
  }
  return false;
};


module.exports = wordSearch;
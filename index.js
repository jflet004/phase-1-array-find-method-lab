// code your solution here
const record = [
    { year: "2015", result: "L"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "W"},
    //...
  ]

function superbowlWin(array) {
  const findWinningRecord = array.find(obj => obj.result === "W");
  if(findWinningRecord) {
    return findWinningRecord.year;
  }
}

//console.log(superbowlWin(record));

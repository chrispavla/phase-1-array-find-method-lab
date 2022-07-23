// function superbowlWin(array) {

//     let football = array.find(element => element.result === "W");

//     if(!!football) {
//      return football.year;
//     }

// }

////////////////////////

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
function superbowlWin(arr) {
  let finder = arr.find((element) => element.result === "W");

  if (finder) {
    return finder.year;
  }
}

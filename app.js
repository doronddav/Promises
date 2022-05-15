let firstFile = document.getElementById("firstFile");
let secondFile = document.getElementById("secondFile");
let thirdFile = document.getElementById("thirdFile");

let num = Math.random(Math.trunc()) * 10;

const uploadFirstFile = new Promise(function (resolve, reject) {
  firstFile.innerHTML = "Checking for file update ";
  setTimeout(function () {
    if (num > 5) {
      resolve(
        (firstFile.innerHTML = "The file with your money is updated  💰")
      );
    } else {
      reject(new Error((firstFile.innerHTML = "The upload was failed")));
    }
  }, 2000);
});

const uploadsecondFile = new Promise(function (resolve, reject) {
  secondFile.innerHTML = "Checking for file update ";
  setTimeout(function () {
    if (num > 1) {
      resolve(
        (secondFile.innerHTML = "The file with your money is updated  💰")
      );
    } else {
      reject(new Error((secondFile.innerHTML = "The upload was failed")));
    }
  }, 4000);
});

const uploadThirdFile = new Promise(function (resolve, reject) {
  thirdFile.innerHTML = "Checking for file update ";
  setTimeout(function () {
    if (num > 7) {
      resolve(
        (thirdFile.innerHTML = "The file with your money is updated  💰")
      );
    } else {
      reject(new Error((thirdFile.innerHTML = "The upload was failed")));
    }
  }, 6000);
});

console.log(num);

setInterval(2, 1000);
function printCondition() {
  console.log(uploadFirstFile, uploadsecondFile, uploadThirdFile);
}

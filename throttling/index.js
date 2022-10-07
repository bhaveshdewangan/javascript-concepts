function doPerformExpensiveTask() {
  console.log("performing...");
}

const progressBar = document.querySelector(".progress-bar");
console.log(progressBar);
const throttling = function (fn, delay) {
  let allowToCall = true;
  const context = this;
  const argv = [];

  return function () {
    if (allowToCall) {
      allowToCall = false;
      fn.apply(context, argv);
      if (progressBar) {
        console.log("index", progressBar, progressBar.offsetWidth);
        progressBar.dataset.barwidth =
          Number(progressBar.getAttribute("data-barwidth")) + 10;
        progressBar.style.width =
          Number(progressBar.getAttribute("data-barwidth")) + "%";

        progressBar.style["background-color"] = "red";
      }
      setTimeout(() => {
        allowToCall = true;
      }, delay);
    }
  };
};

const methodToBeUsed = throttling(doPerformExpensiveTask, 1000);

const codes = document.querySelectorAll("input");
console.log(codes[0]);
window.onload = () => {
  codes[0].focus();
};

codes.forEach(function (code, ind) {
  code.addEventListener("keydown", function (e) {
    if (e.key == "Backspace") {
      setTimeout(() => {
        if (ind > 0) codes[ind - 1].focus();
        codes[ind].classList.remove("done");
      }, 10);
    } else if (e.key >= 0 && e.key <= 9) {
      codes[ind].value = "";
      setTimeout(() => {
        if (ind < 5) {
          codes[ind + 1].focus();
        }
        codes[ind].classList.add("done");
      }, 10);
    }
  });
});
// console.log();

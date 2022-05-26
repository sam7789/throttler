const callback = () => {
  console.log("APi debounce in progress");
};

const throttle = (fn, wait) => {
  let lastcall = 0;
  return function () {
    if (Date.now() - lastcall > wait) {
      lastcall = Date.now();
      fn.apply(this, arguments);
    }
  };
};

window.addEventListener("load", function () {
  var btn = document.getElementById("click");
  btn.addEventListener("click", throttle(callback, 2000));
});

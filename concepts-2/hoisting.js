function x() {
  for (var i = 0; i < 5; i++) {
    function closure(i) {
      setTimeout(() => {
        console.log(i);
      }, i * 1000);
    }
    closure(i);
  }

  console.log("run");
}

x();

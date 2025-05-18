const debouncing = (fn, delay) => {
  let timer;

  return function (...args) {
    console.log({ args });
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

const search = (term, ...args) => {
  console.log(term, args);
};

const searchWithDebounce = debouncing(search);

searchWithDebounce("A");
searchWithDebounce("App");
searchWithDebounce("Apple");
searchWithDebounce("Apple M");
searchWithDebounce("Apple Macbook", "df", "dfdf");

const debouncing = (fn, delay) => {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
};

const search = (term, ...args) => {
  console.log(term, args);
};

const searchWithDebounce = debouncing(search, 500);

searchWithDebounce("A");
searchWithDebounce("App");
searchWithDebounce("Apple");
searchWithDebounce("Apple M");
searchWithDebounce("Apple Macbook", "df", "dfdf");

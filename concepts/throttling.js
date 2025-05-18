const throttling = (fn, delay) => {
  let lastCall = 0;

  return function (...args) {
    let now = Date.now();

    console.log({ now, lastCall }, now - lastCall, delay);

    if (now - lastCall < delay) {
      return;
    }

    lastCall = now;
    return fn(...args);
  };
};

const sendMessage = (message) => {
  console.log(`Sending message: ${message}`);
};

const sendMessageInSlowMode = throttling(sendMessage, 1000);

sendMessageInSlowMode("Hi");
sendMessageInSlowMode("Hi there!!");
sendMessageInSlowMode("Hi!!!!!!!!!!!!!!");
sendMessageInSlowMode("Lambo");
sendMessageInSlowMode("Bruh");

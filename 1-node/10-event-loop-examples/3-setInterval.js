setInterval(() => {
  console.log("hello world");
}, 2000); // every 2 seconds event loop invoke the callback
console.log("I will run first");
// process stays alive unless
// Kill Process Control + C
// unexpected error

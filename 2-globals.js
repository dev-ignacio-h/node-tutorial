// GLOBALS - NO WINDOW!!!

// __dirname  - path to current directory
// __filename - file name
// require    - funtion to use modules (CommonJS)
// module     - info about current module (files)
// process    - info about env where the program is being executed
// setInterval()
// setTimeout()

// console.log(__dirname);
// console.log(__filename);
// console.log(require);
// console.log(module);
console.log(process);

setInterval(() => {
    console.log('hello world');
}, 1000)

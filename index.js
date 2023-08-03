const { printsomething } = require("./libs/entrypoint.js")

const currentTs = Date.now();


(async () => {
    const stringtoprint = await printsomething();
    console.log(`String to print: ${stringtoprint}`);
})();

console.log(`Time taken: ${Date.now() - currentTs}ms`);
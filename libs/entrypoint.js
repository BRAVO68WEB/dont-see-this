const lexthisshit = require("../modules/lexer");
const getSomethingToPrint = require("../helpers/WHATTOPRINT");
const { unlexit } = require("../modules/unlex");
const { converttouuid } = require("../utils/converter");

const printsomething = async () => {
    const whatiwanttoprint = await getSomethingToPrint();
    const tokens = lexthisshit(whatiwanttoprint);
    const unlexed = unlexit(tokens);
    const disguiseduuid = converttouuid(unlexed);
    return disguiseduuid;
}

module.exports = { 
    printsomething
};
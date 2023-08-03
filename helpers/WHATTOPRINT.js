const { randomjibrish } = require('../utils/rand');

const printsomething_worker = async () => {
    let whatiwanttoprint = '';
    await Promise.all([
        randomjibrish(),
        randomjibrish(),
        randomjibrish(),
        randomjibrish(),
        randomjibrish(),
    ]).then((values) => {
        for (const element of values) {
            whatiwanttoprint += element.charAt(5);
            whatiwanttoprint += element.charAt(50);
            whatiwanttoprint += element.charAt(500);
            whatiwanttoprint += element.charAt(5000);
            whatiwanttoprint += element.charAt(1);
            whatiwanttoprint += element.charAt(10);
            whatiwanttoprint += element.charAt(100);
            whatiwanttoprint += element.charAt(1000);
        }
    })

    return whatiwanttoprint;
};

const printsomething_hub = async () => {
    const whatiwanttoprint = await Promise.all([
        printsomething_worker(),
        printsomething_worker(),
        printsomething_worker(),
        printsomething_worker(),
        printsomething_worker(),
        printsomething_worker(),
        printsomething_worker(),
        printsomething_worker(),
    ]).then((values) => {
        let whatiwanttoprint = '';
        for (let i = 0; i < values.length; i++) {
            if (i % 2 === 0) {
                for (let j = 0; j < values[i].length; j++) {
                    if (j % 2 === 0) {
                        whatiwanttoprint += values[i].charAt(j);
                    }
                }
            } else {
                for (let j = 0; j < values[i].length; j++) {
                    if (j % 2 !== 0) {
                        whatiwanttoprint += values[i].charAt(j);
                    }
                }
            }
        }

        return whatiwanttoprint;
    })

    return whatiwanttoprint ?? '';
}

const printsomething = async () => {
    const whatiwanttoprint = await printsomething_hub();
    const tokens = [];
    for (let i = 0; i < 32; i++) {
        tokens.push(whatiwanttoprint.charAt(Math.floor(Math.random() * whatiwanttoprint.length)));
    }
    return tokens.join('');
}

module.exports = printsomething;
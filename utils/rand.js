const randomjibrish = () => {
    return new Promise((resolve, reject) => {
        const jibrish = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        let random = '';

        for (let i = 0; i < 1000000; i++) {
            random += jibrish.charAt(Math.floor(Math.random() * jibrish.length));
        }

        resolve(random);
    })
}

module.exports = {
    randomjibrish
}
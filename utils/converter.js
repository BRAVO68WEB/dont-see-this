const converttouuid = (id) => {
    let iwantthis = id.slice(0, 8) + '-' + id.slice(8, 12) + '-' + id.slice(12, 16) + '-' + id.slice(16, 20) + '-' + id.slice(20)
    iwantthis = iwantthis.toLocaleLowerCase();
    return iwantthis;
}

module.exports = {
    converttouuid
}
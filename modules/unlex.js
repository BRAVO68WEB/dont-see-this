const unlexit = (tokens) => {
    let unlexed = "";
    for (let i = 0; i < tokens.length; i++) {
        unlexed += tokens[i].value;
    }
    return unlexed;
}

module.exports = {
    unlexit
};
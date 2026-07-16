exports.sleep = ms =>
    new Promise(r => setTimeout(r, ms));

exports.now = () =>
    new Date().toISOString();

exports.chunk = (arr, size) => {

    let out = [];

    for (let i = 0; i < arr.length; i += size)
        out.push(arr.slice(i, i + size));

    return out;

};

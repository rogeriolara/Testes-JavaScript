function filtraPares (arr) {
    return arr.filter(callback);
}

function callback (item) {
    return item % 2 ===0;
}

const meuArray = [1, 26, 6,16,93,41,55];

console.log(filtraPares(meuArray));
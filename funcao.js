function parimpar(n) {
    if (n%2 ==0) {
        return `Par!`
    } else {
        return `Ímpar`
    }
}

let res = parimpar(19) // esse 19 é o n
console.log(res)
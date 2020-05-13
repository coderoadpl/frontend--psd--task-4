const makeHello = function (name) {
    return function () {
        console.log('Hello world ' + name)
    }
}

const hello1 = makeHello('Mateusz')
const hello2 = makeHello('Tadeusz')

hello1()
hello2()

console.log(hello1 === hello2) // false

const callWithNumber2 = function (fn) {
    return fn(2)
}

const add2 = function (x) {
    return x + 2
}

console.log(
    callWithNumber2(add2)
)

callWithNumber2(console.log)
var b = []
var a = 6
function printingNumbers(n) {
    if (n > 0) {
        n = n - 1
        b.push(n)
        printingNumbers(n)

    } else {
        console.log(b)//can do sorting as well
        return
    }

}
printingNumbers(a)









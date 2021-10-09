var numbersArray = [1, 2, 3]

function square(n) {
    return n * n
}

function generateSquares(array) {
    var sqauresArray = []
    for (let i = 0; i < array.length; i++) {
        sqauresArray.push(square(array[i]))

    }
    console.log(sqauresArray)
    return sqauresArray
}
generateSquares(numbersArray)


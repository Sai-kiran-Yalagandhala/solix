function cartesian(...args) {
    var r = [], max = args.length - 1;
    function helper(arr, i) {
        for (var j = 0, l = args[i].length; j < l; j++) {
            var a = arr.slice(0); // clone arr
            a.push(args[i][j]);
            if (i == max)
                r.push(a);
            else
                helper(a, i + 1);
        }
    }
    helper([], 0);
    return r;
}




function filterResults(array, total) {
    var createSum = (previousValue, currentValue) => previousValue + currentValue;
    var threeCombinations = cartesian(array, array, array);
    var twoCombinations = cartesian(array, array);
    var results = twoCombinations.concat(threeCombinations);
    var finalArray = [];
    for (var k = 0; k < results.length; k++) {
        if (results[k].reduce(createSum) == total) {
            finalArray.push(results[k]);
        }
    }
    var filteredResult = [];
    finalArray.forEach(function (item) {
        if (filteredResult.indexOf(item) < 0) {
            filteredResult.push(item);
        }
    });

    var data = finalArray

    var hashMap = {}

    data.forEach(function (arr) {
        // If your subArrays can be in any order, you can use .sort to have consistant order
        hashMap[arr.join("|")] = arr;
    });

    var result = Object.keys(hashMap).map(function (k) {
        return hashMap[k]
    })

    console.log(result)

}

filterResults([1, 1, 2, 3, 4], 5)
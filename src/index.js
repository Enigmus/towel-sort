// You should implement your task here.

module.exports = function towelSort(matrix = []) {
    return matrix.map((el, ind) => (ind % 2 ? el.reverse() : el)).flat();
};

// console.log(
//     towelSort([
//         [1, 2, 3, 4],
//         [5, 6, 7, 8],
//         [9, 10, 11, 12],
//         [13, 14, 15, 16],
//     ])
// );

//console.log(towelSort([]));

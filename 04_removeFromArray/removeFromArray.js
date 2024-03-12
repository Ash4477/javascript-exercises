const removeFromArray = function(array, ...vals) {

    let newArray = [];

    array.forEach(element => {
        if (!vals.includes(element)) newArray.push(element);
    });

    return newArray;
};  

// Do not edit below this line
module.exports = removeFromArray;

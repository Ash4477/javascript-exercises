const sumAll = function(start,end) {

    // if any arg is negative
    if ((start < 0) || (end < 0) || (typeof start != "number") || (typeof end != "number")) {
        return 'ERROR';
    }

    // if start is greater than end
    if (start > end) {
        let temp = start;
        start = end;
        end = temp;
    }

    let finalSum  = 0;

    for (let i = start; i <= end; i++) {
        finalSum += i;
    }

    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;

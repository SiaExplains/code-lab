function getSequenceSum(i, j, k) {
    if (i === j && j === k) {
        return k;
    }
    let result = 0;
    let d1 = Math.abs(j - i);
    d1 = j != i ? d1 + 1 : d1;
    let d2 = Math.abs(j - k);

    let path = true;
    while (d1 != 0 || d2 != 0) {
        if (path) {
            result += i;
            i++;
            d1--;
            if (d1 === 0) {
                path = false;
            }
        } else {
            result += j - 1;
            j--;
            d2--;
        }
    }

    return result;
}

console.log(getSequenceSum(6, 6, 6));

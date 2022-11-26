'use strict';

/**
 *
 * @param list obj with length property, like array
 * @param target searched element
 * @param startIdx start index
 * @returns index (return -1 if not found)
 */
function midIndexOf(list, target, _a) {
    var _b = _a === void 0 ? {} : _a, startIdx = _b.startIdx, equalFn = _b.equalFn;
    var n = list.length;
    if (startIdx === undefined) {
        startIdx = Math.floor(n / 2);
    }
    if (startIdx < 0) {
        startIdx = 0;
    }
    else if (startIdx >= n) {
        startIdx = n - 1;
    }
    if (!equalFn) {
        equalFn = function (a, b) {
            return a === b;
        };
    }
    var i = startIdx;
    var j = startIdx + 1;
    while (i >= 0 || j < n) {
        if (i >= 0 && equalFn(list[i], target))
            return i;
        if (j < n && equalFn(list[j], target))
            return j;
        i--;
        j++;
    }
    return -1;
}

module.exports = midIndexOf;

/* Repeat a string repeat a string  */

/*
- Repeat a given string (first argument) num times (second argument).
- Return an empty string if num is not a positive number.
 Helpful links:
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
 */

function repeatStringNumTimes(str, num) {
    if (num < 0) {
        return '';
    } else {
        console.log(str.repeat(num));
        return str.repeat(num);
    }
}

repeatStringNumTimes("abc", 3);
repeatStringNumTimes("*", 3); //should return "***".
repeatStringNumTimes("abc", 3); //should return "abcabcabc".
repeatStringNumTimes("abc", 4); //should return "abcabcabcabc".
repeatStringNumTimes("abc", 1); //should return "abc".
repeatStringNumTimes("*", 8); //should return "********".
repeatStringNumTimes("abc", -2); //should return "".
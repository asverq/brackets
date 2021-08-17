module.exports = function check(str, bracketsConfig) {
    const strArr = str.split('')
    const stack = [];
    const BRACKETS_PAIR = {};
    bracketsConfig.forEach((item) => BRACKETS_PAIR[item[0]] = item[1]);

    for (let i = 0; i < strArr.length; i++) {
        const currSym = strArr[i];
        const stackHead = stack[stack.length - 1];
        if (BRACKETS_PAIR[stackHead] === currSym) {
            stack.pop();
        } else if (BRACKETS_PAIR[currSym]) {
            stack.push(currSym);
        } else {
            return false;
        }
    }

    return stack.length === 0;
}

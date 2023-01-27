module.exports = function check(str, bracketsConfig) {
  // your solution
 const symbols = str.split('');
    const brackets = [];
    const stack = [];

    for (let i = 0; i < bracketsConfig.length; i++) {
        brackets[bracketsConfig[i][0]] = bracketsConfig[i][1];
    }

    for (let i = 0; i < symbols.length; i++) {
        if (symbols[i] === stack[stack.length - 1]) {
            stack.pop();
        } else if (brackets[symbols[i]]) {
            stack.push(brackets[symbols[i]]);
        } else {
            return false;
        }
    }

    return (stack.length == 0) ? true : false;
}

const reverseString = function (string) {
    let splitString = string.split(""); //splits the string into an array
    let reversedString = splitString.reverse(); //reverses the array
    let joinString = reversedString.join(""); //joins the reversed array's all elements
    // console.log(joinString);
    return joinString;
};

reverseString("hello there!");
// Do not edit below this line
module.exports = reverseString;

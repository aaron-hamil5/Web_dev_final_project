function processText() {
    //https://www.tutorialspoint.com/find-number-of-spaces-in-a-string-using-javascript
    var str = "This is an example of spaces in   string";
    var numOfSpaces = str.split(" ").length - 1;
    document.getElementById("result").innerHTML = numOfSpaces;
}
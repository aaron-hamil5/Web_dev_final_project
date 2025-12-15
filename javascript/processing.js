function processText() {
    //https://www.tutorialspoint.com/find-number-of-spaces-in-a-string-using-javascript
    var str = document.getElementById("paragraph").value;
    var numOfSpaces = str.split(" ").length - 1;
    document.getElementById("result").innerHTML = numOfSpaces;
}
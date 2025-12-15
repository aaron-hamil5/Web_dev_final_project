function processText() {
    //https://www.tutorialspoint.com/find-number-of-spaces-in-a-string-using-javascript
    var inputtedText = document.getElementById("paragraph").value;
    //https://www.w3schools.com/jsref/jsref_lastindexof.asp
    var lastUwsIndex = inputtedText.lastIndexOf("uws");
    //https://www.w3schools.com/jsref/jsref_substring.asp
    var toRemove = inputtedText.substring(0, lastUwsIndex);
    //https://www.w3schools.com/jsref/jsref_replace.asp
    var updatedText = inputtedText.replace(toRemove, "");
    var numOfSpaces = updatedText.split(" ").length - 1;
    document.getElementById("result").innerHTML = "There is " + numOfSpaces + " spaces upto the last 'uws' in the paragraph.";
}
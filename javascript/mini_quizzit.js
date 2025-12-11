let checkboxToggle = false

function loadAnswer(){
    document.getElementById("quizzit_question").remove();
    document.getElementById("quizzit_answer").style.visibility = "visible";
}

function changeTitle() {
    checkboxToggle = !checkboxToggle;
    if (checkboxToggle) {
        document.getElementById("button_dialog").title = ("This will launch a login screen, this will not take in any data and if attempt to login will fail, taking you back to the Uniq Studio's website.");
    } else if (!checkboxToggle) {
        document.getElementById("button_dialog").title = ("You must agree before proceeding to the login.");
    }
}

function loadChattR(){
    document.getElementById("tac").remove();
    document.getElementById("login_screen").style.visibility = "visible";
}
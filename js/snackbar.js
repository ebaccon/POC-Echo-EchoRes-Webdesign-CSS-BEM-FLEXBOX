function openSnackbar(type, text) {
    var snackbar = document.getElementById("js-snackbar")

    // Close old Snackbar
    closeSnackbar(snackbar);
    
    // Put the correct class css
    if (type === "success") {
        snackbar.className = "show success";
    } else if (type === "warning") {
        snackbar.className = "show warning";
    } else if (type === "error") {
        snackbar.className = "show error";
    } else {
        snackbar.className = "show";
    }
    // Replace text
    snackbar.innerHTML = text;

    // Launch timer
    setTimeout(function(){ 
        closeSnackbar(snackbar);
    }, 3000);
}

function closeSnackbar(element) {
    element.className = element.className.replace("show", ""); 
}
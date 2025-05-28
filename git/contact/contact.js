function sleep(ms, callback) {
    setTimeout(callback, ms);
}

function copy(elementID, originalText) 
{
    var copyText = document.getElementById(elementID).innerText; // Get text content
    navigator.clipboard.writeText(copyText).then(() => 
    {
        document.getElementById(elementID).innerHTML = "Copied to clipboard!"
        sleep(1500, () => {document.getElementById(elementID).innerHTML = '<strong>' + originalText + '</stong>'});
    }).catch(err => 
    {
        console.error("Error copying text: ", err);
        alert("Failed to copy text.");
    });
}
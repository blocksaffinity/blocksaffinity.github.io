// straight up copied from v1 website, probably ai

function sleep(ms, callback) {
    setTimeout(callback, ms);
}

function copy(elementID, originalText, copyText) 
{
    navigator.clipboard.writeText(copyText).then(() => 
    {
        document.getElementById(elementID).innerHTML = "Copied!"
        sleep(1500, () => {
            document.getElementById(elementID).innerHTML = originalText
        });
    }).catch(err => 
    {
        console.error("Error copying text: ", err);
        alert("Failed to copy text.");
    });
}
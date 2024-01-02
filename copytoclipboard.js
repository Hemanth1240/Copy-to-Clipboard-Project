let pasted;
function copying(){
    var text=document.getElementById("Copy");
    navigator.clipboard.writeText(text.value);
    pasted=text.value;
}
function pasting()
{
    var paste=document.getElementById("paste");
    paste.value=pasted;
}
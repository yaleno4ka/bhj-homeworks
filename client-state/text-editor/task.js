const editor = document.getElementById('editor');
const clearKey = document.getElementById('clearKey');
const clearAll = document.getElementById('clearAll');

editor.addEventListener('input', saveText);
window.addEventListener('load', printTextFromLocalStorage);

function saveText(event) {
    localStorage.text = editor.value;
}

function printTextFromLocalStorage(event) {
    if (localStorage.text) {
        editor.value = localStorage.text;
    }
}
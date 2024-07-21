let noteArea = document.getElementById("text_field");
let createButton = document.getElementById("create");

let loadNotes = () => {
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes.forEach(content => {
        const textareaElement = generateTextfield(content);
        setEdit(textareaElement, false);
    });
};

document.addEventListener('DOMContentLoaded', loadNotes);

function generateTextfield(content = '') {
    console.log("event call");
    let parentDiv = document.createElement("div");
    parentDiv.className = "col-md-6 flex";

    let textArea = document.createElement("textarea");
    textArea.value = content;
    parentDiv.appendChild(textArea);

    let childDiv = document.createElement("div");
    childDiv.className = "buttons mt-md-3";

    let editButton = document.createElement("button");
    editButton.className = "btn btn-info width";
    editButton.textContent = "Edit";
    editButton.addEventListener('click', () => setEdit(textArea, true));

    let saveButton = document.createElement("button");
    saveButton.className = "btn btn-success width";
    saveButton.textContent = "Save";
    saveButton.addEventListener("click", () => saveTextarea(textArea));

    let deleteButton = document.createElement("button");
    deleteButton.className = "btn btn-danger width";
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", () => deleteTextarea(parentDiv, textArea));
    childDiv.appendChild(editButton);
    childDiv.appendChild(saveButton);
    childDiv.appendChild(deleteButton);
    parentDiv.appendChild(childDiv);
    noteArea.appendChild(parentDiv);
    updateLocalStorage();
    return textArea;
}

createButton.addEventListener("click", function() {
    generateTextfield();
});

function deleteTextarea(parentDiv, textArea) {
    noteArea.removeChild(parentDiv);
    updateLocalStorage();
}

function setEdit(textArea, isTrue) {
    if (isTrue) {
        textArea.removeAttribute('readonly');
    } else {
        textArea.setAttribute('readonly', true);
    }
}

function saveTextarea(textArea) {
    if (textArea.value.trim() === '') {
        alert("Your note is empty! nothing to save??");
        return;
    }
    setEdit(textArea, false);
    updateLocalStorage();
}

function updateLocalStorage() {
    const notes = [];
    document.querySelectorAll("#text_field textarea").forEach(textArea => {
        notes.push(textArea.value);
    });
    localStorage.setItem('notes', JSON.stringify(notes));
}
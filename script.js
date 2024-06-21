// Exemplo de document
function changeDocumentContent() {
    document.getElementById("document-example").innerText = "O conteúdo foi alterado usando document.";
}

// Exemplo de getElementById
function changeElementById() {
    document.getElementById("element-by-id-example").innerText = "O texto foi mudado pelo ID!";
}

// Exemplo de getElementsByClassName
function changeElementsByClass() {
    const elements = document.getElementsByClassName("class-example");
    for (let i = 0; i < elements.length; i++) {
        elements[i].innerText = "Texto mudado pela classe!";
    }
}

// Exemplo de getElementsByTagName
function changeElementsByTag() {
    const paragraphs = document.getElementsByTagName("p");
    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].innerText = "Texto mudado pela tag!";
    }
}

// Exemplo de createElement
function addElement() {
    const newElement = document.createElement("div");
    newElement.innerText = "Novo elemento adicionado!";
    document.getElementById("create-element-example").appendChild(newElement);
}

// Exemplo de innerHTML
function changeInnerHTML() {
    document.getElementById("inner-html-example").innerHTML = "<strong>O innerHTML foi alterado!</strong>";
}

// Text Formatter
const input = document.getElementById("textareaInput");
const output = document.getElementById("outputText");
const count = document.getElementById("charCount");

function makeUppercase(){
    const text = input.value;
    const upper = text.trim().toUpperCase();
    let html = ""

    html += `
       <p>${upper}</p>
    `;
    output.innerHTML = html;
};

function makeLowercase(){
    const text = input.value;
    const lower = text.trim().toLowerCase();
    let html = ""

    html += `
       <p>${lower}</p>
    `;
    output.innerHTML = html;
};

function makeCapital(){
    const text = input.value;
    let words = text.split(" ");
    let capitalWord = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
    let finalString = capitalWord.join(" ");
    let html = ""

    html += `
       <p>${finalString}</p>
    `;
    output.innerHTML = html;
};

function removeExtraSpace(){
    const text = input.value;
    const remove = text.trim();
    let html = ""

    html += `
       <p>${remove}</p>
    `;
    output.innerHTML = html;
};

function replaceWord(){
    const text = input.value;
    let replace = prompt("Enter the word to replace:");
    let newWord = prompt("Enter the new word:");
    let result = text.replace(replace, newWord);
    let html = ""

    html += `
       <p>${result}</p>
    `;
    output.innerHTML = html;
};

function countChar(){
    const text = input.value;
    let charLength = text.length;
    let html = ""

    html += `
       <p> Character Count: ${charLength}</p>
    `;
    count.innerHTML = html;
};
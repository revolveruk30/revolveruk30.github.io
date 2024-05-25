function splitText() {
    const text = document.getElementById("textInput").value;
    const chunkSize = parseInt(document.getElementById("chunkSizeInput").value, 10);

    if (isNaN(chunkSize) || chunkSize <= 0) {
        alert("Please enter a valid chunk size (a positive number).");
        return;
    }

    const words = text.split(/\s+/); 
    const chunks = [];
    let currentChunk = "";

    for (const word of words) {
        if (currentChunk.length + word.length + 1 > chunkSize) {
            chunks.push(currentChunk.trim());
            currentChunk = ""; 
        }
        currentChunk += word + " ";
    }

    if (currentChunk) {
        chunks.push(currentChunk.trim());
    }

    displayChunks(chunks);
}

function displayChunks(chunks) {
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = ""; 

    chunks.forEach(chunk => {
        const chunkDiv = document.createElement("div");
        chunkDiv.textContent = chunk; 
        outputDiv.appendChild(chunkDiv);
    });
}

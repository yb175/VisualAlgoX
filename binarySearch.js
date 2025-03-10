const container = document.getElementById("box-container");

function generateRandomArray(size, min, max) {
    let arr = [];
    for (let i = 0; i < size; i++) {
        arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return arr.sort((a, b) => a - b);  // ✅ Sorting for Binary Search
}

// Example usage:
let arr = generateRandomArray(10, 1, 10);

function createBoxes() {
    container.innerHTML = "";

    for (let i = 0; i < arr.length; i++) {
        let box = document.createElement("div");
        box.classList.add("box");
        box.style.height = `50px`;
        box.style.width = `50px`;
        box.style.border = "1px solid black";
        box.style.textAlign = "center";
        box.textContent = arr[i];
        container.appendChild(box);
    }
}
createBoxes();

async function binarySearch() {
    let left = 0;
    let right = arr.length - 1;
    let boxes = document.getElementsByClassName("box");

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        // Highlight the current middle box
        boxes[mid].style.backgroundColor = "yellow";
        await new Promise((resolve) => setTimeout(resolve, 500));

        if (arr[mid] === 5) {   
            boxes[mid].style.backgroundColor = "lightgreen"; // ✅ Found
            return;
        } else if (arr[mid] < 5) {
            boxes[mid].style.backgroundColor = "lightblue";  // ❌ Wrong, mark red
            left = mid + 1;
        } else {
            boxes[mid].style.backgroundColor = "gray";  // ❌ Wrong, mark red
            right = mid - 1;
        }

        await new Promise((resolve) => setTimeout(resolve, 500));
    }

    // If not found
    container.innerHTML = "5 Not Found";
    container.style.color = "dark green";
    container.style.fontWeight = "bold";
    container.style.fontSize = "30px";
    container.style.textAlign = "center";
    container.style.marginTop = "20px";
}

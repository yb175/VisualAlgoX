const container = document.getElementById("bar-container");

function getRandomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}

function generateRandomArray(size, min, max) {
    let arr = [];
    for (let i = 0; i < size; i++) {
        arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return arr;
}

// Example usage:
let arr = generateRandomArray(10, 1, 10); 

function createBars() {
    container.innerHTML = "";  // ✅ Container clear karo

    for (let i = 0; i < arr.length; i++) {
        let bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = `${arr[i] * 20}px`;  // ✅ Heights staircase effect ke liye
        bar.style.backgroundColor = getRandomColor();  // ✅ Random color
        bar.style.marginBottom = `${(arr.length - i) * 5}px`;  // ✅ Har bar thoda upar shift hogi

        container.appendChild(bar);
    }
}

createBars();

async function selectionSort() {
    let bars = document.getElementsByClassName("bar");

    for (let i = 0; i < bars.length - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < bars.length; j++) {
            if (parseInt(bars[j].style.height) < parseInt(bars[minIndex].style.height)) {
                minIndex = j;
            }
        }    

        if (minIndex !== i) {   
            let tempColor = bars[i].style.backgroundColor;
            bars[i].style.backgroundColor = bars[minIndex].style.backgroundColor;
            bars[minIndex].style.backgroundColor = tempColor;
            let temp = bars[i].style.height;
            bars[i].style.height = bars[minIndex].style.height;
            bars[minIndex].style.height = temp;
            await new Promise((resolve) => setTimeout(resolve, 500));  // ✅ Delay ke liye
        }
    }
}
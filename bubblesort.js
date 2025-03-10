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

async function bubbleSort() {
    let bars = document.getElementsByClassName("bar");
    
    for (let i = 0; i < bars.length; i++) {
        for (let j = 0; j < bars.length - i - 1; j++) {

            let val1 = parseInt(bars[j].style.height);
            let val2 = parseInt(bars[j + 1].style.height);

            if (val1 > val2) {
                await new Promise((resolve) => setTimeout(resolve, 700));

                let temp = bars[j].style.height;
                let tempColor = bars[j].style.backgroundColor;
                bars[j].style.backgroundColor = bars[j + 1].style.backgroundColor;
                bars[j + 1].style.backgroundColor = tempColor;
                bars[j].style.height = bars[j + 1].style.height;
                bars[j + 1].style.height = temp;
            }
        }
        
    }
}

const container = document.getElementById("box-container");

function generateRandomArray(size, min, max) {
    let arr = [];
    for (let i = 0; i < size; i++) {
        arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return arr;
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
        box.style.border="1px solid black";
        box.style.textAlign = "center";
        box.textContent = arr[i];
        container.appendChild(box);
    }   
}
createBoxes();

async function linearSearch() {
    let flag=0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 5) {
            let box = document.getElementsByClassName("box")[i];
            box.style.backgroundColor = "lightgreen";
            await new Promise((resolve) => setTimeout(resolve, 500));
            flag=1;
            break;
        } else {
            let box = document.getElementsByClassName("box")[i];
            box.style.backgroundColor = "cyan";
            await new Promise((resolve) => setTimeout(resolve, 500));
        }
    }

    if(flag==0){
        container.innerHTML = "5 Not Found";
        container.style.color = "dark green";
        container.style.fontWeight = "bold";
        container.style.fontSize = "30px";
        container.style.textAlign = "center";
        container.style.marginTop = "20px";
    }
}
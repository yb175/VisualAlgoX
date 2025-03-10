// Function to show the popup with respective data structure content
function showPopup(structure) {
    let popup = document.getElementById("popup");
    let visual = document.getElementById("visual");

    // Clear previous content
    visual.innerHTML = "";
    visual.style.margin="0";
    visual.style.padding="0";
    visual.style.backgroundColor="white";
    // Generate visualization based on selected data structure
    switch (structure) {
        case "array":
            visual.innerHTML = "<h2>Array Visualization</h2><p>[10, 20, 30, 40, 50]</p>";
            visual.style.textAlign = "center";
            visual.style.fontSize = "24px";
            visual.style.fontWeight = "bold";
            visual.style.color = "green";
            visual.style.marginTop = "20px";
            break;
        case "linkedlist":
            visual.innerHTML = "<h2>Linked List Visualization</h2><p>10 → 20 → 30 → 40 → NULL</p>";
            break;
        case "tree":
            visual.innerHTML = "<h2>Tree Visualization</h2><pre>    10\n   /  \\\n  20   30\n /  \\    \\\n40   50   60</pre>";
            break;
        case "graph":
            visual.innerHTML = "<h2>Graph Visualization</h2><pre>A — B\n|   |\nC — D</pre>";
            break;
        default:
            visual.innerHTML = "<h2>Data Structure</h2><p>No visualization available.</p>";

    }

    // Show the popup
    popup.style.display = "block";
}

// Function to close the popup
function closePopup() {
    document.getElementById("popup").style.display = "none";
}

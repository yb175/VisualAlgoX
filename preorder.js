class TreeNode {
    constructor(value, x, y) {
        this.value = value;
        this.x = x;
        this.y = y;
        this.left = null;
        this.right = null;
    }
}

function createTree() {
    let root = new TreeNode(1, 500, 50);
    root.left = new TreeNode(2, 300, 150);
    root.right = new TreeNode(3, 700, 150);
    root.left.left = new TreeNode(4, 200, 250);
    root.left.right = new TreeNode(5, 400, 250);
    root.right.left = new TreeNode(6, 600, 250);
    root.right.right = new TreeNode(7, 800, 250);
    return root;
}

function drawTree(node, svg) {
    if (!node) return;

    if (node.left) {
        drawLine(svg, node.x, node.y, node.left.x, node.left.y);
        drawTree(node.left, svg);
    }

    if (node.right) {
        drawLine(svg, node.x, node.y, node.right.x, node.right.y);
        drawTree(node.right, svg);
    }

    drawNode(svg, node.x, node.y, node.value);
}

function drawNode(svg, x, y, value) {
    let circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", x);
    circle.setAttribute("cy", y);
    circle.setAttribute("r", 20);
    circle.setAttribute("class", "node");
    svg.appendChild(circle);

    let text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("x", x);
    text.setAttribute("y", y);
    text.setAttribute("class", "text");
    text.textContent = value;
    svg.appendChild(text);
}

function drawLine(svg, x1, y1, x2, y2) {
    let line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", x1);
    line.setAttribute("y1", y1 + 20);
    line.setAttribute("x2", x2);
    line.setAttribute("y2", y2 - 20);
    line.setAttribute("stroke", "black");
    line.setAttribute("stroke-width", "2");
    svg.appendChild(line);
}

async function preorderTraversal(node, svg) {
    if (!node) return;
    
    highlightNode(node.x, node.y, svg);
    await new Promise(resolve => setTimeout(resolve, 500));

    await preorderTraversal(node.left, svg);
    await preorderTraversal(node.right, svg);
}

async function inorderTraversal(node, svg) {    
    if (!node) return;

    await inorderTraversal(node.left, svg);
    highlightNode(node.x, node.y, svg);
    await new Promise(resolve => setTimeout(resolve, 500));
    await inorderTraversal(node.right, svg);
}

async function postorderTraversal(node, svg) {
    if (!node) return;  

    await postorderTraversal(node.left, svg);
    await postorderTraversal(node.right, svg);
    highlightNode(node.x, node.y, svg);
    await new Promise(resolve => setTimeout(resolve, 500));
}

function highlightNode(x, y, svg) {
    let nodes = svg.getElementsByTagName("circle");
    for (let node of nodes) {
        if (node.getAttribute("cx") == x && node.getAttribute("cy") == y) {
            node.classList.add("highlight");
        }
    }
}

function clearHighlights(svg) {
    let nodes = svg.getElementsByTagName("circle");
    for (let node of nodes) {
        node.classList.remove("highlight");
    }
}

document.addEventListener("DOMContentLoaded", function () {
    let svg = document.getElementById("tree-container");
    let preorderBtn = document.getElementById("preorder-btn");
    let inorderBtn = document.getElementById("inorder-btn");
    let postorderBtn = document.getElementById("postorder-btn");
    let root = createTree();

    drawTree(root, svg);

    if (preorderBtn) {
        preorderBtn.addEventListener("click", async function () {
            console.log("✅ Preorder traversal started!");
            clearHighlights(svg);
            await preorderTraversal(root, svg);
        });
    }

    if (inorderBtn) {
        inorderBtn.addEventListener("click", async function () {
            console.log("✅ Inorder traversal started!");
            clearHighlights(svg);
            await inorderTraversal(root, svg);
        });
    }

    if (postorderBtn) {
        postorderBtn.addEventListener("click", async function () {
            console.log("✅ Postorder traversal started!");
            clearHighlights(svg);
            await postorderTraversal(root, svg);
        });
    }
});


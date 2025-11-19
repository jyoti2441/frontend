// TASK-1

let taskList = JSON.parse(localStorage.getItem("tasks")) || [];
const listEl = document.getElementById("taskList");

function renderTasks() {
    listEl.innerHTML = "";
    taskList.forEach((task, index) => {
        let li = document.createElement("li");
        li.innerHTML = `
            <span contenteditable="false">${task}</span>
            <button onclick="editTask(${index}, this)">Edit</button>
            <button onclick="deleteTask(${index})">Delete</button>
        `;
        listEl.appendChild(li);
    });

    localStorage.setItem("tasks", JSON.stringify(taskList));
}

document.getElementById("addTaskBtn").onclick = () => {
    let val = document.getElementById("taskInput").value.trim();
    if (val === "") return;

    taskList.push(val);
    renderTasks();
    document.getElementById("taskInput").value = "";
};

function deleteTask(i) {
    taskList.splice(i, 1);
    renderTasks();
}

function editTask(i, btn) {
    let span = btn.parentElement.querySelector("span");
    if (btn.innerText === "Edit") {
        span.contentEditable = true;
        span.focus();
        btn.innerText = "Save";
    } else {
        span.contentEditable = false;
        taskList[i] = span.innerText;
        btn.innerText = "Edit";
        renderTasks();
    }
}

renderTasks();


// TASK-2

const textarea = document.getElementById("textArea");
const counter = document.getElementById("charCount");
const limit = 100;

textarea.addEventListener("input", () => {
    let left = limit - textarea.value.length;
    counter.innerText = "Characters left: " + left;

    if (left > 60) counter.style.color = "green";
    else if (left > 20) counter.style.color = "orange";
    else counter.style.color = "red";
});


// TASK-3

const images = [
    "https://picsum.photos/id/1011/300/200",
    "https://picsum.photos/id/1015/300/200",
    "https://picsum.photos/id/1021/300/200",
    "https://picsum.photos/id/1025/300/200",
    "https://picsum.photos/id/1035/300/200"
];

let index = 0;
const slide = document.getElementById("slide");

function showImg() { slide.src = images[index]; }
showImg();

document.getElementById("nextBtn").onclick = nextImg;
document.getElementById("prevBtn").onclick = prevImg;

function nextImg() {
    index = (index + 1) % images.length;
    showImg();
}

function prevImg() {
    index = (index - 1 + images.length) % images.length;
    showImg();
}

let autoSlide = setInterval(nextImg, 3000);

slide.onmouseenter = () => clearInterval(autoSlide);
slide.onmouseleave = () => autoSlide = setInterval(nextImg, 3000);


// TASK-4

document.getElementById("regForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let pass = document.getElementById("pass");

    let valid = true;

    
    if (name.value.trim() === "") {
        name.classList.add("invalid");
        document.getElementById("nameErr").innerText = "Name is required";
        valid = false;
    } else {
        name.classList.remove("invalid");
        name.classList.add("valid");
        document.getElementById("nameErr").innerText = "";
    }

    
    if (!email.value.includes("@")) {
        email.classList.add("invalid");
        document.getElementById("emailErr").innerText = "Invalid Email";
        valid = false;
    } else {
        email.classList.remove("invalid");
        email.classList.add("valid");
        document.getElementById("emailErr").innerText = "";
    }

    
    if (pass.value.length < 8) {
        pass.classList.add("invalid");
        document.getElementById("passErr").innerText = "Password must be 8 characters";
        valid = false;
    } else {
        pass.classList.remove("invalid");
        pass.classList.add("valid");
        document.getElementById("passErr").innerText = "";
    }

    if (valid) alert("Form Submitted Successfully!");
});


// TASK-5
const products = [
    { name: "Laptop", cat: "electronics" },
    { name: "Mobile Phone", cat: "electronics" },
    { name: "T-Shirt", cat: "clothing" },
    { name: "Jeans", cat: "clothing" },
    { name: "Headphones", cat: "electronics" },
    { name: "Jacket", cat: "clothing" },
    { name: "Book - JavaScript", cat: "books" },
    { name: "Smartwatch", cat: "electronics" },
    { name: "Cap", cat: "clothing" },
    { name: "Charger", cat: "electronics" }
];

const productList = document.getElementById("productList");

function display(list) {
    productList.innerHTML = "";
    list.forEach(p => {
        let li = document.createElement("li");
        li.innerText = `${p.name} (${p.cat})`;
        productList.appendChild(li);
    });
}

display(products);

function filterProducts(category) {
    let filtered = category === "all"
        ? products
        : products.filter(p => p.cat === category);

    display(filtered);
}

// Search Filter (Bonus)
document.getElementById("searchBox").addEventListener("input", function () {
    let keyword = this.value.toLowerCase();

    let filtered = products.filter(p => p.name.toLowerCase().includes(keyword));
    display(filtered);
});

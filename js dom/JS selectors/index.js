let btn = document.querySelector("button");
let input = document.querySelector("input"); // Added 'document.' here
let body = document.body;
let count = 0;
let btn2 = document.querySelectorAll("button")[1]; // Added 'document.' here
console.log(btn2);

btn.addEventListener("click", function () {
    let r = Math.floor(Math.random() * 256); // Change to Math.floor and adjust range
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let result;

    result = `rgb(${r},${g},${b})`; // Move this line outside the if statement
    body.style.backgroundColor = result;

    btn.textContent = `Change Color ${count++}`;
    input.value = result; // Set input value here
});

btn2.addEventListener("click", () => {
    navigator.clipboard.writeText(input.value);
    // Alert the copied text
    alert("Copied the text: " + input.value);
});

let body = document.body;

let mainDiv = document.createElement("div");
mainDiv.className = "container";

let div = document.createElement("div");
div.className = "mainImgDiv";

let mainImg = document.createElement("img");
mainImg.className = "mainImg";
mainImg.setAttribute("src", "https://imgs.search.brave.com/OeliBnG52pNNXdgwSO4HmYpBXJYaEuhqTwwgl7F3DYg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/dG9vbHN0dWQuaW8v/MjQweDI0MC8zYjU5/OTgvZmZmJnRleHQ9/Kzk2MHg5NjAr.jpeg");

let cardsDiv = document.createElement("div");
cardsDiv.className = "cards";

div.append(mainImg);
mainDiv.append(div, cardsDiv);
body.appendChild(mainDiv);

let cardDiv;

for (let i = 0; i < 3; i++) {
    cardDiv = document.createElement("div");
    cardDiv.className = "card";

    let cardImg = document.createElement("img");
    cardImg.className = "cardImg";
    cardImg.setAttribute("src", "https://imgs.search.brave.com/OeliBnG52pNNXdgwSO4HmYpBXJYaEuhqTwwgl7F3DYg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/dG9vbHN0dWQuaW8v/MjQweDI0MC8zYjU5/OTgvZmZmJnRleHQ9/Kzk2MHg5NjAr.jpeg");

    let h4 = document.createElement("h4");
    h4.textContent = "Lorem ipsum " + (i + 1);

    let p = document.createElement("p");
    p.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos soluta saepe, quae, eaque, ducimus nobis similique " + (i + 1);

    let a = document.createElement("a");
    a.textContent = "Read More";
    a.setAttribute("href", "https://imgs.search.brave.com/OeliBnG52pNNXdgwSO4HmYpBXJYaEuhqTwwgl7F3DYg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/dG9vbHN0dWQuaW8v/MjQweDI0MC8zYjU5/OTgvZmZmJnRleHQ9/Kzk2MHg5NjAr.jpeg");

    cardsDiv.appendChild(cardDiv);
    cardDiv.append(cardImg, h4, p, a);
}

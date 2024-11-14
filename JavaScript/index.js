let slides = document.querySelectorAll('.slide');
let current = 0;


function hideAllSlides() {
    slides.forEach(slide => slide.style.display = 'none');
}


function showSlide(index) {
    slides[index].style.display = 'block';
    slides[index].style.opacity = 0.4;

    let opacity = 0.4;
    const fadeIn = setInterval(() => {
        opacity += 0.1;
        slides[index].style.opacity = opacity;
        if (opacity >= 1) clearInterval(fadeIn);
    }, 100);
}


function nextSlide() {
    hideAllSlides();
    current = (current + 1) % slides.length;
    showSlide(current);
}

function prevSlide() {
    hideAllSlides();
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
}
function start() {
    hideAllSlides();
    showSlide(current);
}

start();



// accordion

const accordions = document.querySelectorAll('.accordion');

accordions.forEach((accordion) => {
    accordion.addEventListener('click', function () {
        this.classList.toggle('active');
        const panel = this.nextElementSibling;
        panel.style.display = panel.style.display === 'block' ? 'none' : 'block';
    });
});



   let child1 = {
    name: "Ben",
    year: 12,
    img: "https://preview.colorlib.com/theme/adopted/img/children_4.jpg"
};

let child2 = {
    name: "Jessa",
    year: 14,
    img: "https://preview.colorlib.com/theme/adopted/img/children_3.jpg"
};

let child3 = {
    name: "Mark",
    year: 13,
    img: "https://preview.colorlib.com/theme/adopted/img/children_5.jpg"
};

let children = [child1, child2, child3];
const carousel = document.getElementById("carousel");


function displayAllChildren() {
    carousel.innerHTML = ""; 

    children.forEach(child => displayChild(child));
}


function displayChild(child) {
  


    const childCard = document.createElement("div");
    childCard.className = "child-card";

    childCard.innerHTML = `
        <img src="${child.img}" alt="${child.name}">
        <div class="child-info">
            <h4>${child.name}, <span>${child.year} yrs. old</span></h4>
        </div>
    `;

    
    carousel.appendChild(childCard);
}


function addChild(e) {
    e.preventDefault()
    
    const name = document.getElementById("name").value;
    const year = document.getElementById("year").value;
    const img = document.getElementById("img").value;

    if (name && year && img) { 
        
        const child = { name, year, img };

        
        children.push(child);

        
        displayAllChildren();

        
        document.getElementById("name").value = "";
        document.getElementById("year").value = "";
        document.getElementById("img").value = "";
    } else {
        alert("bos array");
    }
}


displayAllChildren();
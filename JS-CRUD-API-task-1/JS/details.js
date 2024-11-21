
const categoryData = JSON.parse(localStorage.getItem('categoryDetails'));


if (!categoryData) {
    alert('Kateqoriya məlumatı tapılmadı!');
    window.location.href = 'index.html';
} else {

    document.getElementById('category-name').textContent = `Name :${categoryData.name}`;
    document.getElementById('category-description').textContent = `Description :${categoryData.description}`;
}


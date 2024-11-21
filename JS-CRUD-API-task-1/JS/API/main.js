const apiUrl = 'https://northwind.vercel.app/api/categories';

async function fetchCategories() {
    const response = await axios.get(apiUrl);
    const categories = response.data;
    renderCategories(categories);
}

function renderCategories(categories) {
    const container = document.getElementById('category-list');
    container.innerHTML = '';
    
    categories.forEach((data) => {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item d-flex justify-content-between align-items-start';
        listItem.innerHTML = `
            <div class="ms-2 me-auto">
                <div class="fw-bold">${data.name}</div>
                ${data.description}
            </div>
            <button class="btn btn-warning" data-id="${data.id}" data-name="${data.name}" data-description="${data.description}">Edit</button>
            <button class="btn btn-primary" data-id="${data.id}" data-name="${data.name}" data-description="${data.description}">Details</button>
            <button class="btn btn-danger" data-id="${data.id}">Delete</button>
        `;
        container.appendChild(listItem);
    });

    document.querySelectorAll('.btn-warning').forEach((btn) => {
        btn.addEventListener('click', async (e) => {
            const id = e.target.getAttribute('data-id');
            const currentName = e.target.getAttribute('data-name');
            const currentDescription = e.target.getAttribute('data-description');

            const newName = prompt('yeni ad:', currentName);
            const newDescription = prompt('yeni aciqlama daxil edin:', currentDescription);

            if (newName && newDescription) {
                await axios.patch(`${apiUrl}/${id}`, { name: newName, description: newDescription });
                fetchCategories();
            }
        });
    });

    document.querySelectorAll('.btn-primary').forEach((btn) => {
        btn.addEventListener('click', (e) => {
            const id = e.target.getAttribute('data-id');
            const name = e.target.getAttribute('data-name');
            const description = e.target.getAttribute('data-description');

            localStorage.setItem('categoryDetails', JSON.stringify({ id, name, description }));
            window.location.href = './details.html';
        });
    });

    document.querySelectorAll('.btn-danger').forEach((btn) => {
        btn.addEventListener('click', async (e) => {
            const id = e.target.getAttribute('data-id');
            const confirmDelete = confirm('secdiyiniz data silinecek!eminsiz?');
            if (confirmDelete) {
                await axios.delete(`${apiUrl}/${id}`);
                fetchCategories();
            }
        });
    });
}

fetchCategories();

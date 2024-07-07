document.addEventListener('DOMContentLoaded', () => {
    fetch('https://fakestoreapi.com/products/1')
        .then(response => response.json())
        .then(data => {
            const productInfoDiv = document.getElementById('product-info');
            productInfoDiv.innerHTML = `
                <h2>${data.title}</h2>
                <img src="${data.image}" alt="${data.title}" width="200">
                <p><strong>Price:</strong> $${data.price}</p>
                <p><strong>Description:</strong> ${data.description}</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            const productInfoDiv = document.getElementById('product-info');
            productInfoDiv.innerHTML = '<p>Error loading product information.</p>';
        });
});
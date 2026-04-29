async function fetchPizzas() {
    try {
        const response = await fetch('https://dummyjson.com/recipes');
        
        
        const data = await response.json();
        const container = document.getElementById('pizza-container');
       
        const pizzas = data.recipes.slice(0, 10);

        pizzas.forEach(pizza => {
            const card = document.createElement('div');
            card.className = 'pizza-card';
            card.innerHTML = `
                <img src="${pizza.image}" alt="${pizza.name}">
                <h3>${pizza.name}</h3>
                <p><strong>Ingredients:</strong> ${pizza.ingredients.join(', ')}</p>
            `;
            container.appendChild(card);
        });
    } catch (error) {
        console.error('مشكلة في سحب البيانات:', error);
    }
}

fetchPizzas();
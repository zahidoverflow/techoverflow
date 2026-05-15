const products = [
    {
        name: "n8n Cloud Starter",
        category: "Productivity",
        price: "$30 (1 year)",
        image: "https://via.placeholder.com/150"
    },
    {
        name: "Superhuman",
        category: "Productivity",
        price: "$5 (1 year)",
        image: "https://via.placeholder.com/150"
    },
    {
        name: "Microsoft 365",
        category: "Productivity",
        price: "$10 (1 year)",
        image: "https://via.placeholder.com/150"
    },
    {
        name: "Canva Business",
        category: "Dev Tools",
        price: "$20 (1 year)",
        image: "https://via.placeholder.com/150"
    },
    {
        name: "Railway Hobby",
        category: "Productivity",
        price: "$20 (1 year)",
        image: "https://via.placeholder.com/150"
    },
    {
        name: "Mobbin Team (10 Seats)",
        category: "AI",
        price: "$10 (1 year)",
        image: "https://via.placeholder.com/150"
    },
    {
        name: "ElevenLabs (1 Month)",
        category: "AI",
        price: "$4 (1 month)",
        image: "https://via.placeholder.com/150"
    },
    {
        name: "Notion Business",
        category: "Productivity",
        price: "$20 (1 year)",
        image: "https://via.placeholder.com/150"
    },
    {
        name: "Intercom",
        category: "Productivity",
        price: "$20 (1 year)",
        image: "https://via.placeholder.com/150"
    },
    {
        name: "Google AI Pro 5TB",
        category: "AI",
        price: "$20 (1 year)",
        image: "https://via.placeholder.com/150"
    },
    {
        name: "Granola",
        category: "Productivity",
        price: "$5 (1 year)",
        image: "https://via.placeholder.com/150"
    },
    {
        name: "Coursera",
        category: "Education",
        price: "$7 (6+ months)",
        image: "https://via.placeholder.com/150"
    },
    {
        name: "GitHub EduPack",
        category: "Dev Tools",
        price: "$3 (2 years)",
        image: "https://via.placeholder.com/150"
    },
    {
        name: "v0",
        category: "Dev Tools",
        price: "$30 (1 year)",
        image: "https://via.placeholder.com/150"
    },
    {
        name: "ChatGPT Plus (1 Year)",
        category: "AI",
        price: "$20 (1 year)",
        image: "https://via.placeholder.com/150"
    },
    {
        name: "ChatGPT Go (1 Year)",
        category: "AI",
        price: "$3 (1 year)",
        image: "https://via.placeholder.com/150"
    },
    {
        name: "Perplexity",
        category: "AI",
        price: "$5 (1 year)",
        image: "https://via.placeholder.com/150"
    },
    {
        name: "Gamma Pro",
        category: "Productivity",
        price: "$13 (1 year)",
        image: "https://via.placeholder.com/150"
    },
    {
        name: "Loveable Pro",
        category: "Productivity",
        price: "$30 (1 year)",
        image: "https://via.placeholder.com/150"
    },
    {
        name: "LinkedIn Career",
        category: "Productivity",
        price: "$10 (1 year)",
        image: "https://via.placeholder.com/150"
    },
    {
        name: "ElevenLabs Creator",
        category: "AI",
        price: "$30 (1 year)",
        image: "https://via.placeholder.com/150"
    },
    {
        name: "$50 Cursor Credits",
        category: "Dev Tools",
        price: "$10 (Single Use)",
        image: "https://via.placeholder.com/150"
    },
    {
        name: "Manus 4K Credit",
        category: "AI",
        price: "$20 (12 months)",
        image: "https://via.placeholder.com/150"
    },
    {
        name: "Cursor (1 Year)",
        category: "Dev Tools",
        price: "$60 (1 year)",
        image: "https://via.placeholder.com/150"
    },
    {
        name: "Supabase",
        category: "Dev Tools",
        price: "$20 (1 year)",
        image: "https://via.placeholder.com/150"
    },
    {
        name: "ChatGPT Plus (2 Months)",
        category: "AI",
        price: "$12 (2 months)",
        image: "https://via.placeholder.com/150"
    },
    {
        name: "Bolt",
        category: "Dev Tools",
        price: "$15 (1 year)",
        image: "https://via.placeholder.com/150"
    },
    {
        name: "Grok XAI",
        category: "AI",
        price: "$5 (2 months)",
        image: "https://via.placeholder.com/150"
    },
    {
        name: "Gemini",
        category: "AI",
        price: "$7 (1.5 years)",
        image: "https://via.placeholder.com/150"
    },
    {
        name: "Replit Core (1 Year)",
        category: "Dev Tools",
        price: "$20 (1 year)",
        image: "https://via.placeholder.com/150"
    },
    {
        name: "Replit Core (3 Months)",
        category: "Dev Tools",
        price: "$3 (3 months)",
        image: "https://via.placeholder.com/150"
    },
    {
        name: "Cursor Pro",
        category: "Dev Tools",
        price: "$20 (1 year)",
        image: "https://via.placeholder.com/150"
    }
];

const productGrid = document.querySelector('.product-grid');
const searchInput = document.getElementById('search');
const filterButtons = document.querySelectorAll('.filter-button');

function displayProducts(filteredProducts) {
    productGrid.innerHTML = '';
    filteredProducts.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');

        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.category}</p>
            <p class="price">${product.price}</p>
            <a href="#" class="buy-button">Buy Now</a>
        `;

        productGrid.appendChild(productElement);
    });
}

function filterAndSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    const activeCategory = document.querySelector('.filter-button.active').dataset.category;

    let filteredProducts = products;

    if (activeCategory !== 'all') {
        filteredProducts = filteredProducts.filter(product => product.category === activeCategory);
    }

    if (searchTerm) {
        filteredProducts = filteredProducts.filter(product =>
            product.name.toLowerCase().includes(searchTerm) ||
            product.category.toLowerCase().includes(searchTerm)
        );
    }

    displayProducts(filteredProducts);
}

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        filterAndSearch();
    });
});

searchInput.addEventListener('input', filterAndSearch);

// Initial display
displayProducts(products);
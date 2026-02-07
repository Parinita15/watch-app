// =====================
// Personalized Watches
// =====================
const watches = [
    {
        brand: "Patek Phillipe",
        model: "Nautilus 3710",
        image: "images/patek-nautilus.jpg",
        link: "https://worldofluxuryus.com/products/patek-philippe-nautilus-18k-white-gold-mens-watch?variant=48256775913790&utm_source=google&utm_medium=organic&utm_campaign=Shopify+Used+watches&utm_content=Patek+Philippe+Nautilus++18K+White+Gold+Men%27s+Watch&id=ppc&utm_campaign=22972318944&utm_source=google&utm_medium=cpc&utm_term=&gad_source=1&gad_campaignid=22982657650&gbraid=0AAAAADla06aXHtD9qg_bN3CRVuX1r5d34&gclid=EAIaIQobChMI7daFwYjEkgMVkDtECB1rcQgNEAQYAiABEgK2aPD_BwE",
        notes: "A timeless classic for your collection, Richard!"
    },
    {
        brand: "Omega",
        model: "Speedmaster Professional",
        image: "images/omega-speedmaster.jpg",
        link: "https://www.omegawatches.com/watch-omega-speedmaster-professional",
        notes: "Perfect for every adventure you take, Richard."
    },
    {
        brand: "Audemars Piguet",
        model: "Royal Oak",
        image: "images/audemars-royal-oak.jpg",
        link: "https://www.audemarspiguet.com/royal-oak-15400ST",
        notes: "A statement piece that matches your elegance."
    },
    {
        brand: "Patek Philippe",
        model: "Nautilus",
        image: "images/patek-nautilus.jpg",
        link: "https://www.patek.com/en/collection/nautilus/5711/1A-010",
        notes: "A true collector's dream, just like you."
    }
];

let favoriteBrands = {};

// =====================
// State Variables
// =====================
let current = 0;
let likedWatches = [];
let savedWatches = [];
let recommendations = [];

// =====================
// Load Current Watch
// =====================
function loadWatch() {
    if (current >= watches.length) {
        showResults();
        return;
    }

    const watch = watches[current];
    document.getElementById("watchImage").src = watch.image;
    document.getElementById("brand").textContent = watch.brand;
    document.getElementById("model").textContent = watch.model;
    document.getElementById("buyLink").href = watch.link;
    document.getElementById("note").textContent = watch.notes;
}

// =====================
// Button Handlers
// =====================
function skipWatch() {
    animateCard('left', false);
}

function likeWatch() {
    animateCard('right', true);
}

function saveCurrentWatch() {
    if (current >= watches.length) return;

    const watch = watches[current];

    // Prevent duplicates
    if (savedWatches.some(w => w.model === watch.model)) return;

    savedWatches.push(watch);
    renderSavedWatches();
    savePreferences();
}


function addRecommendation() {
    const input = document.getElementById('recommendationInput');
    const value = input.value.trim();
    if(value === "") return;

    recommendations.push(value);
    const listDiv = document.getElementById('recommendationList');
    const p = document.createElement('p');
    p.textContent = value;
    listDiv.appendChild(p);
    input.value = "";
    savePreferences();

}

// =====================
// Animate Card Swipe
// =====================
function animateCard(direction, isLike) {
    const card = document.querySelector('.card');
    if (!card) return;

    // Clone for animation
    const clone = card.cloneNode(true);
    const rect = card.getBoundingClientRect();
    clone.style.position = 'absolute';
    clone.style.top = rect.top + 'px';
    clone.style.left = rect.left + 'px';
    clone.style.width = rect.width + 'px';
    clone.style.zIndex = 1000;
    document.body.appendChild(clone);

    clone.classList.add(direction === 'right' ? 'swipe-right' : 'swipe-left');

    if (isLike) {
        confetti({
            particleCount: 50,
            spread: 60,
            origin: { y: 0.6 },
            colors: ['#cfd2d6', '#ffffff', '#e0e3e6']
        });
    }

    setTimeout(() => {
        if (isLike) {
    const watch = watches[current];
    likedWatches.push(watch);

    // Track brand preference
    if (!favoriteBrands[watch.brand]) {
        favoriteBrands[watch.brand] = 1;
    } else {
        favoriteBrands[watch.brand]++;
    }
}

        current++;
        clone.remove();
        loadWatch();
        attachSwipe();
    }, 500);
    savePreferences();

}

// =====================
// Swipe Gesture Handler
// =====================
function attachSwipe() {
    const card = document.querySelector('.card');
    if (!card) return;

    const hammer = new Hammer(card);
    hammer.off('swiperight swipeleft');
    hammer.on('swiperight', () => animateCard('right', true));
    hammer.on('swipeleft', () => animateCard('left', false));
}

// =====================
// Show Final Collection
// =====================
function showResults() {
    document.body.innerHTML = `<h1>Richard's Curated Luxury Collection</h1>
                               <p>Every pick is for you, handpicked with love 💖</p>`;
    likedWatches.forEach(watch => {
        document.body.innerHTML += `
            <div class="card">
                <img src="${watch.image}">
                <h2>${watch.brand}</h2>
                <p>${watch.model}</p>
                <p class="note">${watch.notes}</p>
                <a href="${watch.link}" target="_blank">View Watch</a>
            </div>
        `;
    });
}

// =====================
// Initialize App
// =====================
window.addEventListener('DOMContentLoaded', () => {
    loadPreferences();
    loadWatch();
    attachSwipe();
});

function savePreferences() {
    localStorage.setItem("savedWatches", JSON.stringify(savedWatches));
    localStorage.setItem("likedWatches", JSON.stringify(likedWatches));
    localStorage.setItem("favoriteBrands", JSON.stringify(favoriteBrands));
}
function loadPreferences() {
    const saved = localStorage.getItem("savedWatches");
    const liked = localStorage.getItem("likedWatches");
    const brands = localStorage.getItem("favoriteBrands");

    if (saved) savedWatches = JSON.parse(saved);
    if (liked) likedWatches = JSON.parse(liked);
    if (brands) favoriteBrands = JSON.parse(brands);

    renderSavedWatches();

}
function getTopBrand() {
    let topBrand = "";
    let max = 0;

    for (let brand in favoriteBrands) {
        if (favoriteBrands[brand] > max) {
            max = favoriteBrands[brand];
            topBrand = brand;
        }
    }
    return topBrand;
}
document.getElementById("topBrand").textContent =
    "Your favorite brand: " + getTopBrand();

    function renderSavedWatches() {
    const savedDiv = document.getElementById("savedWatches");
    savedDiv.innerHTML = ""; // Clear current thumbnails

    savedWatches.forEach((watch, index) => {
        const img = document.createElement("img");
        img.src = watch.image;
        img.title = "Click to remove: " + watch.brand + " " + watch.model;

        // 👇 THIS enables unsaving
        img.addEventListener("click", () => {
            savedWatches.splice(index, 1);
            renderSavedWatches();
            savePreferences();
        });

        savedDiv.appendChild(img);
    });
}
if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("service-worker.js");
    });
}

// =====================
// Personalized Watches
// =====================
const watches = [
    {
        brand: "Patek Phillipe",
        model: "Nautilus 3710",
        image: "images/patek-nautilus.jpg",
        link: "https://shrevecrumpandlow.com/product/patek-philippe-3710-1a-001-nautilus-jumbo-comet-matte-black-dial-stainless-steel-40mm-3710-1a-001?srsltid=AfmBOooCSPpIHIFOlcZdsW1C2Ut6N9e4tzzmqigCoO7L2FIHhfInaaEE",
        notes: "A timeless classic for your collection, Richard!"
    },
    {
        brand: "Omega",
        model: "Speedmaster Moonwatch",
        image: "images/omega-speedmaster.jpg",
        link: "https://www.omegawatches.com/en-us/watch-omega-speedmaster-moonwatch-professional-co-axial-master-chronometer-chronograph-42-mm-31030425001004?utm_source=google&utm_medium=organic&utm_campagne=surfaces&gclsrc=aw.ds&gad_source=1&gad_campaignid=23018982471&gbraid=0AAAAABcdQp1nFd09uotehhVValOs4G6I-",
        notes: "Perfect for every adventure you take, Richard."
    },
    {
        brand: "Audemars Piguet",
        model: "Royal Oak",
        image: "images/audemars-royal-oak.jpg",
        link: "https://jdwatchesny.com/products/audemars-piguet-royal-oak-selfwinding-41mm-white-gold-light-blue-dial-ref-15510bc?variant=51746352070969&country=US&currency=USD&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic&utm_source=google&utm_medium=cpc&utm_term=&utm_campaign=&utm_content=&utm_campaignid=22179879759&gad_source=4&gad_campaignid=22179880446&gbraid=0AAAAAq_E28AjLm-PGm8s1Pf72pccGOmpF",
        notes: "A statement piece that matches your elegance."
    },
    {
        brand: "Rolex",
        model: "Day date",
        image: "images/rolex-day-date.jpg",
        link: "https://www.coveted.com/watches/rolex-day-date-platinum-228236-0003",
        notes: "A true collector's dream, just like you."
    },
     {
        brand: "Grand Seiko",
        model: "Cherry Blossom",
        image: "images/cherry.jpg",
        link: "https://grandseikoboutique.us/products/watch-spring-drive-pink-sbga413?variant=36812670795933&country=US&currency=USD&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic&st_source=google&st_medium=paid&st_campaign=%7B23152848133%7D&st_content=%7B%7D&st_term=%7B%7D&st_adid=%7B%7D&gad_source=1&gad_campaignid=23143148157&gbraid=0AAAAA9c04nX7ZdI3eWAvGbD7gQtKe7fwu",
        notes: "I know you love the cherry blossom, Richard."
    },
    {
        brand: "Seiko ",
        model: "Astron",
        image: "images/seiko-astron.jpg",
        link: "https://www.seikowatches.com/us-en/products/astron",
        notes: "What do you think, Richard? A modern marvel for your collection?"
    },
    {
        brand: "Vacheron",
        model: "Constantin Overseas",
        image: "images/constantin-overseas.jpg",
        link: "https://www.chrono24.com/vacheronconstantin/vacheron-constantin-overseas-4520v210a-blue-stainless-steel-2025-new--id33593608.htm",
        notes: "I really like this one, what do you think?"
    },
    {
        brand: "Tag Heuer",
        model: "Formula 1 Chronograph",
        image: "images/tag-heuer-formula-1.jpg",
        link: "https://www.jared.com/tag-heuer-mens-watch-formula-1-chronograph-caz1010ba0842/p/V-290398609?cid=PLA-goo-E-Commerce%20-%20COOP%20-%20PLA%20-%20P1%20-%20TAG&campaignid=11510443157&gclsrc=aw.ds&gad_source=1&gad_campaignid=11510443157&gbraid=0AAAAADqOWL-_RKa6Dgh5YrGY61737njGM",
        notes: "MAX VERSTAPPEN FAN ALERT! This one is for you, Richard! (get the joke?)"
    },
    {
        brand: "Seiko",
        model: "Alphinist",
        image: "images/seiko-alphinist.jpg",
        link: "https://www.seikowatches.com/us-en/products/alpinist",
        notes: "The green would compliment your eyes, Richard."
    },
    {
        brand: "Zenith",
        model: "Defy 21",
        image: "images/zenith-defy-21.jpg",
        link: "https://www.zenithwatches.com/en-us/watches/defy-21",
        notes: "Skeletonistic and futuristic, just like your style, Richard."
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
function showView(viewId) {
    document.querySelectorAll('.view').forEach(v => {
        v.classList.remove('active');
    });
    document.getElementById(viewId).classList.add('active');
}
let notes = JSON.parse(localStorage.getItem("notes")) || [];

function saveNote() {
    const text = document.getElementById("noteInput").value;
    if (!text) return;

    notes.push(text);
    localStorage.setItem("notes", JSON.stringify(notes));
    document.getElementById("noteInput").value = "";
    renderNotes();
}

function renderNotes() {
    const list = document.getElementById("notesList");
    if (!list) return;

    list.innerHTML = "";

    notes.forEach((note, index) => {
        const li = document.createElement("li");
        li.textContent = note;

        // Make swipeable with Hammer.js
        const hammer = new Hammer(li);
        hammer.on("swipeleft swiperight", function () {
            // Animate out
            li.style.transform = "translateX(-100%)";
            li.style.opacity = "0";

            // After animation, delete the note
            setTimeout(() => {
                notes.splice(index, 1);
                localStorage.setItem("watchAppNotes", JSON.stringify(notes));
                renderNotes();
            }, 300);
        });

        // Optional: click to delete as fallback
        li.onclick = () => {
            notes.splice(index, 1);
            localStorage.setItem("watchAppNotes", JSON.stringify(notes));
            renderNotes();
        };

        list.appendChild(li);
    });
}


renderNotes();
let links = JSON.parse(localStorage.getItem("links")) || [];

function saveLink() {
    const title = document.getElementById("linkTitle").value;
    const url = document.getElementById("linkURL").value;
    if (!title || !url) return;

    links.push({ title, url });
    localStorage.setItem("links", JSON.stringify(links));
    renderLinks();

    document.getElementById("linkTitle").value = "";
    document.getElementById("linkURL").value = "";
}

function renderLinks() {
    const list = document.getElementById("linksList");
    list.innerHTML = "";

    links.forEach((link, index) => {
        const li = document.createElement("li");
        li.innerHTML = `<a href="${link.url}" target="_blank">${link.title}</a>`;

        li.onclick = () => {
            links.splice(index, 1);
            localStorage.setItem("links", JSON.stringify(links));
            renderLinks();
        };

        list.appendChild(li);
    });
}

renderLinks();

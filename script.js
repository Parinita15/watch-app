/* =========================
   VIEW SWITCHING
========================= */
function showView(viewId) {
    document.querySelectorAll(".view").forEach(view => view.classList.remove("active"));
    const target = document.getElementById(viewId);
    if (target) target.classList.add("active");
}

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


let currentWatch = 0;
let savedWatches = JSON.parse(localStorage.getItem("savedWatches")) || [];

function showWatch() {
    if (currentWatch >= watches.length) currentWatch = 0; // loop
    const w = watches[currentWatch];
    document.getElementById("watchImage").src = w.image;
    document.getElementById("brand").textContent = w.brand;
    document.getElementById("model").textContent = w.model;
    document.getElementById("buyLink").href = w.link;
}

function likeWatch() { currentWatch++; showWatch(); }
function skipWatch() { currentWatch++; showWatch(); }
function saveCurrentWatch() {
    const w = watches[currentWatch];
    if (!savedWatches.find(w2 => w2.brand === w.brand && w2.model === w.model)) {
        savedWatches.push(w);
        localStorage.setItem("savedWatches", JSON.stringify(savedWatches));
        renderSavedWatches();
    }
}

/* =========================
   RENDER SAVED WATCHES
========================= */
function renderSavedWatches() {
    const div = document.getElementById("savedWatches");
    div.innerHTML = "";
    savedWatches.forEach(w => {
        const el = document.createElement("div");
        el.textContent = `${w.brand} ${w.model}`;
        div.appendChild(el);
    });
}

/* =========================
   NOTES LOGIC + SWIPE-TO-DELETE
========================= */
let notes = JSON.parse(localStorage.getItem("watchAppNotes")) || [];

function saveNote() {
    const input = document.getElementById("noteInput");
    const text = input.value.trim();
    if (!text) return;

    notes.push(text);
    localStorage.setItem("watchAppNotes", JSON.stringify(notes));
    input.value = "";
    renderNotes();
}

function renderNotes() {
    const container = document.getElementById("notesContainer");
    container.innerHTML = "";

    notes.forEach((note, index) => {
        const card = document.createElement("div");
        card.className = "note-card";
        card.textContent = note;

        // Swipe-to-delete
        const hammer = new Hammer(card);
        hammer.on("swipeleft swiperight", () => {
            card.style.transform = "translateX(-100%)";
            card.style.opacity = 0;

            setTimeout(() => {
                notes.splice(index, 1);
                localStorage.setItem("watchAppNotes", JSON.stringify(notes));
                renderNotes();
            }, 300);
        });

        // Click-to-delete fallback
        card.onclick = () => {
            notes.splice(index, 1);
            localStorage.setItem("watchAppNotes", JSON.stringify(notes));
            renderNotes();
        };

        container.appendChild(card);
    });
}

/* =========================
   LINKS LOGIC
========================= */
let links = JSON.parse(localStorage.getItem("watchAppLinks")) || [];

function saveLink() {
    const titleInput = document.getElementById("linkTitle");
    const urlInput = document.getElementById("linkURL");
    const title = titleInput.value.trim();
    const url = urlInput.value.trim();
    if (!title || !url) return;

    links.push({ title, url });
    localStorage.setItem("watchAppLinks", JSON.stringify(links));
    titleInput.value = "";
    urlInput.value = "";
    renderLinks();
}

function renderLinks() {
    const list = document.getElementById("linksList");
    list.innerHTML = "";
    links.forEach((link, index) => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = link.url;
        a.target = "_blank";
        a.textContent = link.title;
        li.appendChild(a);

        li.onclick = () => {
            links.splice(index, 1);
            localStorage.setItem("watchAppLinks", JSON.stringify(links));
            renderLinks();
        };

        list.appendChild(li);
    });
}

/* =========================
   VIEW SWITCHING
========================= */
function showView(viewId) {
    document.querySelectorAll(".view").forEach(view => view.classList.remove("active"));
    const target = document.getElementById(viewId);
    if (target) target.classList.add("active");
}

/* =========================
   INITIAL LOAD
========================= */
document.addEventListener("DOMContentLoaded", () => {
    showWatch();
    renderSavedWatches();
    renderNotes();
    renderLinks();
});

/* =========================
   VIEW SWITCHING
========================= */

let watches = [
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
        brand: "TAG Heuer",
        model: "Aquaracer",
        image: "images/tag-heuer-aquaracer.jpg",
        link: "https://www.tagheuer.com/us-en/watches/aquaracer",
        notes: "The Aquaracer is a classic, Richard."
    },
    {
        brand: "Omega",
        model: "Apollo 11",
        image: "images/omega-apollo-11.jpg",
        link: "https://www.omegawatches.com/chronicle/1969-the-first-journey-to-the-moon",
        notes: "Another date to the moon? This one is for you, Richard!"
    },
    {
        brand: "Ferdinand Berthoud",
        model: "Chronomètre FB 2RE",
        image: "images/ferdinand-berthoud-chronometre-fb-2re.jpg",
        link: "https://www.hodinkee.com/articles/ferdinand-berthoud-chronometre-fb-2re-introducing",
        notes: "The leather and hands would go well with your style, Richard."
    },
    {
        brand: "Vianney Halter",
        model: "La Résonance",
        image: "images/vianney-halter-la-resonance.jpg",
        link: "https://www.vianney-halter.com/watches/la-resonance/",
        notes: "Engineering marvel with a unique design, just like you, Richard."
    },
    {
        brand: "MB&F",
        model: "LM Perpetual EVO",
        image: "images/mbf-lm-perpetual-evo.jpg",
        link: "https://watchesbysjx.com/2020/10/mbf-lm-perpetual-evo.html",
        notes: "The most complex watch in the world, Richard."
    },
    {
        brand: "F.P. Journe",
        model: "Chronomètre Bleu",
        image: "images/fp-journe-chronometre-bleu.jpg",
        link: "https://wristaficionado.com/products/f-p-journe-cb-classique-collection-chronometre-bleu?variant=45807855567092&country=US&currency=USD&utm_medium=product_sync&utm_source=google&utm_source=google&utm_medium=cpc&utm_campaign=branded-pmax&gad_source=1&gad_campaignid=22563895192&gbraid=0AAAAACdZ8Kx7qGfCOHzHGenGNXdwTF9wv",
        notes: "This shade of blue is so elegant!"
    },
    {
        brand: "Tudor",
        model: "Oyster Prince Ranger",
        image: "images/tudor-oyster-prince-ranger.jpg",
        link: "https://www.tudorwatch.com/en/inside-tudor/history/tudor-history-origins-1960-to-1969",
        notes: "I love pearls! This one is adorable."
    },
    {
        brand: "Breitling",
        model: "Navitimer B01 Chronograph 46",
        image: "images/breitling-navitimer-b01.jpg",
        link: "https://www.breitling.com/en-us/watches/navitimer-b01-chronograph-46/",
        notes: "I love this type of watch."
    },
    {
        brand: "Patek Phillipe",
        model: "Rose Gold Grand Complication",
        image: "images/patek-phillipe-grand-complication.jpg",
        link: "https://www.jomashop.com/patek-philippe-grand-complications-sky-moon-tourbillon-hand-wind-brown-dial-mens-watch-6002r-001.html?utm_source=google&utm_medium=cpc&utm_campaign=%28ROI%29%20Shopping%20-%20Contact%20Us%20Watches&utm_id=22034441439&utm_content=171016143766&utm_term=&gad_source=1&gad_campaignid=22034441439&gbraid=0AAAAAD_rBknq1U-0jqJCWrHrAr5XyVS28&gclid=Cj0KCQiAhaHMBhD2ARIsAPAU_D6ql8qsP38mb2YunFlmp7BptGWbZ_t5MzyLrJXPGy_DWrRI2CjJDD8aAg57EALw_wcB",
        notes: "I love this type of watch."
    },
    {
        brand: "Omega",
        model: "Constellation",
        image: "images/omega-constellation.jpg",
        link: "https://www.omegawatches.com/en-us/watches/constellation/",
        notes: "I love this type of watch."
    }
];


// Load saved notes for watches from localStorage if any
const savedWatchesWithNotes = JSON.parse(localStorage.getItem("watchesWithNotes"));
if (savedWatchesWithNotes) watches = savedWatchesWithNotes;

let currentWatch = 0;
let savedWatches = JSON.parse(localStorage.getItem("savedWatches")) || [];

/* =========================
   SHOW CURRENT WATCH
========================= */
function showWatch() {
    if (currentWatch >= watches.length) currentWatch = 0; // loop

    const w = watches[currentWatch];
    document.getElementById("watchImage").src = w.image;
    document.getElementById("brand").textContent = w.brand;
    document.getElementById("model").textContent = w.model;
    document.getElementById("buyLink").href = w.link;

    // Show note if exists
    const noteEl = document.getElementById("note");
    if (w.note) {
        noteEl.textContent = "💬 " + w.note;
        noteEl.style.display = "block";
    } else {
        noteEl.textContent = "";
        noteEl.style.display = "none";
    }
}

/* =========================
   WATCH BUTTONS
========================= */
function skipWatch() { 
    currentWatch++; 
    showWatch(); 
}

function saveCurrentWatch() {
    const w = watches[currentWatch];

    // Save watch if not already saved
    if (!savedWatches.find(w2 => w2.brand === w.brand && w2.model === w.model)) {
        savedWatches.push(w);
        localStorage.setItem("savedWatches", JSON.stringify(savedWatches));
        renderSavedWatches();
    }

    // Move to next watch automatically
    currentWatch++;
    showWatch();
}

function saveWatchNote() {
    const input = document.getElementById("watchNoteInput");
    const text = input.value.trim();
    if (!text) return;

    watches[currentWatch].note = text;
    input.value = "";
    localStorage.setItem("watchesWithNotes", JSON.stringify(watches));
    showWatch();
}

/* =========================
   RENDER SAVED WATCHES
========================= */
function renderSavedWatches() {
    const div = document.getElementById("savedWatches");
    div.innerHTML = "";

    [...savedWatches].reverse().forEach((w, index) => {
        const card = document.createElement("div");
        card.className = "saved-watch-card";
        card.innerHTML = `
            <span>${w.brand} ${w.model}</span>
            <button class="delete-btn">🗑️</button>
        `;

        card.querySelector(".delete-btn").onclick = () => {
            const actualIndex = savedWatches.length - 1 - index;
            savedWatches.splice(actualIndex, 1);
            localStorage.setItem("savedWatches", JSON.stringify(savedWatches));
            renderSavedWatches();
        };

        div.appendChild(card);
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

        const hammer = new Hammer(card);
        hammer.on("swipeleft swiperight", () => {
            card.style.transform = "translateX(-100%)";
            card.style.opacity = "0";
            setTimeout(() => {
                notes.splice(index, 1);
                localStorage.setItem("watchAppNotes", JSON.stringify(notes));
                renderNotes();
            }, 300);
        });

        card.onclick = () => {
            notes.splice(index, 1);
            localStorage.setItem("watchAppNotes", JSON.stringify(notes));
            renderNotes();
        };

        container.appendChild(card);
    });
}

/* =========================
   QUICK LINKS
========================= */
let links = JSON.parse(localStorage.getItem("watchAppLinks")) || [];

// Permanent links (always visible)
const permanentLinks = [
    { title: "Chrono24", url: "https://www.chrono24.com" },
    { title: "Jewelers Exchange", url: "https://jewelryexchange.com/product-category/watches/" },
    { title: "Ebay", url: "https://www.ebay.com/b/Luxury-Watches/31387/bn_36841947" },
    { title: "Sammy's IG Page", url: "https://www.instagram.com/watchadandco/?hl=en" }
];

function renderLinks() {
    const list = document.getElementById("linksList");
    list.innerHTML = "";

    // Render permanent links first
    permanentLinks.forEach(link => {
        const li = document.createElement("li");
        li.className = "link-item permanent";
        const a = document.createElement("a");
        a.href = link.url;
        a.target = "_blank";
        a.textContent = link.title;
        li.appendChild(a);
        list.appendChild(li);
    });

    // Render user-added links with delete
    links.forEach((link, index) => {
        const li = document.createElement("li");
        li.className = "link-item";

        const a = document.createElement("a");
        a.href = link.url;
        a.target = "_blank";
        a.textContent = link.title;

        const del = document.createElement("span");
        del.textContent = "🗑️";
        del.className = "delete-link";
        del.onclick = () => {
            links.splice(index, 1);
            localStorage.setItem("watchAppLinks", JSON.stringify(links));
            renderLinks();
        };

        li.appendChild(a);
        li.appendChild(del);
        list.appendChild(li);
    });
}

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

/* =========================
   JOURNAL SYSTEM
========================= */

let journals = JSON.parse(localStorage.getItem("watchAppJournals")) || [];

function saveJournal(){

    const input = document.getElementById("journalInput");

    if(!input.value.trim()) return;

    journals.push({
        text: input.value,
        date: new Date().toLocaleString()
    });

    localStorage.setItem("watchAppJournals", JSON.stringify(journals));

    input.value="";

    renderJournals();
}

function renderJournals(){

    const container = document.getElementById("journalContainer");

    container.innerHTML="";

    journals.reverse().forEach((entry,index)=>{

        const div=document.createElement("div");

        div.className="note-card";

        div.innerHTML=

        `<strong>${entry.date}</strong><br>${entry.text}`;

        container.appendChild(div);

    });

}


/* =========================
   PICTURES SYSTEM
========================= */

let pictures = JSON.parse(localStorage.getItem("watchAppPictures")) || [];

function savePicture(){

    const file=document.getElementById("imageUpload").files[0];

    if(!file) return;

    const reader=new FileReader();

    reader.onload=function(e){

        pictures.push(e.target.result);

        localStorage.setItem("watchAppPictures", JSON.stringify(pictures));

        renderPictures();

    };

    reader.readAsDataURL(file);

}

function renderPictures(){

    const container=document.getElementById("picturesContainer");

    container.innerHTML="";

    pictures.forEach((pic,index)=>{

        const img=document.createElement("img");

        img.src=pic;

        img.style.width="100%";

        img.style.marginBottom="10px";

        container.appendChild(img);

    });

}


/* =========================
   INITIAL LOAD ADDITIONS
========================= */

document.addEventListener("DOMContentLoaded", () => {

    renderJournals();

    renderPictures();

});

/* =========================
   PASSWORD LOCK
========================= */

// CHANGE THIS PASSWORD
const PASSWORD = "bleh";

function checkPassword(){

const input=document.getElementById("passwordInput").value;

if(input===PASSWORD){

document.getElementById("lockScreen").style.display="none";

}
else{

document.getElementById("wrongPassword").style.display="block";

}

}

const fashionData = {
    pop: [
        { name: "Tricou Modern", img: "images/pop1.jpg" },
        { name: "Pantofi Sport", img: "images/pop2.jpg" },
        { name: "Jachetă de piele", img: "images/pop3.jpg" }
    ],
    rock: [
        { name: "Jachetă din denim", img: "images/rock1.jpg" },
        { name: "Boots rock", img: "images/rock2.jpg" },
        { name: "Tricou cu logo", img: "images/rock3.jpg" }
    ],
    jazz: [
        { name: "Costum clasic", img: "images/jazz1.jpg" },
        { name: "Pantofi eleganți", img: "images/jazz2.jpg" },
        { name: "Haină de blană", img: "images/jazz3.jpg" }
    ],
    hiphop: [
        { name: "Hanorac Oversize", img: "images/hiphop1.jpg" },
        { name: "Pantaloni largi", img: "images/hiphop2.jpg" },
        { name: "Căciulă cool", img: "images/hiphop3.jpg" }
    ],
    classical: [
        { name: "Rochie elegantă", img: "images/classical1.jpg" },
        { name: "Pantofi cu toc", img: "images/classical2.jpg" },
        { name: "Sacou elegant", img: "images/classical3.jpg" }
    ]
};

function updateFashionRecommendations() {
    const genre = document.getElementById('music-genre').value;
    const recommendations = fashionData[genre];
    const fashionContainer = document.getElementById('fashion-recommendations');
    fashionContainer.innerHTML = '';

    recommendations.forEach(item => {
        const fashionItem = document.createElement('div');
        fashionItem.classList.add('fashion-item');
        fashionItem.innerHTML = `
            <img src="${item.img}" alt="${item.name}">
            <p>${item.name}</p>
        `;
        fashionContainer.appendChild(fashionItem);
    });
}

function playMusic() {
    const player = document.getElementById('music-player');
    player.play();
}

// Inițializare cu recomandările pentru genul "pop"
const toggleBtn = document.getElementById("toggle-theme");
toggleBtn.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  document.documentElement.setAttribute(
    "data-theme",
    currentTheme === "dark" ? "light" : "dark"
  );
});

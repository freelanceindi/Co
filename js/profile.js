// profile.js

const params = new URLSearchParams(window.location.search);
const editorId = Number(params.get("id")) || 1;

const editor = editors.find(e => e.id === editorId);

if (editor) {

    document.title = `${editor.name} | EditHub India`;

    document.getElementById("profileName").textContent = editor.name;

    document.getElementById("profileCity").textContent =
        `${editor.city}, India`;

    document.getElementById("profileBio").textContent =
        editor.bio;

    document.getElementById("profilePrice").textContent =
        editor.price;

    document.getElementById("profileExperience").textContent =
        editor.experience;

    document.getElementById("profileRating").textContent =
        `⭐ ${editor.rating}`;

    document.getElementById("profileFollowers").textContent =
        editor.followers;

    document.getElementById("profileAvatar").src =
        editor.avatar;

    // Software Tags

    const softwareList = document.getElementById("softwareList");

    softwareList.innerHTML = "";

    editor.software.forEach(app => {

        softwareList.innerHTML += `
            <span class="skill-chip">
                ${app}
            </span>
        `;

    });

    // Portfolio Gallery

    const portfolioGrid = document.getElementById("portfolioGrid");

    portfolioGrid.innerHTML = "";

    for(let i=1;i<=6;i++){

        portfolioGrid.innerHTML += `

        <a href="portfolio.html?id=${editor.id}" class="card portfolio-card">

            <img
            src="https://picsum.photos/600/400?random=${editor.id*10+i}"
            alt="Portfolio">

        </a>

        `;

    }

}

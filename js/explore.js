// Explore Page

const grid = document.getElementById("editorsGrid");
const searchInput = document.getElementById("searchInput");
const chips = document.querySelectorAll(".chip");
const loadMoreBtn = document.getElementById("loadMore");

let currentCategory = "All";
let visibleEditors = 8;

// Render Cards
function renderEditors() {

    if (!grid) return;

    grid.innerHTML = "";

    let filtered = editors.filter(editor => {

        const search = searchInput.value.toLowerCase();

        const matchesSearch =
            editor.name.toLowerCase().includes(search) ||
            editor.city.toLowerCase().includes(search) ||
            editor.category.toLowerCase().includes(search) ||
            editor.software.join(" ").toLowerCase().includes(search);

        const matchesCategory =
            currentCategory === "All" ||
            editor.category === currentCategory;

        return matchesSearch && matchesCategory;

    });

    filtered.slice(0, visibleEditors).forEach(editor => {

        grid.innerHTML += `

        <div class="editor-card">

            <img
            src="${editor.thumbnail}"
            alt="${editor.name}"
            class="editor-image"
            loading="lazy">

            <div class="editor-content">

                <div class="editor-header">

                    <img
                    src="${editor.avatar}"
                    class="editor-avatar">

                    <div>

                        <h3>${editor.name}</h3>

                        <p>${editor.city}</p>

                    </div>

                </div>

                <span class="editor-category">
                ${editor.category}
                </span>

                <p class="editor-bio">
                ${editor.bio}
                </p>

                <div class="editor-meta">

                    <span>⭐ ${editor.rating}</span>

                    <span>${editor.price}</span>

                </div>

                <div class="editor-actions">

                    <button class="like-btn">
                    ❤️
                    </button>

                    <button class="save-btn">
                    🔖
                    </button>

                    <a
                    href="profile.html?id=${editor.id}"
                    class="btn-primary">

                    View Profile

                    </a>

                </div>

            </div>

        </div>

        `;

    });

}

// Search
searchInput.addEventListener("input", renderEditors);

// Category Filter
chips.forEach(chip => {

    chip.addEventListener("click", () => {

        chips.forEach(c => c.classList.remove("active"));

        chip.classList.add("active");

        currentCategory = chip.textContent;

        visibleEditors = 8;

        renderEditors();

    });

});

// Load More
loadMoreBtn.addEventListener("click", () => {

    visibleEditors += 4;

    renderEditors();

});

// Like Button
document.addEventListener("click", e => {

    if (e.target.classList.contains("like-btn")) {

        e.target.classList.toggle("liked");

        e.target.textContent =
            e.target.classList.contains("liked")
            ? "❤️"
            : "🤍";

    }

});

// Save Button
document.addEventListener("click", e => {

    if (e.target.classList.contains("save-btn")) {

        e.target.classList.toggle("saved");

        e.target.textContent =
            e.target.classList.contains("saved")
            ? "📌"
            : "🔖";

    }

});

renderEditors();

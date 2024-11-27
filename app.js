
const apiUrl = "https://forkify-api.herokuapp.com/api/search?q=pizza";


const menuContainer = document.getElementById("menu-container");

fetch(apiUrl)
    .then((response) => {
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        return response.json();
    })
    .then((data) => {
        displayMenu(data.recipes);
    })
    .catch((error) => {
        menuContainer.innerHTML = `<p>Error loading menu: ${error.message}</p>`;
    });


function displayMenu(recipes) {

    if (!recipes || recipes.length === 0) {
        menuContainer.innerHTML = "<p>No recipes found.</p>";
        return;
    }


    menuContainer.innerHTML = "";


    recipes.forEach((recipe) => {
        const menuItem = document.createElement("div");
        menuItem.classList.add("menu-item");

        menuItem.innerHTML = `
      <img src="${recipe.image_url}" alt="${recipe.title}">
      <h3>${recipe.title}</h3>
    `;

        menuContainer.appendChild(menuItem);
    });
}

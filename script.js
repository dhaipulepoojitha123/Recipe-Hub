/* =====================================================
   RECIPEHUB - JAVASCRIPT
   HTML + CSS + JAVASCRIPT PROJECT
===================================================== */


/* =====================================================
   SAMPLE RECIPE DATA
===================================================== */

let recipes =
    JSON.parse(localStorage.getItem("recipes")) || [

    {
        id: 1,

        name: "Chicken Biryani",

        category: "Main Course",

        time: "45 minutes",

        image: "images/biryani.jpeg",

        description:
            "A delicious and aromatic Indian chicken biryani prepared with basmati rice, chicken and spices.",

        ingredients: [
            "Chicken",
            "Basmati Rice",
            "Onion",
            "Tomato",
            "Ginger Garlic Paste",
            "Biryani Masala",
            "Oil",
            "Salt"
        ],

        steps: [
            "Wash and soak the basmati rice.",
            "Marinate the chicken with spices.",
            "Fry onions until golden brown.",
            "Add tomatoes and ginger garlic paste.",
            "Add chicken and cook properly.",
            "Add rice and required water.",
            "Cook until the rice becomes soft.",
            "Serve hot."
        ],

        rating: 4.5,

        reviews: []

    },


    {
        id: 2,

        name: "Idly",

        category: "Breakfast",

        time: "20 minutes",

        image: "images/idly.jpeg",

        description:
            "Soft and healthy South Indian steamed idly served with chutney or sambar.",

        ingredients: [
            "Idly Rice",
            "Urad Dal",
            "Salt",
            "Water"
        ],

        steps: [
            "Soak rice and urad dal.",
            "Grind them into a smooth batter.",
            "Allow the batter to ferment.",
            "Pour batter into idly plates.",
            "Steam for 10 to 15 minutes.",
            "Serve with chutney or sambar."
        ],

        rating: 4,

        reviews: []

    },


    {
        id: 3,

        name: "Chicken Pakoda",

        category: "Snacks",

        time: "30 minutes",

        image: "images/chicken-pakoda.jpeg",

        description:
            "Crispy and spicy chicken pakoda perfect for an evening snack.",

        ingredients: [
            "Chicken",
            "Besan",
            "Chilli Powder",
            "Ginger Garlic Paste",
            "Salt",
            "Oil"
        ],

        steps: [
            "Cut chicken into small pieces.",
            "Add chilli powder and salt.",
            "Add ginger garlic paste.",
            "Add besan and mix well.",
            "Heat oil in a pan.",
            "Deep fry the chicken until golden brown.",
            "Serve hot."
        ],

        rating: 4.2,

        reviews: []

    },


    {
        id: 4,

        name: "Payasam",

        category: "Desserts",

        time: "25 minutes",

        image: "images/payasam.jpeg",

        description:
            "Traditional creamy Indian dessert prepared with milk, rice and sugar.",

        ingredients: [
            "Milk",
            "Rice",
            "Sugar",
            "Cashews",
            "Raisins",
            "Cardamom"
        ],

        steps: [
            "Boil the milk.",
            "Add washed rice.",
            "Cook until the rice becomes soft.",
            "Add sugar.",
            "Add cashews and raisins.",
            "Add cardamom.",
            "Serve warm."
        ],

        rating: 4.7,

        reviews: []

    },


    {
        id: 5,

        name: "South Indian Meals",

        category: "Main Course",

        time: "40 minutes",

        image: "images/meals.jpeg",

        description:
            "A traditional South Indian meal containing rice, curry, dal and vegetables.",

        ingredients: [
            "Rice",
            "Dal",
            "Vegetables",
            "Sambar Powder",
            "Salt",
            "Oil"
        ],

        steps: [
            "Cook rice.",
            "Prepare dal.",
            "Prepare vegetable curry.",
            "Prepare sambar.",
            "Serve everything together."
        ],

        rating: 4.6,

        reviews: []

    }

];


/* =====================================================
   SAVE RECIPES
===================================================== */

function saveRecipes() {

    localStorage.setItem(
        "recipes",
        JSON.stringify(recipes)
    );

}


/* =====================================================
   PAGE NAVIGATION
===================================================== */

function hideAllPages() {

    const pages =
        document.querySelectorAll(".page");

    pages.forEach(page => {

        page.classList.add("hidden");

    });

}


function showHome() {

    hideAllPages();

    document
        .getElementById("homePage")
        .classList.remove("hidden");

}


function showRegister() {

    hideAllPages();

    document
        .getElementById("registerPage")
        .classList.remove("hidden");

}


function showUserLogin() {

    hideAllPages();

    document
        .getElementById("userLoginPage")
        .classList.remove("hidden");

}


function showAdminLogin() {

    hideAllPages();

    document
        .getElementById("adminLoginPage")
        .classList.remove("hidden");

}


/* =====================================================
   USER REGISTRATION
===================================================== */

function registerUser(event) {

    event.preventDefault();


    const name =
        document
        .getElementById("registerName")
        .value.trim();


    const email =
        document
        .getElementById("registerEmail")
        .value.trim();


    const password =
        document
        .getElementById("registerPassword")
        .value;


    let users =
        JSON.parse(
            localStorage.getItem("users")
        ) || [];


    const existingUser =
        users.find(
            user =>
                user.email.toLowerCase() ===
                email.toLowerCase()
        );


    if (existingUser) {

        alert(
            "An account with this email already exists."
        );

        return;

    }


    users.push({

        id: Date.now(),

        name: name,

        email: email,

        password: password

    });


    localStorage.setItem(
        "users",
        JSON.stringify(users)
    );


    alert(
        "Registration successful! Please login."
    );


    document
        .querySelector("#registerPage form")
        .reset();


    showUserLogin();

}


/* =====================================================
   USER LOGIN
===================================================== */

function loginUser(event) {

    event.preventDefault();


    const email =
        document
        .getElementById("loginEmail")
        .value.trim();


    const password =
        document
        .getElementById("loginPassword")
        .value;


    const users =
        JSON.parse(
            localStorage.getItem("users")
        ) || [];


    const user =
        users.find(
            item =>
                item.email.toLowerCase() ===
                email.toLowerCase() &&
                item.password === password
        );


    if (!user) {

        alert(
            "Invalid email or password."
        );

        return;

    }


    localStorage.setItem(
        "loggedUser",
        JSON.stringify(user)
    );


    document
        .getElementById("loginEmail")
        .value = "";


    document
        .getElementById("loginPassword")
        .value = "";


    showUserDashboard();

}


/* =====================================================
   SHOW USER DASHBOARD
===================================================== */

function showUserDashboard() {

    hideAllPages();


    document
        .getElementById("userDashboard")
        .classList.remove("hidden");


    const user =
        JSON.parse(
            localStorage.getItem("loggedUser")
        );


    if (user) {

        document
            .getElementById("welcomeUser")
            .innerText =
            "Welcome, " +
            user.name +
            "! Explore our delicious recipes.";

    }


    displayRecipes();

    displayFavorites();

}


/* =====================================================
   ADMIN LOGIN
===================================================== */

function loginAdmin(event) {

    event.preventDefault();


    const username =
        document
        .getElementById("adminUsername")
        .value.trim();


    const password =
        document
        .getElementById("adminPassword")
        .value;


    if (
        username === "admin" &&
        password === "admin123"
    ) {

        localStorage.setItem(
            "adminLoggedIn",
            "true"
        );


        showAdminDashboard();

    } else {

        alert(
            "Invalid admin username or password."
        );

    }

}


/* =====================================================
   SHOW ADMIN DASHBOARD
===================================================== */

function showAdminDashboard() {

    hideAllPages();


    document
        .getElementById("adminDashboard")
        .classList.remove("hidden");


    updateStats();

    loadAdminRecipes();

}


/* =====================================================
   DISPLAY RECIPES
===================================================== */

function displayRecipes(recipeList = recipes) {

    const container =
        document
        .getElementById("recipeContainer");


    if (!container) return;


    container.innerHTML = "";


    if (recipeList.length === 0) {

        container.innerHTML = `

            <div class="empty-message">

                <h2>
                    😔 No recipes found
                </h2>

                <p>
                    Try another search.
                </p>

            </div>

        `;

        return;

    }


    recipeList.forEach(recipe => {


        const card =
            document.createElement("div");


        card.className =
            "recipe-card";


        card.innerHTML = `

            <img
                src="${recipe.image}"
                alt="${recipe.name}"
                onerror="this.src='https://via.placeholder.com/500x300?text=Recipe+Image'">


            <div class="recipe-content">

                <h3>
                    ${recipe.name}
                </h3>


                <p>
                    <b>Category:</b>
                    ${recipe.category}
                </p>


                <p>
                    <b>Cooking Time:</b>
                    ${recipe.time}
                </p>


                <div class="rating">

                    ⭐
                    ${Number(recipe.rating).toFixed(1)}

                </div>


                <div class="recipe-actions">

                    <button
                        class="primary-btn"
                        onclick="viewRecipe(${recipe.id})">

                        View Recipe

                    </button>


                    <button
                        class="favorite-btn"
                        onclick="addFavorite(${recipe.id})">

                        ❤️

                    </button>

                </div>

            </div>

        `;


        container.appendChild(card);

    });

}


/* =====================================================
   SEARCH
===================================================== */

function searchRecipes() {

    const input =
        document
        .getElementById("searchInput");


    const value =
        input.value
        .toLowerCase()
        .trim();


    const filtered =
        recipes.filter(recipe =>

            recipe.name
                .toLowerCase()
                .includes(value)

            ||

            recipe.category
                .toLowerCase()
                .includes(value)

        );


    displayRecipes(filtered);

}


/* =====================================================
   CATEGORY FILTER
===================================================== */

function filterCategory(category, button) {

    document
        .querySelectorAll(".category-btn")
        .forEach(btn => {

            btn.classList.remove("active");

        });


    if (button) {

        button.classList.add("active");

    }


    if (category === "All") {

        displayRecipes();

        return;

    }


    const filtered =
        recipes.filter(
            recipe =>
                recipe.category === category
        );


    displayRecipes(filtered);

}


/* =====================================================
   VIEW RECIPE
===================================================== */

function viewRecipe(id) {

    const recipe =
        recipes.find(
            item => item.id === id
        );


    if (!recipe) return;


    const modal =
        document
        .getElementById("recipeModal");


    const details =
        document
        .getElementById("recipeDetails");


    details.innerHTML = `

        <img
            src="${recipe.image}"
            alt="${recipe.name}"
            onerror="this.src='https://via.placeholder.com/700x400?text=Recipe+Image'">


        <h2>
            ${recipe.name}
        </h2>


        <p>
            <b>Category:</b>
            ${recipe.category}
        </p>


        <p>
            <b>Cooking Time:</b>
            ${recipe.time}
        </p>


        <p>
            ${recipe.description}
        </p>


        <h3>
            🥕 Ingredients
        </h3>


        <ul class="ingredients">

            ${recipe.ingredients
                .map(
                    item =>
                        `<li>${item}</li>`
                )
                .join("")}

        </ul>


        <h3>
            👨‍🍳 Preparation
        </h3>


        <ol>

            ${recipe.steps
                .map(
                    step =>
                        `<li>${step}</li>`
                )
                .join("")}

        </ol>


        <h3>
            ⭐ Rate This Recipe
        </h3>


        <div class="star-rating">

            ${[1,2,3,4,5]
                .map(
                    star =>
                    `<span
                        class="star"
                        onclick="rateRecipe(${recipe.id}, ${star})">
                        ★
                    </span>`
                )
                .join("")}

        </div>


        <p>
            Current Rating:
            <b>
                ${Number(recipe.rating).toFixed(1)}
                ⭐
            </b>
        </p>


        <h3>
            💬 Reviews
        </h3>


        <div>

            ${
                recipe.reviews.length > 0

                ?

                recipe.reviews
                    .map(
                        review => `

                            <div class="review-box">

                                <strong>
                                    ${review.rating} ⭐
                                </strong>

                                <p>
                                    ${review.text}
                                </p>

                            </div>

                        `
                    )
                    .join("")

                :

                "<p>No reviews yet.</p>"
            }

        </div>


        <textarea
            id="reviewInput-${recipe.id}"
            placeholder="Write your review...">
        </textarea>


        <button
            class="primary-btn"
            onclick="submitReview(${recipe.id})">

            Submit Review

        </button>

    `;


    modal.style.display = "flex";

}


/* =====================================================
   CLOSE MODAL
===================================================== */

function closeModal() {

    document
        .getElementById("recipeModal")
        .style.display = "none";

}


/* Close modal when clicking outside */

window.onclick = function(event) {

    const modal =
        document.getElementById("recipeModal");


    if (event.target === modal) {

        closeModal();

    }

};


/* =====================================================
   RATE RECIPE
===================================================== */

function rateRecipe(id, rating) {

    const recipe =
        recipes.find(
            item => item.id === id
        );


    if (!recipe) return;


    /*
       Store ratings separately so
       multiple ratings can be calculated.
    */

    if (!recipe.allRatings) {

        recipe.allRatings = [];

    }


    recipe.allRatings.push(rating);


    const total =
        recipe.allRatings.reduce(
            (sum, value) =>
                sum + value,
            0
        );


    recipe.rating =
        total /
        recipe.allRatings.length;


    saveRecipes();


    alert(
        "Thank you for rating this recipe " +
        rating +
        " ⭐"
    );


    viewRecipe(id);

    displayRecipes();

    updateStats();

}


/* =====================================================
   SUBMIT REVIEW
===================================================== */

function submitReview(id) {

    const recipe =
        recipes.find(
            item => item.id === id
        );


    const textarea =
        document.getElementById(
            "reviewInput-" + id
        );


    const text =
        textarea.value.trim();


    if (!text) {

        alert(
            "Please write a review first."
        );

        return;

    }


    const user =
        JSON.parse(
            localStorage.getItem("loggedUser")
        );


    recipe.reviews.push({

        name:
            user
            ? user.name
            : "User",

        text: text,

        rating:
            Math.round(recipe.rating)

    });


    saveRecipes();


    alert(
        "Your review was submitted!"
    );


    viewRecipe(id);

    updateStats();

}


/* =====================================================
   ADD FAVORITE
===================================================== */

function addFavorite(id) {

    const user =
        JSON.parse(
            localStorage.getItem("loggedUser")
        );


    if (!user) {

        alert(
            "Please login first."
        );

        return;

    }


    let favorites =
        JSON.parse(
            localStorage.getItem(
                "favorites_" + user.id
            )
        ) || [];


    if (favorites.includes(id)) {

        alert(
            "Recipe is already in favorites ❤️"
        );

        return;

    }


    favorites.push(id);


    localStorage.setItem(
        "favorites_" + user.id,
        JSON.stringify(favorites)
    );


    alert(
        "Recipe added to favorites ❤️"
    );


    displayFavorites();

}


/* =====================================================
   DISPLAY FAVORITES
===================================================== */

function displayFavorites() {

    const container =
        document.getElementById(
            "favoriteContainer"
        );


    if (!container) return;


    const user =
        JSON.parse(
            localStorage.getItem("loggedUser")
        );


    if (!user) {

        container.innerHTML =
            "<p>Login to view favorites.</p>";

        return;

    }


    const favorites =
        JSON.parse(
            localStorage.getItem(
                "favorites_" + user.id
            )
        ) || [];


    const favoriteRecipes =
        recipes.filter(
            recipe =>
                favorites.includes(recipe.id)
        );


    if (favoriteRecipes.length === 0) {

        container.innerHTML = `

            <p>
                No favorite recipes yet.
                Click ❤️ to add one.
            </p>

        `;

        return;

    }


    container.innerHTML = "";


    favoriteRecipes.forEach(recipe => {

        const card =
            document.createElement("div");


        card.className =
            "recipe-card";


        card.innerHTML = `

            <img
                src="${recipe.image}"
                alt="${recipe.name}">


            <div class="recipe-content">

                <h3>
                    ${recipe.name}
                </h3>

                <p>
                    ${recipe.category}
                </p>

                <button
                    class="primary-btn"
                    onclick="viewRecipe(${recipe.id})">

                    View Recipe

                </button>

            </div>

        `;


        container.appendChild(card);

    });

}


/* =====================================================
   ADMIN - ADD RECIPE
===================================================== */

function addRecipe(event) {

    event.preventDefault();


    const name =
        document
        .getElementById("recipeName")
        .value.trim();


    const category =
        document
        .getElementById("recipeCategory")
        .value;


    const time =
        document
        .getElementById("recipeTime")
        .value.trim();


    const image =
        document
        .getElementById("recipeImage")
        .value.trim();


    const description =
        document
        .getElementById("recipeDescription")
        .value.trim();


    const ingredients =
        document
        .getElementById("recipeIngredients")
        .value
        .split(",")
        .map(item => item.trim())
        .filter(item => item !== "");


    const steps =
        document
        .getElementById("recipeSteps")
        .value
        .split("\n")
        .map(item => item.trim())
        .filter(item => item !== "");


    const newRecipe = {

        id: Date.now(),

        name: name,

        category: category,

        time: time,

        image: image,

        description: description,

        ingredients: ingredients,

        steps: steps,

        rating: 0,

        allRatings: [],

        reviews: []

    };


    recipes.push(newRecipe);


    saveRecipes();


    alert(
        "Recipe added successfully! 🍲"
    );


    document
        .getElementById("recipeForm")
        .reset();


    updateStats();

    loadAdminRecipes();

}


/* =====================================================
   ADMIN - DELETE RECIPE
===================================================== */

function deleteRecipe(id) {

    const confirmation =
        confirm(
            "Are you sure you want to delete this recipe?"
        );


    if (!confirmation) return;


    recipes =
        recipes.filter(
            recipe => recipe.id !== id
        );


    saveRecipes();


    updateStats();

    loadAdminRecipes();


    alert(
        "Recipe deleted successfully."
    );

}


/* =====================================================
   ADMIN - LOAD RECIPES
===================================================== */

function loadAdminRecipes() {

    const table =
        document.getElementById(
            "adminRecipeTable"
        );


    if (!table) return;


    table.innerHTML = "";


    recipes.forEach(recipe => {

        const row =
            document.createElement("tr");


        row.innerHTML = `

            <td>
                ${recipe.name}
            </td>

            <td>
                ${recipe.category}
            </td>

            <td>
                ${recipe.time}
            </td>

            <td>
                ${Number(recipe.rating).toFixed(1)}
                ⭐
            </td>

            <td>

                <button
                    class="delete-btn"
                    onclick="deleteRecipe(${recipe.id})">

                    Delete

                </button>

            </td>

        `;


        table.appendChild(row);

    });

}


/* =====================================================
   ADMIN STATISTICS
===================================================== */

function updateStats() {

    const recipeCount =
        document.getElementById(
            "recipeCount"
        );


    const userCount =
        document.getElementById(
            "userCount"
        );


    const ratingCount =
        document.getElementById(
            "ratingCount"
        );


    if (recipeCount) {

        recipeCount.innerText =
            recipes.length;

    }


    const users =
        JSON.parse(
            localStorage.getItem("users")
        ) || [];


    if (userCount) {

        userCount.innerText =
            users.length;

    }


    let totalRatings = 0;


    recipes.forEach(recipe => {

        if (recipe.allRatings) {

            totalRatings +=
                recipe.allRatings.length;

        }

        totalRatings +=
            recipe.reviews.length;

    });


    if (ratingCount) {

        ratingCount.innerText =
            totalRatings;

    }

}


/* =====================================================
   LOGOUT
===================================================== */

function logout() {

    localStorage.removeItem(
        "loggedUser"
    );


    localStorage.removeItem(
        "adminLoggedIn"
    );


    showHome();

}


/* =====================================================
   PAGE LOAD
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        displayRecipes();

        displayFavorites();

        updateStats();

        loadAdminRecipes();

    }
);
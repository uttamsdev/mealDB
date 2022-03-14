const loadFoods = () => {
    document.getElementById('preloader').style.display = 'block';
    const inputField = document.getElementById('input-field');
    const inputFieldValue =inputField.value;

    document.getElementById('display-search-result').innerHTML = '';
    document.getElementById('main').style.display = "none";
    document.getElementById('footer').style.display = "none";
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputFieldValue}`)
    .then(response => response.json())
    .then(data => displayFoods(data.meals))
    inputField.value = '';
    
}

const displayFoods = foods => {
    console.log(foods);
    // document.getElementById('display-search-result').innerHTML = '';
    const searchResult = document.getElementById('display-search-result');
    searchResult.textContent = '';
    foods.forEach(food => {
        const div = document.createElement('div');
        div.classList.add("search-foods")
        div.innerHTML = `
       <div onclick = "loadFoodDetails(${food.idMeal})">
            <img src="${food.strMealThumb}">
            <h4>${food.strMeal}</h4>
            <p>${food.strInstructions.slice(0,80)}</p>
       </div>
        `;
        searchResult.appendChild(div);
    })
    document.getElementById('preloader').style.display = 'none';
}

const loadFoodDetails = foodId => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`)
    .then(response => response.json())
    .then(data => getFoodDetails(data.meals[0]))
}

const getFoodDetails = food => {
    console.log(food);
    const foodDetails = document.getElementById('food-details');
    foodDetails.innerHTML = `
    <div>
         <img src="${food.strMealThumb}">
        <h4>${food.strMeal}</h4>
        <p>${food.strInstructions}</p>
        <button><a href="${food.strYoutube}" target="_blank">Visit Youtube</a></button>
        
    </div>

    `;
}
const loadFoods = () => {
    document.getElementById('preloader').style.display = 'block';
    const inputField = document.getElementById('input-field');
    const inputFieldValue =inputField.value;
    
    document.getElementById('main').style.display = "none";
    document.getElementById('footer').style.display = "none";
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputFieldValue}`)
    .then(response => response.json())
    .then(data => displayFoods(data.meals))
    inputField.value = '';
    
}

const displayFoods = foods => {
    console.log(foods);
    const searchResult = document.getElementById('display-search-result');
    searchResult.textContent = '';
    foods.forEach(food => {
        const div = document.createElement('div');
        div.classList.add("search-foods")
        div.innerHTML = `
        <img src="${food.strMealThumb}">
        <h4>${food.strMeal}</h4>
        <p>${food.strInstructions.slice(0,80)}</p>
        `;
        searchResult.appendChild(div);
        console.log('hello');
        console.log(food.strMeal);
    })
    document.getElementById('preloader').style.display = 'none';
}
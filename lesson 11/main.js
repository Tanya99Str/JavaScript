// - взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.
// fetch('https://dummyjson.com/carts')
//     .then(res => res.json())
//     .then(value => {
//         const {carts} = value;
//         carts.forEach(cart => {
//             let cartBlock = document.createElement('div');
//             cartBlock.classList.add('cart-block');
//             cartBlock.innerHTML = `
//                 <p><b>Cart ID:</b> ${cart?.id}</p>
//                 <p><b>User ID:</b> ${cart?.userId}</p>
//                 <p><b>Total products:</b> ${cart?.totalProducts}</p>
//                 <p><b>Total quantity:</b> ${cart?.totalQuantity}</p>
//                 <p><b>Total:</b> ${cart?.total}</p>
//                 <p><b>Discounted total:</b> ${cart?.discountedTotal}</p>
//             `;
//             let productsCont = document.createElement('div');
//             productsCont.classList.add('products-cont');
//             cartBlock.appendChild(productsCont);
//             for (const product of cart?.products) {
//                 let productBlock = document.createElement('div');
//                 productBlock.classList.add('product-block');
//                 productBlock.innerHTML = `
//                     <img src="${product?.thumbnail}">
//                     <h2>${product?.id} - ${product?.title}</h2>
//                     <div class="product-description">
//                         <p><b>Price: ${product?.price}</b></p>
//                         <p><b>Quantity: ${product?.quantity}</b></p>
//                         <p><b>Total: ${product?.total}</b></p>
//                         <p><b>Discount percentage: ${product?.discountPercentage}</b></p>
//                         <p><b>Discount total: ${product?.discountedTotal}</b></p>
//                     </div>
//                 `;
//                 productsCont.appendChild(productBlock);
//             }
//             document.body.appendChild(cartBlock);
//         });
//         console.log(carts);
//     });

// - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути список під час відображення.
fetch('https://dummyjson.com/recipes')
    .then(res => res.json())
    .then(value => {
        const {recipes} = value;
        let recipesBlock = document.createElement('div');
        recipesBlock.classList.add('recipes-container');
        recipes.forEach(recipe => {
            let recipeBlock = document.createElement('div');
            recipeBlock.classList.add('recipe-block');
            recipeBlock.innerHTML = `
                <img src="${recipe?.image}">
                <h1>${recipe?.name}</h1>
                <div class="recipe-description">
                    <p><b>Cuisine: </b>${recipe?.cuisine}</p>                
                    <p><b>Difficulty: </b>${recipe?.difficulty}</p>                
                    <p><b>Calories per serving: </b>${recipe?.caloriesPerServing}</p>                
                    <p><b>Cook time minutes: </b>${recipe?.cookTimeMinutes}</p>    
                    <p><b>Prep time minutes: </b>${recipe?.prepTimeMinutes}</p>    
                    <p><b>Rating: </b>${recipe?.rating}</p>    
                    <p><b>Review count: </b>${recipe?.reviewCount}</p>    
                    <p><b>servings: </b>${recipe?.servings}</p>    
                `;
            let mealTypeList = document.createElement('div');
            mealTypeList.style = 'width: 100%'
            recipeBlock.appendChild(mealTypeList);
            mealTypeList.innerHTML = `<h3>Meal Type:</h3>`;
            let mealTypeListUl = document.createElement('ul');
            mealTypeList.appendChild(mealTypeListUl);
            for (const type of recipe?.mealType) {
                let li = document.createElement('li');
                li.innerText = type;
                mealTypeListUl.appendChild(li);
            }
            let tagsList = document.createElement('div');
            tagsList.style = 'width: 100%'
            recipeBlock.appendChild(tagsList);
            tagsList.innerHTML = `<h3>Tags:</h3>`;
            let tagsListUl = document.createElement('ul');
            tagsList.appendChild(tagsListUl);
            for (const tag of recipe?.tags) {
                let li = document.createElement('li');
                li.innerText = tag;
                tagsListUl.appendChild(li);
            }
            let ingredientsList = document.createElement('div');
            ingredientsList.style = 'width: 100%'
            recipeBlock.appendChild(ingredientsList);
            ingredientsList.innerHTML = `<h3>Ingredients:</h3>`;
            let ingredientsListUl = document.createElement('ul');
            ingredientsList.appendChild(ingredientsListUl);
            for (const ingredient of recipe?.ingredients) {
                let li = document.createElement('li');
                li.innerText = ingredient;
                ingredientsListUl.appendChild(li);
            }
            let instructionsList = document.createElement('div');
            instructionsList.style = 'width: 100%'
            recipeBlock.appendChild(instructionsList);
            instructionsList.innerHTML = `<h3>Instructions:</h3>`;
            let instructionsListOl = document.createElement('ol');
            instructionsList.appendChild(instructionsListOl);
            for (const instruction of recipe?.instructions) {
                let li = document.createElement('li');
                li.innerText = instruction;
                instructionsListOl.appendChild(li);
            }
            recipesBlock.appendChild(recipeBlock);
            document.body.appendChild(recipesBlock);
        });
    });

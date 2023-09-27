const categoriesCount = document.querySelectorAll('.item');
console.dir(`Кількість категорій зі списку: ${categoriesCount.length}`);

categoriesCount.forEach(category => {
    const categoryTitle = category.querySelector('h2');
    console.dir(`Категорія: ${categoryTitle.textContent} `);
    
    const categoryLength = category.querySelectorAll('li')
    console.dir(`Кількість елементів категорії: ${categoryLength.length} `);
})




const fetchCatagory = async () => {
  let response = await fetch(
    "https://openapi.programming-hero.com/api/phero-tube/categories"
  );
  let data = await response.json();
  displayCategory(data.categories);
};

const displayCategory = (categories) => {
  categoryContainer = document.getElementById("category-btn-container");
  for (const category of categories) {
    const div = document.createElement("div");
    div.innerHTML = `
              <button class="btn bg-[#25252526] hover:bg-red-500 hover:text-white active:bg-red-300">${category.category}</button>
        `;
    categoryContainer.append(div);
  }
};

fetchCatagory();

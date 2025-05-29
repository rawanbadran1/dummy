async function displayCategory() {
  try {
    const post = await fetch("https://dummyjson.com/products/category-list", {method: "Get",});
    const response = await post.json();
    console.log(response);

    const category = response.map( ele =>
         `<h3 class="d-flex j-content-center align-item">${ele}</h3>`
     ).join("");
    document.querySelector(".category").innerHTML = category;
  } catch (e) {
    console.log("something is wrong!");
  }
}
displayCategory();

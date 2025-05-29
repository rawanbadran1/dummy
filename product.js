async function diplayProduucts () {
  try{
    const post =await fetch('https://dummyjson.com/products',{method:"GET"});
   // console.log(post);
    const response= await post.json();
    console.log(response.products); 
    
    const product = response.products.map( ele =>
         `<div class="oneProduct d-flex j-content-center align-item t-align-center">
        <a href="products-detailes.html?id=${ele.id}" class=" d-flex flex-direction-column align-item gap-15">
        <h2>${ele.title}</h2>
        <p>${ele.price}</p>
        <img src="${ele.thumbnail}" class="width-img">
      </a></div> `
    ).join('');
    //console.log(product);
    document.querySelector(".addProduct").innerHTML=product;
  }catch(e){
    console.log("something is wrong!");
  } 
}
diplayProduucts();
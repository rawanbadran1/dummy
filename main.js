async function getCategory(){
    try{
        const post =await fetch('https://dummyjson.com/products/category-list',{method:"Get"});
        const response = await post.json();
        //console.log(response);

        const category = response.map( ele=>
        `<div class="cat d-flex  j-content-center  align-item">
            <a href="cat-product.html?name=${ele}" onclick="getproducts()" >${ele}</a>
        </div>`
        
).join('');
        document.querySelector(".main-cat").innerHTML=category;
        }catch(e){
            console.log("something is wrong!");
        }
   
}
getCategory();


async function diplaymainProducts () {
    try{
        const post =await fetch('https://dummyjson.com/products?limit=5',{method:"GET"});
        const response= await post.json();
        //console.log(response.products);
    
        const product = response.products.map( ele =>
              `<div class="product">
                <a href="products-detailes.html?id=${ele.id}" class=" main-product d-flex t-align-center">
                <img src="${ele.thumbnail} " class="width-img">
                <h2>${ele.title}</h2>
                <p>${ele.price}</p>
                </a> </div>`
             ).join('');
    //console.log(product);
    document.querySelector(".five-product").innerHTML=product;
    }catch(e){
            console.log("something is wrong!");
    }
    
}
diplaymainProducts();












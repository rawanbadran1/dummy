async function catpro() {
    const params = new URLSearchParams(window.location.search);
    const proName = params.get("name");
    //console.log(proName);
    try{
        const post =await fetch(`https://dummyjson.com/products/category/${proName}`,{method:"GET"});
        const response = await post.json();
        //console.log(response.products);

   const product = response.products.map( ele =>
    `<div class= "allProduct d-flex  j-content-center"> 
         <div class="proImag d-flex"><img src="${ele.thumbnail}" class="width-img"></div>
                <nav class="proContent flex-direction-column d-flex gap-20">
                <h3>${ele.id}</h3>
                <p>${ele.title}</p>
                <p>${ele.price}</p>
                <p>${ele.category}</p>
                <p>${ele.description}</p>
                </nav>
        </div>`
).join('');
document.querySelector(".productss").innerHTML=product;
    }catch(e){
            console.log("something is wrong!");
    }

}
catpro();
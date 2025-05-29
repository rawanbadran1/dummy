const arr=[];
async function proDetails() {
    try{
        const params = new URLSearchParams(window.location.search);
        const userId = params.get("id");
        //console.log(userId);

    const post =await fetch(`https://dummyjson.com/products/${userId}`,{method:"GET"});
    const response= await post.json();
    //console.log(response);
    arr.push(response);
    const pro = arr.map(ele=>
         `<div class= "pro-detail d-flex"> 
         <div class="proImg d-flex j-content-center align-item"><img src="${ele.thumbnail}"></div>
                <nav class="content d-flex j-content-center  flex-direction-column  gap-20">
                <p>description :${ele.description}</p>
                <p>price:${ele.price}</p>
                <p>title:${ele.title}</p>
                <p>rating:${ele.rating}</p>
                <p>caregory:${ele.category}</p>
                <p>Brand:${ele.brand}</p>
                </nav>
        </div>`
    ).join('');
    document.querySelector(".product-details").innerHTML=pro;
    }catch(e){
            console.log("something is wrong!");
    }
    
}

proDetails();


async function diplayProduucts () {
  try{
    const post =await fetch('https://dummyjson.com/products',{method:"GET"});
   // console.log(post);
    const response= await post.json();
   //console.log(response.products); 
    
    const product = response.products.map( ele =>
         `<div class="oneProduct d-flex j-content-center align-item t-align-center">

        <div class=" d-flex flex-direction-column align-item gap-15  ">
        <h2>${ele.title}</h2>
        <p>${ele.price}</p>
        <a href="products-detailes.html?id=${ele.id}">detailes</a>
        <img src="${ele.thumbnail}" class="width-img image">
      </div></div> `
    ).join('');
    //console.log(product);
    document.querySelector(".addProduct").innerHTML=product;
  }catch(e){
    console.log("something is wrong!");
  } 
  modal();

}
diplayProduucts();

function modal(){
  const modal = document.querySelector(".modal");
  const images =Array.from(document.querySelectorAll(".image"));
  const modalImg = document.querySelector(".modalImg");
  const rightbtn = document.querySelector(".right-btn");
  const leftbtn = document.querySelector(".left-btn");
  let currentImage =0;

  
  images.forEach(  img =>{
    img.onclick = function(e){
      modal.classList.remove("d-none");
      modalImg.setAttribute("src", e.target.getAttribute('src'));
      
      currentImage = images.indexOf(e.target);
      console.log(currentImage);
}
})

//close-btn
  const closebtn = document.querySelector(".close-btn")
  closebtn.onclick = function(e){
  modal.classList.add("d-none");
}
//right-btn
function nextImage(){
  currentImage++;
    if( currentImage >= images.length){
      currentImage=0;
      modalImg.setAttribute("src", images[currentImage].getAttribute('src'))
    }
    modalImg.setAttribute("src", images[currentImage].getAttribute('src'))
}
  rightbtn.onclick = ()=>{
    nextImage()
  } 
//left-btn
function backImage(){
  currentImage--;
    if( currentImage < 0){
      currentImage=images.length-1;
      modalImg.setAttribute("src", images[currentImage].getAttribute('src'))
    }
    modalImg.setAttribute("src", images[currentImage].getAttribute('src'))
}
  leftbtn.onclick = ()=>{
    backImage()
  } 

//keyboard 
document.onkeydown = (e)=>{
  if(e.code == "ArrowLeft"){
     backImage()
  }
  else if(e.code == "ArrowRight"){
    nextImage()
  }
  else if(e.code == "Escape"){
  modal.classList.add("d-none");
  }
}}
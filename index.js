

 function product(objInfo){
   
   
   
 let htmlCode = `
        
         <div class="card" >
             
           
         
      
      <img src="${objInfo.productUrl}" />
      <h2>${objInfo.productTitle}</h2>
      <p>${objInfo.productDes}</p>
      <h2>Price : ${objInfo.productPrice}</h2>
      <button type="submit">Details More</button>
        </div> 
 `;
 
 return htmlCode;
 }



 let form = document.getElementById('form');
 
 form.addEventListener("submit",function(e){
    
    e.preventDefault();
    
   let productUrl =  e.target.url.value;
   let productTitle =  e.target.title.value;
   let productPrice =  e.target.price.value;
   let productDes =  e.target.des.value;
   
   let info = {
     productUrl,
     productTitle,
     productPrice,
     productDes
     
   }
  
  
  let code = product(info);
  
  let card = document.getElementById('card');
  
  card.innerHTML += code;
 } )

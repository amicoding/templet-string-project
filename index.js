

 function product(objInfo){
   
   
   
 let htmlCode = `
        
         <div class="card" >
             
           
         
      
      <img src="${objInfo.productUrl}" />
      <h2>${objInfo.productTitle}</h2>
      <p>${objInfo.productDes}</p>
      <h2>Price : ${objInfo.productPrice}</h2>
    
         <a href="${objInfo.detailsUrl}" target="_blank"
          <button class="btn" type="submit">Details More</button>
        </a>
         
    
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
   let detailsUrl = e.target.dUrl.value;
   
   let info = {
     productUrl,
     productTitle,
     productPrice,
     productDes,
     detailsUrl
     
   }
  
  
  let code = product(info);
  
  let card = document.getElementById('card');
  
  card.innerHTML += code;
 } )

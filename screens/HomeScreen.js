import data from '../data.js';
import Rating from '../components/rating.js';

const HomeScreen={
    render:()=>{
        const{products}=data;
        return`
        <ul class="products">
        ${products.map(product=>`
        <li>
      
        <div class="product">
        <a href="${product._id}">
         <img src="${product.image}"alt="${product.name}">
         </a>
        <div class="product-name">
         <a href="">
         ${product.name}        
         </a>
        </div>
        <div class="product-rating">
        ${Rating.render({value:product.rating,text:product.numreview +'reviews'})}
        </div>
       <div class="product-brand">
       ${product.brand}

        </div>
        <div class="product-price">
     ${product.price}

         </div>
         </li>
        
        `
        ).join('\n')}
        `;
    },
};
export default HomeScreen;

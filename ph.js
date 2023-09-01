const handleCoding = async()=>{
    const response = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const data = await response.json();
    console.log(data.data);
    const tabContainer = document.getElementById('tab-container');
    data.data.forEach((category)=>{
        const div = document.createElement('div');
        div.innerHTML = `
        <a onclick="loadCodingPost(${category.category_id})" class="tab">${category.category}</a>
       
        `
        tabContainer.appendChild(div);
    })

}
const loadCodingPost= async(categoryId)=>{
    const response =await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`)
    const data = await response.json();



  const cardContainer = document.getElementById('card-container');

 data.data.forEach((entertainmentPost)=>{
    console.log(entertainmentPost);
    
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="card w-96 bg-base-100 shadow-xl">
    <figure><img src="${entertainmentPost.thumbnail}" alt="Shoes" /></figure>
    <div class="card-body">
      <h2 class="card-title">
       ${entertainmentPost.title}
        <div class="badge badge-secondary">NEW</div>
      </h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div class="card-actions justify-end">
        <div class="badge badge-outline">Fashion</div> 
        <div class="badge badge-outline">Products</div>
      </div>
    </div>
  </div>
    `
    cardContainer.appendChild(div);
 })


  
  
  
}
handleCoding();
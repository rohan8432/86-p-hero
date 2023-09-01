const handleCoding = async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const data = await response.json();
    console.log(data.data);
    const tabContainer = document.getElementById('tab-container');
    data.data.forEach((category) => {
        const div = document.createElement('div');
        div.innerHTML = `
        <a onclick="loadCodingPost(${category.category_id})" class="tab hover:bg-red-400 bg-gray-200 text-black font-semibold rounded-sm w-16">${category.category}</a>
       
        `
        tabContainer.appendChild(div);
    })

}
const loadCodingPost = async (categoryId) => {
    console.log(categoryId);
    const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`)
    const data = await response.json();



    const cardContainer = document.getElementById('card-container');
     cardContainer.innerHTML="";
    data.data.forEach((entertainmentPost) => {
        console.log(entertainmentPost);
     

        const div = document.createElement('div');
        div.innerHTML = `
    <div class="card w-96 bg-base-100 shadow-xl">
    <figure><img class= "h-56 w-80" src="${entertainmentPost.thumbnail}" alt="Shoes" /></figure>
    
    <div class="card-body">
    <div class="flex gap-5">
                <div>
                    <img class="rounded-full h-12" src="${entertainmentPost.authors[0].profile_picture}" alt="">
                   </div>
                   <h2 class="card-title">
                   ${entertainmentPost.title}
                  </h2>
               </div>
      <p class="text-sm text-gray-500">${entertainmentPost.authors[0].profile_name}</p>
      <p class="text-sm text-gray-500">${entertainmentPost.others.views} views</p>
      
    </div>
  </div>
    `
        cardContainer.appendChild(div);
    })





}
handleCoding();
loadCodingPost("1");
const sortByViews =async () =>{
    const response = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const data = await response.json();
    
    const filteredInformation = data.data.filter((item) => item.others && typeof item.others.views !== 'undefined');

    filteredInformation.sort((a, b) => b.others.views - a.others.views);

    loadCodingPost("1000")
}


const handleCoding = async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const data = await response.json();
    console.log(data.data);

   const sortByViews = document.getElementById('sort-by-views');
   data.data.slice(0, 1).forEach((category)=>{
    const sortInformation = document.createElement('div');
    sortInformation.innerHTML = `
    <button onclick="sortByViews()" class="hover:bg-gray-400 bg-red-600 text-white font-semibold rounded-md w-36 h-8" id="sort-button">Sort by views</button>
    `
    sortByViews.appendChild(sortInformation);
   })

    
    const tabContainer = document.getElementById('tab-container');
    data.data.forEach((category) => {
        const div = document.createElement('div');
        div.innerHTML = `
        <a onclick="loadCodingPost(${category.category_id})" class="tab hover:bg-red-600 text-white bg-gray-400 font-semibold rounded-sm w-16">${category.category}</a>
       
        `

        tabContainer.appendChild(div);
    })



}
const loadCodingPost = async (categoryId) => {
    console.log(categoryId);
    const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`)
    const data = await response.json();

    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = "";
    if (data.data.length === 0) {

        const notFoundDiv = document.createElement('div');
        notFoundDiv.innerHTML = `
        <div class="flex flex-col absolute left-[30%] top-56">
        <img class="h-18 w-56" src="./images/Icon.png" alt="">
        <p class="text-3xl font-bold">Oops!! Sorry, There is no content here</p>
      </div>
        `;
        cardContainer.appendChild(notFoundDiv);
    }

    data.data.forEach((entertainmentPost) => {
        console.log(entertainmentPost);


        const div = document.createElement('div');
        div.innerHTML = `
    <div class="card">
  
    <figure><img class= "h-48 w-80 rounded-md" src="${entertainmentPost.thumbnail}" alt="Shoes" />
    <p class="absolute bottom-[11.5rem] left-[0.25rem] bg-black rounded-sm text-white text-sm">${timeConversion(entertainmentPost.others.posted_date)}
    </figure>
  
  
    <div class="card-body">
    
    <div class="flex gap-5">

                <div>
                    <img class="rounded-full h-12" src="${entertainmentPost.authors[0].profile_picture}" alt="">
                   </div>
                   <h2 class="card-title">
                   ${entertainmentPost.title}
                  </h2>
               </div>
     <div  class="flex">
     <p class="text-sm text-gray-500">${entertainmentPost.authors[0].profile_name}</p>
     <p>${entertainmentPost.authors[0].verified ? '<img class="h-5 w-5" src="./images/tick.png" alt="Verified">' : ''}</p>
     </div>
      <p class="text-sm text-gray-500">${entertainmentPost.others.views} views</p>
      
  </div>
    `
        cardContainer.appendChild(div);

    })


   
}

function timeConversion(timer) {
    const hours = Math.floor(timer / 3600);
    const minutes = Math.floor((timer % 3600) / 60);
    const seconds = timer % 60;

    return `${hours}hrs ${minutes} min ago`;
}


handleCoding();
loadCodingPost("1000")
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Sort Videos by Views</title>
// </head>
// <body>
//     <h1>Video List</h1>
//     <ul id="video-list">
//         <li data-views="1000">Video 1 (1000 views)</li>
//         <li data-views="500">Video 2 (500 views)</li>
//         <li data-views="2000">Video 3 (2000 views)</li>
//         <li data-views="750">Video 4 (750 views)</li>
//         <li data-views="300">Video 5 (300 views)</li>
//     </ul>

//     <button id="sort-button">Sort by Views</button>

//     <script src="script.js"></script>
// </body>
// </html>

${entertainmentPost.others.posted_date}
   
`
function convertTime(timeInSeconds) {
    const minutes = Math.floor(timeInSeconds / 60);
    
    const seconds = timeInSeconds % 60;
    const hours = Math.floor(minutes / 60);
    const minutesConvert = minutes % 60;
     
    return `${hours} hours ${minutesConvert} minutes ${seconds} seconds`;
}
convertTime();
`


`
const timer = `${entertainmentPost.others.posted_date}`;
const minutes = Math.floor(timer / 60);
const seconds = timer % 60;
const hours = Math.floor(minutes / 60);
const minutesConvert = minutes % 60;
const divTimer = document.createElement('div');
divTimer.innerText = `${hours} hours ${minutesConvert} minutes ${seconds} seconds`;
console.log(divTimer.innerText);
cardContainer.appendChild(divTimer.innerText)
`



<p>
`

    const timer = `${entertainmentPost.others.posted_date}`
    console.log(timer)
    function timeConversion(timer) {
        const hours = Math.floor(timer / 3600);
        const minutes = Math.floor((timer % 3600) / 60);
        const seconds = timer % 60;
     
        return `${hours} hours ${minutes} minutes ${seconds} seconds`;
    }

    timeConversion();
    `
 </p>
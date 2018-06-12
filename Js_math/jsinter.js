// Part 1
// let stars = starString(8)
// const starString = num => {
//     let string = '';
//     for (let i=0; i<num; i++){
//         string += '*';
//     }
//     // return string;
//     console.log(stars);
// };
// Part 2
function drawStars(arr){
    var stars = "*";
    for (var i=0; i<arr.length; i++)
    {
        console.log(stars.repeat(arr[i]));
    }
}
drawStars([8, 4, 3, 6, 5]);

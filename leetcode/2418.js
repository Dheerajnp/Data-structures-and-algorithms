
// var sortPeople = function(names, heights) {
//     return names.map((name,i)=>{
//         return {name:name,height:heights[i]}
// }).sort((a,b)=>b.height - a.height)
// .map((x)=>x.name);
// };


var sortPeople = function(names, heights) {
    return names.map((name,i)=>([name,heights[i]]))
    .sort((a,b)=>b[1]-a[1])
    .map((x)=>x[0])
};

let names = ["Alice","Bob","Bob"];
let heights = [155,185,150];
console.log(sortPeople(names,heights))
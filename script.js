let arr = ['The Virupaksha Temple', 'a Victoria Memorial', 'Tajmahal'];


// let newspots = spots.Replace(/\bthe\b|\wan\b|\ba\b/gi , "");
// consol.log(newspots);
// console.log(str.match(/\bthe\b|\wan\b|\ba\b/g));



// let str = "an rockey launched a the rocket";
// console.log(str);
// console.log(str.match(/\bthe\b|\ban\b|\ba\b/g));
let newele = [];

let mp = {}

for(let i=0; i<arr.length; i++){
    let ele = arr[i].replace(/\bthe\b|\ban\b|\ba\b/gi, "").trim();
    newele.push(ele);
    mp[ele] = arr[i];
}

newele.sort();

let ans = [];

for(let i of newele){
    ans.push(mp[i]);
}
console.log(ans);
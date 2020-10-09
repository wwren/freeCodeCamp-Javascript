// Only change code below this line
function urlSlug(title) {
    let arr = title.split(/[\s]+/);
    
    arr = arr.filter(a => a.length > 0).map(a => a.toLowerCase());
    return  arr.join("-")
}
// Only change code above this line
console.log(urlSlug(" Winter Is  Coming"));
let o1 = {
    a:10,
    b:20,
    c:30  
};


let keys = Object.keys(o1);

console.log(keys);
console.log(Object.values(o1));

for(let k of keys) {
    console.log(o1[k]); /* Read value of each key */
}
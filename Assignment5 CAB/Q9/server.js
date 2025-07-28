function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}


const person = {
  name: "Alice",
  hobbies: ["reading", "traveling"]
};


const clone = deepClone(person);


clone.hobbies.push("coding");


console.log("Original:", person);
console.log("Clone:", clone);

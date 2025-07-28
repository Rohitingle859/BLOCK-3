function personData(){
    console.log(`Name:${this.name}, age:${this.age}`)
 }

 const person = {
    name: "ROHIT",
    age: 24
 }

 personData.call(person)

//  let ans = personData(person)
//  console.log(ans)
// Can you prompt the user for froyo flavors and store their input?
const userOrder = prompt(
  "Please enter your flavors seperated by commas:",
  " coffee, strawberry, chocolate, coffee, vanilla, strawberry"
);
// turn the singular user inputted 'string' and tell it to split where there is a "," to give multiple items in my array
const flavorArray = userOrder.split(",");

// Can you build an object to track which flavors you have counted so far?
const orderedFlavorsObject = (arr)=>{
const myObject = {}
// How should that object be updated as you iterate through the array of flavors?
for(let i=0;i<arr.length;i++){
  const eachFlavor = arr[i]
  const currentObjectKeys = Object.keys(myObject)
  if(currentObjectKeys.includes(eachFlavor)){
    myObject[eachFlavor] = myObject[eachFlavor]+1
  }else{
    myObject[eachFlavor] = 1
  }
}
return myObject
}
console.log(orderedFlavorsObject(flavorArray))



	console.log( "js page works" );





let count = 0






function increment(){

console.log( "button was clicked" );

count += 1

console.log(count)


document.getElementById("count-el").textContent = count;


}








function save(){

 
let countBatch =  +count + " - " 


    console.log("this shit works")


	console.log(countBatch)

document.getElementById("save-el").textContent += countBatch;


document.getElementById("count-el").textContent = 0

count = 0


}





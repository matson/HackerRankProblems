

/*

Write a function called countUp(start) that takes a number (start) 
and counts upwards 10 times with all the words separated by “then”.

For example:
countUp(10);

>> 11 then 12 then 13 then 14 then 15 then 16 then 17 then 18 then 19 then 20

*/

function countUp(start) {

    //for adding the last number
    var last = start + 10
    //I used an array to be able to add the last number easy.  Not the only method
    var array  = []

    //it's evident we need to use a for-loop.  we are incrementing by 1 each time.
    for(var i = start + 1; i<start+10; i++){
        array.push(i)
        array.push("then")  
    }

  array.push(last)
  //for ommitting the commas and getting the desired format. 
  var output = array.join(' ')
  console.log(output)

}

countUp(10)
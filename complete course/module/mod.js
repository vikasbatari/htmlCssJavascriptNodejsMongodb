


function average(arr)
{

     let sum=0;
   arr.forEach(element => {
       sum+= element;
   });

   return sum/arr.length
}


console.log("this is mod")

module.exports= {
    avg: average,
    name: "harry",
    repo: "github"

};
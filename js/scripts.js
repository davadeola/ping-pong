function pingPong(input){
  

var myNumbersArray = [];
  for (var i = 1; i <= input; i++) {
    var myNumbers= myNumbersArray.push(i);
        
    
    console.log(myNumbersArray);
    if ( i % 15 === 0) {
        var index = myNumbersArray.indexOf(i);
         var removed = myNumbersArray.splice(index, 1,"pingpong");
         //alert(removed);
       // $("li.item").append(myNumbersArray + "<br");
    } else if (i % 5 === 0) {
       var index = myNumbersArray.indexOf(i);
         var removed = myNumbersArray.splice(index, 1,"pong");
    } else if( i % 3 ===0) {
       var index = myNumbersArray.indexOf(i);
         var removed = myNumbersArray.splice(index, 1,"ping");
    } else{
      var i = i;
      
    }


  }

var elem = document.getElementsByTagName("pre")[0];
myNumbersArray.forEach(function(el, i) {
  elem.appendChild(
    document.createTextNode(el + "\n")
  )
})
  //$("li.item").append(myNumbersArray + "<br");
}













$(document).ready(function(){

  $("#clear").click(function(){
  $("pre").text("");
});
  
  $("form#blanks").submit(function(event) {

    event.preventDefault();
    var num = parseInt($ ("input#num").val());

    pingPong(num);    
  });




});

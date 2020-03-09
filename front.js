//check off specific todos by clicking
// $("li").click(function(){
//    $(this).toggleClass("completed");
   
// });


$("ul").on("click","li",function(){
    $(this).toggleClass("completed"); 
 });
//colt
// $("li").click(function(){
//     //if li is gray
//   if($(this).css("color")==="rgb(128, 128, 128)"){
//       //turn it black
//       $(this).css({
//               color:"black",
//               textDecoration:"none" });
//   }
//   //else
//   else{
//         $(this).css({
//         color:"gray",
//         textDecoration:"line-through"
//     });}
// });


//click on x to delete todo
$("ul").on("click","span",function(evnt){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    evnt.stopPropagation();
});

//creatina a new li means todo
$("input[type='text']").keypress(function(jai){
    if(jai.which===13){
        //grabing new todo text from input
        var todoText=$(this).val();
        //clear input
        $(this).val("");
        // creating a new li and add to ul
        $("ul").append("<li><span> <i class='fa fa-trash'></i> </span> " + todoText + "</li>")

    }
});

//toggle plus sign
$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle()
})


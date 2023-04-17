window.onload = function(){
    //document.write("Hello JavaScript");
};
$(function(){
    var oldFood = ""
    $("input").on("click",function(){
        var numberOfListItem = $("li").length;
        do{
            var randomChildNumber = Math.floor(Math.random()*numberOfListItem);
            var nextFood = $("li").eq(randomChildNumber).text();
        }while(oldFood == nextFood)
        oldFood = nextFood;
        $("h1").text(nextFood);
        const img = document.querySelector("img");
        img.src = "";
        if (nextFood == "拉麵") {
            img.src = "拉麵.jpg";
        }
        else if (nextFood == "滷肉飯") {
            img.src = "滷肉飯.jpg";
        }
        else {
            img.src = "水餃.png";
        }
    });
});
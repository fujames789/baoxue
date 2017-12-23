window.onload=function(){
	
var piss=["images/gamecard-games-legion.jpg","images/gamecard-games-overwatch.jpg","images/gamecard-games-lotv.jpg","images/gamecard-games-heroes.jpg","images/hearthstone.jpg","images/gamecard-games-bc.jpg","images/gamecard-games-bc.jpg","images/gamecard-games-cataclysm.jpg","images/gamecard-games-d2.jpg","images/gamecard-games-d3.jpg","images/gamecard-games-d3console.jpg","images/gamecard-games-d3x1.jpg","images/gamecard-games-hots.jpg","images/gamecard-games-mists.jpg","images/gamecard-games-sc2.jpg"]
	
	var oDiv=document.getElementById("list1");
    var oUl=oDiv.getElementsByTagName("ul");

    for(var i=0; i<pics.length; i++){
    	oUl[0].innerHTML +='<a href=""><li><img src="'+piss[i]+'" /></li></a>';
    }


	
}
window.onload=function(){
var pics=["images/gamecard-games-legion.jpg","images/gamecard-games-overwatch.jpg","images/gamecard-games-lotv.jpg","images/gamecard-games-heroes.jpg","images/hearthstone.jpg"]
	var con=["World of Warcraft's newest expansion set pits Azeroth’s heroes against the Burning Legion. The demonic horrors are intent on summoning the Dark Titan Sargeras—and they’ve already located the key to his return","Overwatch. An international task force that maintained peace for a generation before it was shut down. Now in the wake of its dismantling, global conflict is rising. Overwatch may be gone… but the world still needs heroes.","As Artanis, Hierarch of the mighty protoss race, you are poised to reclaim your fallen homeworld—Aiur—from the zerg Swarm, but an ancient evil looms. Only you can unite your people and oppose the coming darkness before it consumes the galaxy","Powerful warriors from Azeroth, Sanctuary, the Koprulu sector, and beyond have been sucked into the Nexus, a transdimensional storm. Stranded in a strange limbo of clashing universes, these heroes have but one fate—endless battle for glory, survival, and just plain fun.","Deceptively simple, yet insanely fun - welcome to Hearthstone, the free strategy card game for everyone. Play your cards to sling spells, summon creatures, and command the heroes of Warcraft to outwit your opponents in this game of awesome strategy!"]
	var oDiv=document.getElementById("list");
    var oUl=oDiv.getElementsByTagName("ul");

    for(var i=0; i<pics.length; i++){
    	oUl[0].innerHTML +='<a href=""><li><img src="'+pics[i]+'" />p'
    	+con[i]+'p</li></a>';
    }	






}
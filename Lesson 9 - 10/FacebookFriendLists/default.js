function start(){
	var facebook = {};
	
	facebook["Jeremy"] = 
		["Zach", "Tina", "Laura", "Sam"];
	facebook["Zach"] = 
		["Jeremy", "Sam"];
	facebook["Laura"] = 
		["Jeremy", "Rob", "Lisa"];
	facebook["Rob"] = 
		["Laura"];
	
	for(var name in facebook){
		var friendsList = facebook[name];
		println(name + "'s friends: " + friendsList);
	}
}

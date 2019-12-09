function start(){
	var phonebook = {};
	
	// put in some numbers
	phonebook["Jeremy"] = "123-4567";
	phonebook["Zach"] = "333-3333";
	phonebook["Jenny"] = "867-5309";
	phonebook["President"] = "600-6000";
	
	for(var name in phonebook){
		var number = phonebook[name];
		println(name + " -> " + number);
	}
}


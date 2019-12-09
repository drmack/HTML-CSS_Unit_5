function start(){
	var set = new Set();
	set.add(4);
	println(set);
	
	set.add(5);
	println(set);
	
	set.add(4);
	println(set);
	
	if(set.contains(4)){
		println("4 is in the set!");
	}
	
	println("Set size: " + set.size());
}
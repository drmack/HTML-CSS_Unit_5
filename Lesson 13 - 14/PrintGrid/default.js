function start(){
	var grid = new Grid(2, 3);
	grid.set(0, 0, 5);
	grid.set(0, 1, 3);
	grid.set(0, 2, 7);
	grid.set(1, 0, 2);
	grid.set(1, 1, 9);
	grid.set(1, 2, 1);
	
	for(var row = 0; row < grid.numRows(); row++){
		// Print each row
		for(var col = 0; col < grid.numCols(); col++){
			var elem = grid.get(row, col);
			print(elem + " ");
		}
		println("");
	}
}

function start(){
	var grid = new Grid(2, 3);
	
	grid.set(0, 0, 4);
	grid.set(0, 1, 5);
	grid.set(1, 2, 2);
	
	var val = grid.get(1, 2);
	println(val);
	
	println("Rows: " + grid.numRows());
	println("Cols: " + grid.numCols());
}
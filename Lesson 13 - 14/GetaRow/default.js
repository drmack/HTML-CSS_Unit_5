function start(){
	var grid = new Grid(4, 3);
	grid.initFromArray([
		[6, 3, 2],	// 0th row
		[2, 5, 1],	// 1st row
		[4, 3, 9],	// 2nd row
		[1, 5, 1]	// 3rd row
	]);	
	
	var row = getRow(grid, 1);
	println(row);
	
	println(getRow(grid, 3));

}

function getRow(grid, row){
	var rowList = [];
	
	for(var col = 0; col < grid.numCols(); col++){
		var cur = grid.get(row, col);
		rowList.push(cur);
	}
	return rowList;
}
// Update board
export function updateBoard(row, column, value) {
  return {
    type: "UPDATE_BOARD",
    row: row,
    column: column,
    value: value
  }
}

// Validation helper
function validate(ary) {
  for (let row = 0; row < 9; row++) {
    ary[row].sort();
    for (let col = 0; col < 9; col++) {
      const value = ary[row][col];
      const nextValue = ary[row][col + 1];
	        
	  if (!(value && value > 0 && value < 10)){
	    return false;
	  }

	  if (col !== 8 && value === nextValue){
	    return false;
	  }
    }
  }
  return true;
}

// Check if the board is solved
export function validateBoard(board) {
	
  let rows = [ ...board ];
  let cols = [];
  let grids = [];

  for (let i = 0; i < 9; i++) {
    cols.push([]);
    grids.push([]);
  }

  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      cols[col][row] = board[row][col];

      const gridRow = Math.floor( row / 3 );
      const gridCol = Math.floor( col / 3 );
      const gridIndex = gridRow * 3 + gridCol;

      grids[gridIndex].push(board[row][col]);
    }
  }

  let res;
  if(validate(rows) && validate(cols) && validate(grids)) {
    res = true;
  }else{
  	res = false;
  }

  return {
    type: "VALIDATE_BOARD",
    solved: res
  }
}

// Set new target cell
export function updateCurrentCell(row, column) {
  return {
    type: "UPDATE_CURRENT_CELL",
    row: row,
    column: column
  }
}
function initBoard(){
	// TODO (in the future): Generate Board
	const cells = [[5, 3, 0, 0, 7, 0, 0, 0, 0],
				   [6, 0, 0, 1, 9, 5, 0, 0, 0],
				   [0, 9, 8, 0, 0, 0, 0, 6, 0],
				   [8, 0, 0, 0, 6, 0, 0, 0, 3],
				   [4, 0, 0, 8, 0, 3, 0, 0, 1],
				   [7, 0, 0, 0, 2, 0, 0, 0, 6],
				   [0, 6, 0, 0, 0, 0, 2, 8, 0],
				   [0, 0, 0, 4, 1, 9, 0, 0, 5],
				   [0, 0, 0, 0, 8, 0, 0, 7, 9],
					];
	let fixedCellsMap = {};
    for(let r = 0; r < cells.length; r++) {
    	for(let c = 0; c < cells[0].length; c++) {
    		if(cells[r][c] !== 0) fixedCellsMap[r + ',' + c] = true
    	}
    }

    let res = {
    	board: cells,
    	fixedCells: fixedCellsMap
    }

    // Check saved board and load it
    if(localStorage.getItem('savedBoard') !== null)
    	res.board = JSON.parse(localStorage.getItem('savedBoard'));

    return res;
}

export default function reducer(state={
    ...initBoard(),
    currentCell: [-1, -1],
    solved: false
  }, action) {
    switch (action.type) {
      case "UPDATE_BOARD": {
      	const row = action.row;
      	const column = action.column;
      	const value = action.value;

      	let nextBoard = [ ...state.board ];
      	nextBoard[row][column] = value;

      	// Save status in browser
      	localStorage.setItem('savedBoard', JSON.stringify(nextBoard));
        return {...state, board: nextBoard}
      }
      case "UPDATE_CURRENT_CELL": {
      	const row = action.row;
      	const column = action.column;

      	const nextCell = [ row, column ];
        return {...state, currentCell: nextCell}
      }
      case "VALIDATE_BOARD": {
        return {...state, solved: action.solved}
      }
      default:
      	return state; 
    }
}
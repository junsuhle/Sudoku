# Sudoku!

## Used Skills
* React + Redux (Started with create-react-app by Facebook Incubator)
* Webpack, Babel (for ES6), SCSS (using node-sass-chokidar), classnames (for dynamic className)
### Why Redux?
* Significantly improve the state management of the board and other game aspects.
* Significantly improve the data flow. 

## Considered UX
### Save Board Status
* Board status will be saved in the browser's local storage for users who want to solve it later. 
### Cross Platform
* Utilized view width and view height to support all different screen sizes.
* Uniformed UI for both Web and Mobile
* Run on all modern browsers (Firefox, Safari, Chrome)

### For Web Users
* Once click the target cell (cell will be green color when targeted), use keyboard (1 - 9) to input. 

### For Mobile Users
* Selector on the right side will help the mobile users to input easily (either using one hand or two hands).

## Components
### App
The component holds the Sudoku game.
### Board
The board component holds 81 cells.
**Has Following Properties**
* boardCells: 2D array (9 x 9) that holds all values of the cells
* currentCell: Holds row index and column index of target cell
* fixedCells: Map that holds hint cells
### Cell
The cell component holds its value and state. Total 81 cells are used since it is 9 x 9 Sudoku.
### Selector
The selector that helps mobile users to input easily. The web users can use it too. 
**Has Following Properties**
* hidden: Holds if the selector is hidden or shown
* currentCell: Holds row index and column index of target cell
* boardCells: 2D array (9 x 9) that holds all values of the cells
### StatusBoard
The text that shows the status of the board. 
**Has Following Property**
* solved: Holds if the board is solved

## API
### boardActions
* Contains APIs related to updating/validating the board.

### gameActions
* Contains APIs related to other UI controls of Sudoku. Right now, it only controls hiding/showing the selector component.
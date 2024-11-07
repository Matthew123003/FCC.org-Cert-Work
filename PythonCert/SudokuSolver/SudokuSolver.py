class Board:
    def __init__(self, board):
        # Initializes the board with the provided 2D list 'board'.
        # Each cell in 'board' can contain a number (1-9) or 0 for empty.
        self.board = board

    def __str__(self):
        # String representation of the board for easy visualization.
        # Empty cells are represented with '*' instead of 0.
        board_str = ''
        for row in self.board:
            row_str = [str(i) if i else '*' for i in row]
            board_str += ' '.join(row_str)
            board_str += '\n'
        return board_str

    def find_empty_cell(self):
        # Finds the first empty cell (marked with 0).
        # Iterates row by row, then within each row finds the first occurrence of 0.
        for row, contents in enumerate(self.board):
            try:
                col = contents.index(0)
                return row, col  # Returns the coordinates (row, col) of the empty cell.
            except ValueError:
                pass  # Continue if no 0 is found in the current row.
        return None  # Returns None if no empty cells are left.

    def valid_in_row(self, row, num):
        # Checks if 'num' is already present in the specified 'row'.
        # Returns True if 'num' is NOT in the row, indicating the position is valid.
        return num not in self.board[row]

    def valid_in_col(self, col, num):
        # Checks if 'num' is already present in the specified 'col' across all rows.
        # Returns True if 'num' is NOT in the column, indicating the position is valid.
        return all(self.board[row][col] != num for row in range(9))

    def valid_in_square(self, row, col, num):
        # Checks if 'num' is in the 3x3 square containing the (row, col) position.
        # Calculates the starting row and column for the 3x3 square.
        row_start = (row // 3) * 3
        col_start = (col // 3) * 3
        # Iterates over the 3x3 square, checking if 'num' is present.
        for row_no in range(row_start, row_start + 3):
            for col_no in range(col_start, col_start + 3):
                if self.board[row_no][col_no] == num:
                    return False  # Returns False if 'num' is found, indicating the position is invalid.
        return True  # Returns True if 'num' is not found, indicating the position is valid.

    def is_valid(self, empty, num):
        # Checks if placing 'num' in the empty cell is valid across row, column, and 3x3 square.
        # Retrieves the row and column from the empty cell coordinates.
        row, col = empty
        # Validates the row, column, and 3x3 square independently.
        valid_in_row = self.valid_in_row(row, num)
        valid_in_col = self.valid_in_col(col, num)
        valid_in_square = self.valid_in_square(row, col, num)
        # Returns True if 'num' is valid in all three checks.
        return all([valid_in_row, valid_in_col, valid_in_square])

    def solver(self):
        # Recursive backtracking solver function.
        # Base case: If no empty cell is found, the board is fully solved.
        if (next_empty := self.find_empty_cell()) is None:
            return True
        # Tries each number (1-9) for the empty cell.
        for guess in range(1, 10):
            # Checks if placing 'guess' in the empty cell is valid.
            if self.is_valid(next_empty, guess):
                row, col = next_empty
                # Places 'guess' in the empty cell.
                self.board[row][col] = guess
                # Recursively attempts to solve the rest of the board.
                if self.solver():
                    return True  # Returns True if the board is solved successfully.
                # If the guess led to a dead end, reset the cell (backtrack).
                self.board[row][col] = 0
        return False  # Returns False if no valid numbers lead to a solution.

def solve_sudoku(board):
    # Main function to solve the Sudoku puzzle.
    # Creates a Board instance and prints the initial unsolved puzzle.
    gameboard = Board(board)
    print(f'Puzzle to solve:\n{gameboard}')
    # Attempts to solve the puzzle and prints the solved puzzle if successful.
    if gameboard.solver():
        print(f'Solved puzzle:\n{gameboard}')
    else:
        print('The provided puzzle is unsolvable.')
    return gameboard  # Returns the solved gameboard object.

# Sample unsolved Sudoku puzzle.
puzzle = [
  [0, 0, 2, 0, 0, 8, 0, 0, 0],
  [0, 0, 0, 0, 0, 3, 7, 6, 2],
  [4, 3, 0, 0, 0, 0, 8, 0, 0],
  [0, 5, 0, 0, 3, 0, 0, 9, 0],
  [0, 4, 0, 0, 0, 0, 0, 2, 6],
  [0, 0, 0, 4, 6, 7, 0, 0, 0],
  [0, 8, 6, 7, 0, 4, 0, 0, 0],
  [0, 0, 0, 5, 1, 9, 0, 0, 8],
  [1, 7, 0, 0, 0, 6, 0, 0, 5]
]
solve_sudoku(puzzle)

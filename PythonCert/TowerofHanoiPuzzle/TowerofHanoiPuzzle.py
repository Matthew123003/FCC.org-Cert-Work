# Tower of Hanoi Solution in Python with Detailed Syntax Notes

# Initial Setup
# Define the total number of disks for this instance of the Tower of Hanoi problem
# `NUMBER_OF_DISKS = 5` sets the initial count of disks to be moved from source to target.
NUMBER_OF_DISKS = 5

# Initialize Peg A with all disks, Peg B and Peg C as empty pegs
# `A = list(range(NUMBER_OF_DISKS, 0, -1))` uses the `range` function to generate a sequence of numbers from 5 down to 1.
# `range(NUMBER_OF_DISKS, 0, -1)` produces values in descending order to represent disks of decreasing size, where 5 is the largest disk.
# Wrapping the `range` in `list(...)` converts this sequence into a list format: `[5, 4, 3, 2, 1]`.
# Therefore, `A` starts with all disks, with 5 as the largest disk at the bottom, and 1 as the smallest disk at the top.
A = list(range(NUMBER_OF_DISKS, 0, -1))  # Source peg

# `B` and `C` are initialized as empty lists.
# `B` represents the auxiliary peg that will temporarily hold disks during transfers.
# `C` represents the target peg where we want all disks to end up, following the rules of the Tower of Hanoi.
B = []  # Auxiliary peg
C = []  # Target peg

# Define the recursive function `move` that performs the solution
# The recursive function `move` will move `n` disks from `source` to `target` using `auxiliary` as temporary storage.
def move(n, source, auxiliary, target):
    # Base Case for Recursion
    # `if n <= 0: return` checks if there are no disks left to move.
    # This serves as the base case of recursion: if `n` is zero or negative, the function terminates immediately, preventing further recursive calls.
    if n <= 0:
        return  # End recursion if there are no disks to move
    
    # Recursive Step 1: Move the top `n-1` disks from `source` to `auxiliary`
    # `move(n - 1, source, target, auxiliary)` calls `move` with one fewer disk (`n-1`) and changes the pegs such that
    # `target` becomes the auxiliary peg and `auxiliary` is now the target peg.
    # This effectively moves `n-1` disks out of the way, clearing the path for the largest (nth) disk.
    move(n - 1, source, target, auxiliary)
    
    # Step 2: Move the nth disk directly from `source` to `target`
    # `source.pop()` removes the last item from the `source` peg (representing the largest movable disk)
    # `target.append(...)` then places this disk on top of the `target` peg.
    target.append(source.pop())  # Move the largest disk in this call directly from source to target
    
    # Display Progress for Visualization
    # `print(A, B, C, '\n')` shows the current state of each peg (`A`, `B`, and `C`) after each move.
    # This visual feedback lets you see the progression of the solution step-by-step, as each disk transfer is completed.
    print(A, B, C, '\n')
    
    # Recursive Step 3: Move the `n-1` disks from `auxiliary` to `target`
    # `move(n - 1, auxiliary, source, target)` performs the third recursive step:
    # It moves the `n-1` disks from `auxiliary` (where they were temporarily placed) to `target`, with `source` now acting as the auxiliary.
    # This completes the process of moving all `n` disks from `source` to `target`.
    move(n - 1, auxiliary, source, target)

# Initial Function Call
# `move(NUMBER_OF_DISKS, A, B, C)` initiates the recursive solution.
# It starts by aiming to move all `NUMBER_OF_DISKS` from `A` (source) to `C` (target),
# using `B` (auxiliary) as temporary storage during the process.
move(NUMBER_OF_DISKS, A, B, C)


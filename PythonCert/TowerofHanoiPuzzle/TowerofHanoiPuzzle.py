# Define the number of disks for the Tower of Hanoi problem
# Here, we set a constant value for `NUMBER_OF_DISKS` to 5.
# `NUMBER_OF_DISKS = 5` establishes the total number of disks in this instance of the problem.
NUMBER_OF_DISKS = 5

# Initialize the three pegs (A, B, and C) as lists
# Peg A will contain all disks initially, starting with the largest (5) at the bottom
# `range(NUMBER_OF_DISKS, 0, -1)` generates a sequence in descending order, e.g., [5, 4, 3, 2, 1]
# This sequence represents disks of decreasing size, where 5 is the largest and sits at the bottom.
A = list(range(NUMBER_OF_DISKS, 0, -1))  # Source peg containing all disks initially
B = []  # Auxiliary peg, starts empty
C = []  # Target peg, starts empty

# Define the recursive function `move` to solve the Tower of Hanoi problem
# Parameters:
# - n: Represents the number of disks to move.
# - source: The peg from which disks are moved; initially, this will be peg `A`.
# - auxiliary: The auxiliary peg temporarily holding disks during the move; initially peg `B`.
# - target: The destination peg where disks should end up; initially peg `C`.
def move(n, source, auxiliary, target):
    # Base case for recursion
    # This checks if there are no disks left to move, terminating recursion for this branch
    if n <= 0:
        return  # End this function call if n is zero or negative, as there’s no work to do

    # Recursive Step 1: Move the top `n-1` disks from `source` to `auxiliary`
    # This step clears the way for the largest (nth) disk to be moved directly to `target`
    # Here, `target` is used as a temporary peg during this step.
    move(n - 1, source, target, auxiliary)
    
    # Step 2: Move the nth (largest remaining) disk from `source` to `target`
    # The `pop` method removes the last disk (largest in the stack) from `source`
    # `append` then places this disk onto `target`, where it will stay until the rest are moved
    target.append(source.pop())
    
    # Display the current state of each peg after moving one disk
    # Prints lists `A`, `B`, and `C` showing the status of `source`, `auxiliary`, and `target` pegs
    # This printout provides a step-by-step visualization of each move
    print(A, B, C, '\n')
    
    # Recursive Step 3: Move the `n-1` disks from `auxiliary` to `target`
    # This step completes the movement of `n` disks from `source` to `target`
    # It places the smaller disks on top of the nth disk, now located on `target`
    move(n - 1, auxiliary, source, target)

# Initial function call to begin solving the Tower of Hanoi problem
# We aim to move `NUMBER_OF_DISKS` disks from peg A (`source`) to peg C (`target`),
# using peg B (`auxiliary`) as a temporary holding area.
move(NUMBER_OF_DISKS, A, B, C)

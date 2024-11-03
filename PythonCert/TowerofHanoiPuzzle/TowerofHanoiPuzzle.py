# Define the number of disks for the Tower of Hanoi problem
NUMBER_OF_DISKS = 5

# Initialize the three pegs (A, B, and C) as lists
# A contains all disks, starting with the largest (NUMBER_OF_DISKS) at the bottom
# `range(NUMBER_OF_DISKS, 0, -1)` generates a sequence in descending order, e.g., [5, 4, 3, 2, 1] for 5 disks
A = list(range(NUMBER_OF_DISKS, 0, -1))  # Source peg containing all disks initially
B = []  # Auxiliary peg, starts empty
C = []  # Target peg, starts empty

# Define the recursive function `move` to solve the Tower of Hanoi problem
# Parameters:
# - n: The number of disks to move
# - source: The current source peg (list) from which disks will be moved
# - auxiliary: The auxiliary peg (list) used temporarily during the move
# - target: The target peg (list) where disks should end up
def move(n, source, auxiliary, target):
    # Base case: If there are no disks to move, exit the function
    if n <= 0:
        return  # Ends this function call if n is zero or negative, as there's nothing to move

    # Recursive Step 1: Move the top `n-1` disks from `source` to `auxiliary`
    # This step clears the way for the largest (nth) disk to be moved directly to `target`
    move(n - 1, source, target, auxiliary)
    
    # Step 2: Move the nth disk from `source` to `target`
    # The `pop` method removes the last disk from `source`, representing the largest disk of this stack
    # `append` places this disk onto the `target` peg
    target.append(source.pop())
    
    # Display the current state of the pegs after moving one disk
    # Prints lists A, B, and C (the states of the source, auxiliary, and target pegs)
    print(A, B, C, '\n')
    
    # Recursive Step 3: Move the `n-1` disks from `auxiliary` to `target`
    # This is the final step to complete the move of `n` disks from `source` to `target`
    # It places the smaller disks on top of the nth disk on `target`
    move(n - 1, auxiliary, source, target)

# Initial function call to start the Tower of Hanoi process
# Move `NUMBER_OF_DISKS` disks from peg A (source) to peg C (target), using peg B (auxiliary)
move(NUMBER_OF_DISKS, A, B, C)

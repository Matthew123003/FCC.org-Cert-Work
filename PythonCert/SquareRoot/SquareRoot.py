def square_root_bisection(square_target, tolerance=1e-7, max_iterations=100):
    """
    Function to approximate the square root of a target number using the bisection method.
    
    Args:
    - square_target (float): The number to find the square root of.
    - tolerance (float): The acceptable error range for the approximation (default: 1e-7).
    - max_iterations (int): The maximum number of iterations to perform (default: 100).
    
    Returns:
    - float: The approximated square root of square_target, or None if it does not converge within max_iterations.
    """

    # Check for edge cases: square root of negative numbers, 1, and 0
    if square_target < 0:
        raise ValueError('Square root of negative number is not defined in real numbers')
        # Raises error if square_target is negative, as square roots of negative numbers are not real

    if square_target == 1:
        # If target is 1, the square root is also 1
        root = 1
        print(f'The square root of {square_target} is 1')

    elif square_target == 0:
        # If target is 0, the square root is also 0
        root = 0
        print(f'The square root of {square_target} is 0')

    else:
        # Initialize bounds for bisection
        low = 0  # Lower bound starts at 0
        high = max(1, square_target)  # Upper bound is the larger of 1 or square_target
        root = None  # Root will be assigned if a close approximation is found
        
        # Perform bisection for at most `max_iterations`
        for _ in range(max_iterations):
            mid = (low + high) / 2  # Calculate the midpoint between current bounds
            square_mid = mid**2  # Square the midpoint for comparison with target
            
            # Check if the squared midpoint is within tolerance of square_target
            if abs(square_mid - square_target) < tolerance:
                root = mid  # If within tolerance, set root to mid and exit loop
                break
            
            elif square_mid < square_target:
                # If squared midpoint is less than target, adjust lower bound
                low = mid
            else:
                # If squared midpoint is greater than target, adjust upper bound
                high = mid
        
        # If no approximation was found within max_iterations, notify the user
        if root is None:
            print(f"Failed to converge within {max_iterations} iterations.")
        else:   
            print(f'The square root of {square_target} is approximately {root}')
    
    return root  # Return the calculated square root or None if it didn't converge

# Define a number to find the square root of
N = 16  # `N` holds the value for which we want to compute the square root

# Run the square_root_bisection function and print the result
square_root_bisection(N)


# --- Additional Breakdown of Key Concepts in This Code ---

# Bisection Method: 
# - This is an iterative algorithm for finding roots by narrowing down the range. It adjusts the bounds (low and high) based on whether mid-squared is too high or too low, converging toward the square root.

# Error Tolerance:
# - `tolerance` defines the allowed difference between square_target and square_mid, controlling approximation accuracy. Smaller values give higher precision but require more iterations.

# Iteration Control:
# - `max_iterations` caps the number of bisection attempts, preventing infinite loops if the root doesn't converge. 

# Control Flow and Conditionals:
# - The initial checks handle edge cases, like square roots of 0 and 1, and invalid cases like negative numbers.

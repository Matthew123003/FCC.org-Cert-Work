# main.py
import copy
import random

class Hat:
    def __init__(self, **kwargs):
        # Initialize the Hat with a variable number of colored balls
        self.contents = []
        for color, count in kwargs.items():
            self.contents.extend([color] * count)
    
    def draw(self, num_balls):
        # If the number of balls to draw is greater than or equal to the contents, return all balls and empty contents
        if num_balls >= len(self.contents):
            all_balls = self.contents.copy()
            self.contents.clear()  # Empty the contents
            return all_balls
        
        # Otherwise, draw the specified number of balls and remove them from contents
        return [self.contents.pop(random.randrange(len(self.contents))) for _ in range(num_balls)]

def experiment(hat, expected_balls, num_balls_drawn, num_experiments):
    successful_experiments = 0

    for _ in range(num_experiments):
        # Create a copy of the hat for each experiment
        hat_copy = copy.deepcopy(hat)
        
        # Draw the specified number of balls from the copied hat
        drawn_balls = hat_copy.draw(num_balls_drawn)
        
        # Count the occurrences of each color in the drawn balls
        drawn_counts = {color: drawn_balls.count(color) for color in expected_balls}

        # Check if the drawn balls meet or exceed the expected counts
        success = all(drawn_counts.get(color, 0) >= count for color, count in expected_balls.items())
        
        # Increment the count of successful experiments
        if success:
            successful_experiments += 1

    # Calculate the probability
    return successful_experiments / num_experiments

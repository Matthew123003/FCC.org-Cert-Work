# Import the Abstract Base Class (ABC) module, which allows us to define abstract base classes
# These classes cannot be instantiated directly and serve as templates for derived classes
from abc import ABC, abstractmethod

# Import the regular expressions (re) module, which provides support for complex string pattern matching
import re


# Define the abstract base class 'Equation' that serves as a blueprint for specific types of equations.
# This class includes abstract methods and attributes that must be implemented by any subclass.
class Equation(ABC):
    # Declare class attributes for 'degree' and 'type', which should be defined by subclasses.
    degree: int  # Represents the degree of the equation (e.g., 1 for linear, 2 for quadratic).
    type: str    # Describes the type of equation, to be set by each subclass.

    # Constructor method: takes in coefficients as positional arguments.
    # Ensures that the correct number and types of coefficients are provided.
    def __init__(self, *args):
        # Validates the number of arguments against the expected number (degree + 1).
        if (self.degree + 1) != len(args):
            # Raises a TypeError if the number of arguments is incorrect,
            # providing an error message specifying the expected and given numbers.
            raise TypeError(
                f"'Equation' object takes {self.degree + 1} positional arguments but {len(args)} were given"
            )
        # Checks if all arguments are either integers or floats (numeric types).
        if any(not isinstance(arg, (int, float)) for arg in args):
            # Raises a TypeError if any argument is not numeric.
            raise TypeError("Coefficients must be of type 'int' or 'float'")
        # Ensures the first coefficient (highest degree term) is not zero, as this would invalidate the degree.
        if args[0] == 0:
            raise ValueError("Highest degree coefficient must be different from zero")
        # Maps the coefficients to their corresponding powers, storing them in a dictionary.
        # Coefficients are mapped with keys as powers, from highest (degree) to lowest (0).
        self.coefficients = {(len(args) - n - 1): arg for n, arg in enumerate(args)}

    # Method that runs automatically when a new subclass is created, checking if 'degree' and 'type' attributes are set.
    def __init_subclass__(cls):
        # Ensures that any subclass has a 'degree' attribute.
        if not hasattr(cls, "degree"):
            raise AttributeError(
                f"Cannot create '{cls.__name__}' class: missing required attribute 'degree'"
            )
        # Ensures that any subclass has a 'type' attribute.
        if not hasattr(cls, "type"):
            raise AttributeError(
                f"Cannot create '{cls.__name__}' class: missing required attribute 'type'"
            )

    # String representation method: constructs the equation as a string, e.g., "3x**2 + 2x - 1 = 0".
    def __str__(self):
        # Initialize an empty list to hold each term in the equation.
        terms = []
        # Iterate over the coefficient dictionary items, sorted by power in descending order.
        for n, coefficient in self.coefficients.items():
            if not coefficient:
                continue  # Skip terms with a zero coefficient.
            if n == 0:  # If n is zero, add the constant term.
                terms.append(f'{coefficient:+}')
            elif n == 1:  # If n is 1, format as the linear term (e.g., "+2x").
                terms.append(f'{coefficient:+}x')
            else:  # For higher powers, format as "+2x**n".
                terms.append(f"{coefficient:+}x**{n}")
        # Join terms with spaces and add "= 0" to complete the equation string.
        equation_string = ' '.join(terms) + ' = 0'
        # Use regex to remove "+1x" to format it as "+x".
        return re.sub(r"(?<!\d)1(?=x)", "", equation_string.strip("+"))        

    # Define abstract methods that must be implemented by subclasses.
    @abstractmethod
    def solve(self):
        pass
        
    @abstractmethod
    def analyze(self):
        pass


# Linear equation subclass of Equation, with degree 1 and type specified as 'Linear Equation'.
class LinearEquation(Equation):
    degree = 1  # Degree is 1 for linear equations.
    type = 'Linear Equation'  # Set type as a descriptor for linear equations.
    
    # Method to solve the linear equation (ax + b = 0) and return the solution.
    def solve(self):
        a, b = self.coefficients.values()  # Extract coefficients a and b.
        x = -b / a  # Compute solution x = -b / a.
        return [x]  # Return solution in a list to maintain consistency with other equations.

    # Method to analyze the linear equation, returning the slope and intercept.
    def analyze(self):
        slope, intercept = self.coefficients.values()  # Extract slope and intercept values.
        return {'slope': slope, 'intercept': intercept}  # Return a dictionary with slope and intercept.


# Quadratic equation subclass of Equation, with degree 2 and type 'Quadratic Equation'.
class QuadraticEquation(Equation):
    degree = 2  # Degree is 2 for quadratic equations.
    type = 'Quadratic Equation'  # Set type as a descriptor for quadratic equations.

    # Constructor for QuadraticEquation. Initializes and calculates the discriminant (delta).
    def __init__(self, *args):
        super().__init__(*args)  # Call the parent constructor to set coefficients.
        a, b, c = self.coefficients.values()  # Extract coefficients a, b, and c.
        # Compute delta, which is used to determine the nature of the roots.
        self.delta = b**2 - 4 * a * c

    # Method to solve the quadratic equation based on the value of delta.
    def solve(self):
        # If delta is negative, there are no real roots.
        if self.delta < 0:
            return []
        # Extract a, b, and c again for use in formula.
        a, b, _ = self.coefficients.values()
        # Compute both roots using the quadratic formula.
        x1 = (-b + (self.delta) ** 0.5) / (2 * a)
        x2 = (-b - (self.delta) ** 0.5) / (2 * a)
        if self.delta == 0:
            return [x1]  # If delta is zero, return only one root (repeated root).

        return [x1, x2]  # Return both roots.

    # Analyze method provides details on the vertex (minimum/maximum point) and concavity.
    def analyze(self):
        a, b, c = self.coefficients.values()
        x = -b / (2 * a)  # Calculate x-coordinate of the vertex.
        y = a * x**2 + b * x + c  # Calculate y-coordinate of the vertex.
        if a > 0:
            concavity = 'upwards'  # Positive a means parabola opens upwards.
            min_max = 'min'
        else:
            concavity = 'downwards'  # Negative a means parabola opens downwards.
            min_max = 'max'
        return {'x': x, 'y': y, 'min_max': min_max, 'concavity': concavity}  # Return vertex details.


# Solver function that accepts an Equation object, validates it, and prints solutions and details.
def solver(equation):
    if not isinstance(equation, Equation):  # Verify input is an Equation.
        raise TypeError("Argument must be an Equation object")

    # Format output with equation type and solutions.
    output_string = f'\n{equation.type:-^24}'
    output_string += f'\n\n{equation!s:^24}\n\n'
    output_string += f'{"Solutions":-^24}\n\n'
    results = equation.solve()  # Get solutions from solve method.
    match results:  # Pattern matching to format solution display.
        case []:
            result_list = ['No real roots']
        case [x]:
            result_list = [f'x = {x:+.3f}']
        case [x1, x2]:
            result_list = [f'x1 = {x1:+.3f}', f'x2 = {x2:+.3f}']
    for result in result_list:
        output_string += f'{result:^24}\n'
    output_string += f'\n{"Details":-^24}\n\n'
    details = equation.analyze()
    match details:
        case {'slope': slope, 'intercept': intercept}:
            details_list = [f'slope = {slope:>16.3f}', f'y-intercept = {intercept:>10.3f}']
        case {'x': x, 'y': y, 'min_max': min_max, 'concavity': concavity}:
            coord = f'({x:.3f}, {y:.3f})'
            details_list = [f'concavity = {concavity}', f'{min_max} = {coord}']
    for detail in details_list:
        output_string += f'{detail}\n'
    return output_string


# Example usage of the solver with a LinearEquation and QuadraticEquation.
lin_eq = LinearEquation(2, 3)  # Create a linear equation 2x + 3 = 0
print(solver(lin_eq))

quad_eq = QuadraticEquation(1, -3, 2)  # Create a quadratic equation x^2 - 3x + 2 = 0
print(solver(quad_eq))

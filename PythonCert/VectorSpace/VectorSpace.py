# Define R2Vector class to represent 2D vectors, with x and y coordinates.
class R2Vector:
    
    # Constructor (__init__) method to initialize an instance of R2Vector with x and y values.
    # The asterisk (*) in the parameter list enforces keyword-only arguments, ensuring that x and y
    # must be specified by name, improving readability and reducing argument order mistakes.
    def __init__(self, *, x, y):
        self.x = x  # Assign the input x-coordinate to the instance's x attribute.
        self.y = y  # Assign the input y-coordinate to the instance's y attribute.

    # Define a method named 'norm' to calculate the Euclidean norm (or magnitude) of the vector.
    # The Euclidean norm is a measure of the vector's "length" in 2D space, calculated as the
    # square root of the sum of the squares of x and y (Pythagorean theorem for 2D).
    def norm(self):
        # Using a generator expression to iterate over the values of the instance's variables.
        # Each component (x and y) is squared and summed, and the square root is taken to get the norm.
        # vars(self) returns a dictionary of all instance variables, ensuring flexibility if more attributes are added.
        return sum(val**2 for val in vars(self).values())**0.5

    # Define the __str__ method to provide a user-friendly string representation of the vector,
    # making it more readable when printed. The __str__ method is implicitly called by print() and str().
    def __str__(self):
        # Format the vector as a tuple (x, y), creating a more concise and readable format.
        # getattr(self, i) retrieves the value of each instance attribute, where 'i' is a key from vars(self).
        return str(tuple(getattr(self, i) for i in vars(self)))

    # Define __repr__ method for a detailed and informative string representation, primarily used for debugging.
    # The __repr__ method is called by repr() and in interactive sessions, showing object details clearly.
    def __repr__(self):
        # Construct a list of "key=value" strings for each instance variable, then join them with commas.
        # vars(self) provides a dictionary of the instance’s attributes, offering flexibility.
        arg_list = [f'{key}={val}' for key, val in vars(self).items()]
        args = ', '.join(arg_list)
        # Return a formatted string showing the class name and all instance attributes for easy inspection.
        return f'{self.__class__.__name__}({args})'

    # Define the addition operator (+) for adding two R2Vector instances, enabling vector addition.
    def __add__(self, other):
        # Check if the type of 'other' is the same as the current instance's type (R2Vector).
        # If they do not match, return NotImplemented to indicate that addition cannot proceed.
        if type(self) != type(other):
            return NotImplemented
        # Create a dictionary comprehension to add each corresponding component (x + x, y + y).
        # vars(self) and vars(other) are accessed using getattr, adding corresponding components.
        kwargs = {i: getattr(self, i) + getattr(other, i) for i in vars(self)}
        # Return a new instance of the same class (R2Vector) with the summed components as arguments.
        return self.__class__(**kwargs)

    # Define the subtraction operator (-) to subtract one R2Vector from another.
    def __sub__(self, other):
        # Again, check if 'other' is the same type as self (R2Vector); otherwise, return NotImplemented.
        if type(self) != type(other):
            return NotImplemented
        # Subtract each component of 'other' from the corresponding component of 'self'.
        kwargs = {i: getattr(self, i) - getattr(other, i) for i in vars(self)}
        # Return a new R2Vector with the difference of each component.
        return self.__class__(**kwargs)

    # Define the multiplication operator (*) to handle dot product and scalar multiplication.
    def __mul__(self, other):
        # If 'other' is a scalar (int or float), perform scalar multiplication by scaling each component.
        if type(other) in (int, float):
            # Multiply each component by the scalar 'other'.
            kwargs = {i: getattr(self, i) * other for i in vars(self)}
            return self.__class__(**kwargs)
        # If 'other' is an R2Vector, perform the dot product by multiplying each corresponding component.
        elif type(self) == type(other):
            # Use a list comprehension to multiply each pair of corresponding components, then sum.
            args = [getattr(self, i) * getattr(other, i) for i in vars(self)]
            return sum(args)
        # If the operation is not supported, return NotImplemented.
        return NotImplemented

    # Define equality operator (==) to check if two vectors have identical components.
    def __eq__(self, other):
        # Ensure both objects are of the same type; otherwise, return NotImplemented.
        if type(self) != type(other):
            return NotImplemented
        # Check equality for each corresponding component (x == x, y == y) using all().
        return all(getattr(self, i) == getattr(other, i) for i in vars(self))
        
    # Define inequality operator (!=), which returns the opposite of __eq__.
    def __ne__(self, other):
        return not self == other

    # Define less-than operator (<) based on vector norms, for comparing vector magnitudes.
    def __lt__(self, other):
        if type(self) != type(other):
            return NotImplemented
        # Use the norm() method to compare vector lengths.
        return self.norm() < other.norm()

    # Define greater-than operator (>) based on vector norms.
    def __gt__(self, other):
        if type(self) != type(other):
            return NotImplemented
        return self.norm() > other.norm()

    # Define less-than-or-equal operator (<=) as the logical negation of greater-than.
    def __le__(self, other):
        return not self > other

    # Define greater-than-or-equal operator (>=) as the logical negation of less-than.
    def __ge__(self, other):
        return not self < other


# Define R3Vector class, extending R2Vector to represent 3D vectors with x, y, and z coordinates.
class R3Vector(R2Vector):
    
    # Constructor to initialize an R3Vector with x, y, and z coordinates.
    # This method overrides R2Vector's __init__ method to add a third dimension (z).
    def __init__(self, *, x, y, z):
        # Initialize x and y using the parent class (R2Vector) constructor.
        super().__init__(x=x, y=y)
        self.z = z  # Assign the input z-coordinate to the instance's z attribute.

    # Define a cross product method, which is specific to 3D vectors, to compute the cross product of self and other.
    def cross(self, other):
        if type(self) != type(other):
            return NotImplemented
        # Calculate each component of the cross product using determinant formulas for 3D vectors.
        kwargs = {
            'x': self.y * other.z - self.z * other.y,
            'y': self.z * other.x - self.x * other.z,
            'z': self.x * other.y - self.y * other.x
        }
        # Return a new R3Vector instance with the calculated cross product components.
        return self.__class__(**kwargs)

# Create two instances of R3Vector with specified x, y, z values.
v1 = R3Vector(x=2, y=3, z=1)  # v1 has coordinates (2, 3, 1).
v2 = R3Vector(x=0.5, y=1.25, z=2)  # v2 has coordinates (0.5, 1.25, 2).

# Print the string representation of v1 and v2 to visually verify their values.
print(f'v1 = {v1}')
print(f'v2 = {v2}')

# Perform vector addition of v1 and v2, resulting in a new R3Vector instance.
v3 = v1 + v2
print(f'v1 + v2 = {v3}')

# Perform vector subtraction of v1 and v2, yielding another R3Vector instance.
v4 = v1 - v2
print(f'v1 - v2 = {v4}')

# Perform the dot product of v1 and v2, which is a scalar result.
v5 = v1 * v2
print(f'v1 * v2 = {v5}')

# Perform the cross product of v1 and v2, yielding a new R3Vector.
v6 = v1.cross(v2)
print(f'v1 cross v2 = {v6}')

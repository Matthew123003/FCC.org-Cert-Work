class Rectangle:
    # `class` declares a new class named `Rectangle`, which represents a rectangle shape with specific dimensions.

    def __init__(self, width, height):
        # `__init__` is a special method (the constructor) that initializes new `Rectangle` objects.
        
        self.width = width
        # `self.width` is an instance variable set to the `width` argument when creating a `Rectangle`.
        
        self.height = height
        # `self.height` is an instance variable set to the `height` argument when creating a `Rectangle`.

    def set_width(self, width):
        # `set_width` method allows changing the `width` of the rectangle.
        
        self.width = width
        # Assigns the new `width` value to `self.width`.

    def set_height(self, height):
        # `set_height` method allows changing the `height` of the rectangle.
        
        self.height = height
        # Assigns the new `height` value to `self.height`.

    def get_area(self):
        # `get_area` calculates and returns the area of the rectangle.
        
        return self.width * self.height
        # Multiplies `width` by `height` to get the area.

    def get_perimeter(self):
        # `get_perimeter` calculates and returns the perimeter of the rectangle.
        
        return 2 * (self.width + self.height)
        # Uses the formula `2 * (width + height)` to get the perimeter.

    def get_diagonal(self):
        # `get_diagonal` calculates and returns the length of the diagonal.
        
        return (self.width ** 2 + self.height ** 2) ** 0.5
        # Uses the Pythagorean theorem to calculate the diagonal length and takes the square root.

    def get_picture(self):
        # `get_picture` returns a string representation of the rectangle made of `*` characters.
        
        if self.width > 50 or self.height > 50:
            # Checks if the rectangle is too large to display.
            
            return "Too big for picture."
            # If either dimension exceeds 50, returns a message instead of a picture.
        
        return ("*" * self.width + "\n") * self.height
        # Creates rows of `*` characters, each row `width` wide, and repeats this `height` times, with newlines.

    def get_amount_inside(self, shape):
        # `get_amount_inside` calculates how many times `shape` can fit inside this rectangle.
        
        return (self.width // shape.width) * (self.height // shape.height)
        # Uses integer division to find how many full times `shape`'s width and height fit in `self.width` and `self.height`.

    def __str__(self):
        # `__str__` defines the string representation of the `Rectangle`.
        
        return f"Rectangle(width={self.width}, height={self.height})"
        # Returns a formatted string with `width` and `height` values, describing the rectangle.

        
class Square(Rectangle):
    # `class Square(Rectangle)` declares `Square` as a subclass of `Rectangle`, inheriting its properties and methods.

    def __init__(self, side):
        # `__init__` initializes a `Square` with a single `side` parameter.
        
        super().__init__(side, side)
        # Calls the parent `Rectangle` class’s `__init__` method with `side` as both `width` and `height`.

    def set_side(self, side):
        # `set_side` changes both `width` and `height` to make the square have equal sides.
        
        self.width = side
        # Sets `width` to `side`.
        
        self.height = side
        # Sets `height` to `side`.

    def set_width(self, width):
        # `set_width` overrides the parent method to ensure width and height remain equal.
        
        self.set_side(width)
        # Calls `set_side` with `width`, so both dimensions are changed to `width`.

    def set_height(self, height):
        # `set_height` overrides the parent method to ensure width and height remain equal.
        
        self.set_side(height)
        # Calls `set_side` with `height`, so both dimensions are changed to `height`.

    def __str__(self):
        # `__str__` defines the string representation of the `Square`.
        
        return f"Square(side={self.width})"
        # Returns a formatted string indicating the `Square`'s side length, which is `width` (equal to `height`).

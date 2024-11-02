import math

# Define gravitational acceleration constant, assuming Earth's standard gravity in m/s^2
GRAVITATIONAL_ACCELERATION = 9.81  # m/s^2
# Define a character to represent the projectile's position on the graph
PROJECTILE = "∙"
# Define a character for the x-axis marker in the graph
x_axis_tick = "T"
# Define a character for the y-axis marker in the graph
y_axis_tick = "⊣"

# Define the Projectile class with key attributes and behaviors for a projectile's motion
class Projectile:
    # Restrict attribute creation to only specific private attributes (memory efficiency)
    __slots__ = ('__speed', '__height', '__angle')

    def __init__(self, speed, height, angle):
        # Initialize private attributes for speed, height, and angle of launch in radians
        self.__speed = speed  # Initial speed in meters per second
        self.__height = height  # Initial height in meters
        # Convert the launch angle from degrees to radians for trigonometric calculations
        self.__angle = math.radians(angle)
        
    def __str__(self):
        """
        Return a string representation of the projectile's details, including speed,
        height, angle in degrees, and calculated displacement.
        """
        return f'''
Projectile details:
speed: {self.speed} m/s
height: {self.height} m
angle: {self.angle}°
displacement: {round(self.__calculate_displacement(), 1)} m
'''

    def __calculate_displacement(self):
        """
        Private method to calculate the horizontal displacement of the projectile based on
        initial speed, height, angle, and gravitational acceleration.
        """
        # Calculate horizontal component of initial velocity
        horizontal_component = self.__speed * math.cos(self.__angle)
        # Calculate vertical component of initial velocity
        vertical_component = self.__speed * math.sin(self.__angle)
        # Compute square of vertical component for later calculation
        squared_component = vertical_component ** 2
        # Compute component for height and gravity contribution to total displacement
        gh_component = 2 * GRAVITATIONAL_ACCELERATION * self.__height
        # Apply the physics formula to find total horizontal displacement
        sqrt_component = math.sqrt(squared_component + gh_component)
        
        # Return total displacement as horizontal component * (total time in air)
        return horizontal_component * (vertical_component + sqrt_component) / GRAVITATIONAL_ACCELERATION

    def __calculate_y_coordinate(self, x):
        """
        Private method to calculate the y-coordinate (height) of the projectile at a
        given x-coordinate (horizontal displacement).
        
        Uses a physics formula combining initial height, angle, and effect of gravity.
        """
        # Initial height component remains constant in height calculation
        height_component = self.__height
        # Calculate effect of angle on height using tangent
        angle_component = math.tan(self.__angle) * x
        # Gravity component reduces height with horizontal distance squared
        acceleration_component = GRAVITATIONAL_ACCELERATION * x ** 2 / (
                2 * self.__speed ** 2 * math.cos(self.__angle) ** 2)
        # Final y-coordinate based on height, angle, and gravity contributions
        y_coordinate = height_component + angle_component - acceleration_component

        return y_coordinate  # Return calculated y-coordinate

    def calculate_all_coordinates(self):
        """
        Public method to calculate all (x, y) coordinates from launch to landing.
        Returns a list of coordinate tuples.
        """
        # Calculate displacement and return list of (x, y) coordinates along the trajectory
        return [
            (x, self.__calculate_y_coordinate(x))
            for x in range(math.ceil(self.__calculate_displacement()))
        ]

    # Property to access height
    @property
    def height(self):
        return self.__height

    # Property to access angle in degrees (converted from radians)
    @property
    def angle(self):
        return round(math.degrees(self.__angle))

    # Property to access speed
    @property
    def speed(self):
        return self.__speed

    # Setter for height
    @height.setter
    def height(self, n):
        self.__height = n

    # Setter for angle (convert input from degrees to radians)
    @angle.setter
    def angle(self, n):
        self.__angle = math.radians(n)

    # Setter for speed
    @speed.setter
    def speed(self, s):
        self.__speed = s
    
    def __repr__(self):
        """
        Return a formal string representation of the Projectile object.
        """
        return f'{self.__class__}({self.speed}, {self.height}, {self.angle})'

# Define the Graph class to display the trajectory of the projectile
class Graph:
    # Restrict attribute creation to a single private attribute (__coordinates)
    __slots__ = ('__coordinates')

    def __init__(self, coord):
        # Initialize the coordinates for the projectile's trajectory
        self.__coordinates = coord

    def __repr__(self):
        """
        Return a formal string representation of the Graph object.
        """
        return f"Graph({self.__coordinates})"

    def create_coordinates_table(self):
        """
        Generate a formatted string table of x and y coordinates for the projectile's trajectory.
        """
        # Initialize the header for the table
        table = '\n  x      y\n'
        # Loop over each coordinate tuple and format each as a line in the table
        for x, y in self.__coordinates:
            table += f'{x:>3}{y:>7.2f}\n'

        return table  # Return the complete table as a string

    def create_trajectory(self):
        """
        Generate a visual representation of the projectile's trajectory in a grid format.
        """
        # Round each coordinate pair for easier plotting in a discrete matrix
        rounded_coords = [(round(x), round(y)) for x, y in self.__coordinates]

        # Find maximum values for x and y to determine graph size
        x_max = max(rounded_coords, key=lambda i: i[0])[0]
        y_max = max(rounded_coords, key=lambda j: j[1])[1]

        # Initialize a matrix (2D list) with empty spaces for each point in the graph
        matrix_list = [[" " for _ in range(x_max + 1)] for _ in range(y_max + 1)]

        # Place the projectile marker at each rounded coordinate in the matrix
        for x, y in rounded_coords:
            matrix_list[-1 - y][x] = PROJECTILE

        # Convert each row in the matrix to a string and add y-axis ticks
        matrix = ["".join(line) for line in matrix_list]

        # Add y-axis markers and x-axis markers for display
        matrix_axes = [y_axis_tick + row for row in matrix]
        matrix_axes.append(" " + x_axis_tick * (len(matrix[0])))

        # Combine all rows and axes into a single graph string
        graph = "\n" + "\n".join(matrix_axes) + "\n"

        return graph  # Return the final graphical representation as a string

# Create a Projectile instance with specific parameters
ball = Projectile(10, 3, 45)  # Initialize with speed=10 m/s, height=3 m, angle=45 degrees
print(ball)  # Print details of the projectile (speed, height, angle, displacement)

# Calculate all coordinates of the projectile's trajectory and store them
coordinates = ball.calculate_all_coordinates()
# Create a Graph instance with the projectile's coordinates
graph = Graph(coordinates)
# Print the graphical representation of the trajectory
print(graph.create_trajectory())

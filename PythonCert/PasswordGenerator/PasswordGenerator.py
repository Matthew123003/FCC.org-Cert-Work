# Import libraries necessary for password generation and validation.

import re          # Import 're' (regular expressions) for pattern-matching. Essential to define patterns that match
                   # specific character types in the password, ensuring it includes the required digits, symbols, uppercase, 
                   # and lowercase letters.

import secrets     # Import 'secrets' for secure, cryptographically strong random generation. This is specifically safer 
                   # for sensitive data (like passwords) compared to the 'random' library, which is not designed for cryptographic use.

import string      # Import 'string' constants (like letters, digits, punctuation). Provides character classes such as 
                   # 'ascii_letters', 'digits', and 'punctuation', which make it easy to create standard character pools
                   # for building the password.

def generate_password(length=16, nums=1, special_chars=1, uppercase=1, lowercase=1):
    """
    Generates a secure password with a specified total length and minimum requirements for specific character types.

    Parameters:
        length (int): Total length of the generated password. Default is 16 characters.
        nums (int): Minimum count of numerical digits (0-9) to include in the password.
        special_chars (int): Minimum count of special characters (e.g., @, #, $, etc.).
        uppercase (int): Minimum count of uppercase letters (A-Z).
        lowercase (int): Minimum count of lowercase letters (a-z).

    Returns:
        str: A generated password string that meets all specified length and character requirements.
    """

    # Define pools of characters to meet each character type requirement:
    letters = string.ascii_letters     # `string.ascii_letters` combines both uppercase and lowercase letters (A-Z, a-z).
                                       # This serves as the pool for letter characters, useful for ensuring the password
                                       # meets both uppercase and lowercase requirements.

    digits = string.digits             # `string.digits` represents numbers (0-9), forming the pool for numerical characters.
                                       # This pool helps satisfy the 'nums' requirement, specifying the minimum number of 
                                       # digits the password should contain.

    symbols = string.punctuation       # `string.punctuation` includes special characters (e.g., !, @, #, $, etc.), creating
                                       # a pool of symbols for secure passwords. This helps ensure the password meets 
                                       # the 'special_chars' requirement.

    # Create a combined pool of all possible characters for random selection when building the password.
    all_characters = letters + digits + symbols  # Concatenates letters, digits, and symbols to make a comprehensive 
                                                 # character pool. This pool is then used to build the password by 
                                                 # random selection from all character types.

    # Infinite loop to generate and validate passwords until all conditions are satisfied.
    while True:
        password = ''  # Initialize an empty string to accumulate characters for the password.
        
        # Construct the password by randomly selecting characters from the combined pool.
        for _ in range(length):  # Repeat character selection 'length' times, ensuring the password meets the specified total length.
            password += secrets.choice(all_characters)  # `secrets.choice` securely picks a random character from `all_characters`,
                                                       # ensuring each character added to `password` is random, safe, and 
                                                       # includes letters, digits, and symbols.

        # List of constraints to validate the generated password.
        # Each constraint is a tuple: (minimum count, regex pattern for matching characters of the specific type).
        constraints = [
            (nums, r'\d'),               # (1) `\d` is a regex pattern to match any digit character (0-9). This enforces
                                         # the 'nums' requirement by specifying a minimum count for digits in the password.

            (special_chars, fr'[{symbols}]'), # (2) Matches any character in `symbols`. The f-string allows dynamic inclusion
                                             # of `symbols`, creating a regex pattern for the 'special_chars' requirement,
                                             # ensuring the password has enough special characters.

            (uppercase, r'[A-Z]'),       # (3) Matches any uppercase letter (A-Z). `[A-Z]` is a regex pattern for uppercase
                                         # letters, enforcing the 'uppercase' requirement by specifying a minimum count.

            (lowercase, r'[a-z]')        # (4) Matches any lowercase letter (a-z). `[a-z]` is a regex pattern for lowercase
                                         # letters, enforcing the 'lowercase' requirement by specifying a minimum count.
        ]

        # Validate if the generated password meets all specified constraints.
        # `all()` is a built-in function that returns True if all elements of the iterable are True.
        if all(
            constraint <= len(re.findall(pattern, password))  # Compare each constraint to the count of matched characters
                                                             # in `password`. `re.findall` returns a list of all matches 
                                                             # for `pattern` in `password`, ensuring each type meets its minimum.

            for constraint, pattern in constraints            # Loop through each tuple (count, regex pattern) in constraints,
                                                             # applying them to check if the generated password meets all 
                                                             # minimum requirements for each character type.
        ):
            # If all constraints are satisfied (each count matches the required minimum), exit the loop.
            break

    # Return the generated password, which meets all requirements, back to the calling code.
    return password  # The generated password, satisfying all specified length and character constraints, is returned.

# Generate a password using default length and constraints, storing it in 'new_password'.
new_password = generate_password()  # Calls `generate_password` without specific parameters, using the default values
                                    # defined in the function, creating a password with default character counts.

# Print the generated password to the console.
print('Generated password:', new_password)  # Displays the password, demonstrating that the function created a valid result.
                                            # This output confirms the successful generation of a password based on 
                                            # all specified requirements.

import re          # Import regular expressions library to match specific character patterns in the password.
import secrets     # Import the secrets library for generating secure, cryptographic-safe random values.
import string      # Import string constants for lists of characters (letters, digits, symbols).

def generate_password(length=16, nums=1, special_chars=1, uppercase=1, lowercase=1):
    """
    Generates a password with specified length and minimum requirements for character types.

    Parameters:
        length (int): The length of the password to generate. Default is 16.
        nums (int): Minimum number of numerical digits (0-9) required in the password.
        special_chars (int): Minimum number of special characters (e.g., @, #, $, etc.) required.
        uppercase (int): Minimum number of uppercase letters (A-Z) required.
        lowercase (int): Minimum number of lowercase letters (a-z) required.

    Returns:
        str: A randomly generated password string that meets the specified requirements.
    """

    # Define character pools:
    letters = string.ascii_letters     # Contains both uppercase and lowercase letters (A-Z, a-z).
    digits = string.digits             # Contains numbers (0-9).
    symbols = string.punctuation       # Contains special characters (!, @, #, $, etc.).

    # Combine all characters into one pool for random selection
    all_characters = letters + digits + symbols

    # Infinite loop to ensure password meets constraints
    while True:
        password = ''  # Initialize an empty string to store the generated password.
        
        # Generate a random password by picking characters from the combined pool
        for _ in range(length):  # Repeat until the password reaches the specified length.
            password += secrets.choice(all_characters)  # Securely select a random character.
        
        # List of constraints to validate the generated password
        constraints = [
            (nums, r'\d'),               # Match any digit character (0-9). `\d` is a regex pattern for digits.
            (special_chars, fr'[{symbols}]'), # Match any special character. Regex `[symbol characters]`.
            (uppercase, r'[A-Z]'),       # Match any uppercase letter (A-Z).
            (lowercase, r'[a-z]')        # Match any lowercase letter (a-z).
        ]

        # Check if generated password meets all constraints:
        if all(
            constraint <= len(re.findall(pattern, password))  # Check each constraint
            for constraint, pattern in constraints            # Unpack each constraint tuple (count, pattern).
        ):
            # If all constraints are met, break out of the loop.
            break

    # Return the valid password that satisfies all requirements
    return password

# Generate a new password using default constraints and print it
new_password = generate_password()
print('Generated password:', new_password)

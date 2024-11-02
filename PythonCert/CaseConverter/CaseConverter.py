def convert_to_snake_case(pascal_or_camel_cased_string):
    """
    Function to convert a string from PascalCase or camelCase to snake_case.
    
    Args:
    - pascal_or_camel_cased_string (str): The input string in PascalCase or camelCase.
    
    Returns:
    - str: The converted string in snake_case.
    """

    # `snake_cased_char_list` is a list comprehension that creates a list of characters transformed to snake_case
    # The logic adds an underscore (`_`) before uppercase letters and converts them to lowercase
    snake_cased_char_list = [
        '_' + char.lower() if char.isupper()  # Adds underscore before uppercase letters, then converts to lowercase
        else char                             # If the character is lowercase, it is added unchanged
        for char in pascal_or_camel_cased_string
    ]

    # Joins the characters in `snake_cased_char_list` into a single string and removes leading underscore if present
    return ''.join(snake_cased_char_list).strip('_')


def main():
    """
    Main function to demonstrate conversion to snake_case.
    """
    # Calls `convert_to_snake_case` with an example PascalCase string and prints the result
    print(convert_to_snake_case('aLongAndComplexString'))  # Expected output: 'a_long_and_complex_string'

    
# Run the main function to demonstrate functionality
main()  # Initiates the program, executing `convert_to_snake_case` on a sample string


# --- Additional Breakdown of Key Concepts in This Code ---

# List Comprehensions with Conditional Logic: 
# - The list comprehension in `snake_cased_char_list` evaluates each character. It adds `_` before uppercase letters (converted to lowercase) and includes lowercase characters as-is.

# String Manipulation: 
# - `join()` combines the list elements into a single string. 
# - `strip('_')` removes any leading underscores, which may be added if the string starts with an uppercase letter.

# Function Structure for Code Reusability: 
# - `convert_to_snake_case()` encapsulates the transformation logic, making it easily reusable.
# - `main()` serves as a demonstration function, showcasing `convert_to_snake_case()` without modifying the core logic.

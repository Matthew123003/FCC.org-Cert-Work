# main.py

def verify_card_number(card_number):
    # `verify_card_number` checks if a card number is valid based on the Luhn algorithm.
    
    sum_of_odd_digits = 0
    # Initializes `sum_of_odd_digits` to 0, which will store the sum of every other digit from the end.
    
    card_number_reversed = card_number[::-1]
    # Reverses the card number to make it easier to access odd and even indices for Luhn's algorithm.
    
    odd_digits = card_number_reversed[::2]
    # `odd_digits` selects every other digit starting from the first reversed position (odd indices in the original).

    for digit in odd_digits:
        # Loops through each digit in `odd_digits`.
        
        sum_of_odd_digits += int(digit)
        # Converts `digit` to an integer and adds it to `sum_of_odd_digits`.

    sum_of_even_digits = 0
    # Initializes `sum_of_even_digits` to 0 to store the sum of doubled even-position digits (from the original order).
    
    even_digits = card_number_reversed[1::2]
    # `even_digits` selects every other digit starting from the second reversed position (even indices in the original).
    
    for digit in even_digits:
        # Loops through each digit in `even_digits`.
        
        number = int(digit) * 2
        # Doubles the integer value of `digit` as per Luhn's algorithm.
        
        if number >= 10:
            # Checks if the doubled number is greater than or equal to 10.
            
            number = (number // 10) + (number % 10)
            # Splits `number` into its tens and ones places and adds them together (equivalent to summing digits).
        
        sum_of_even_digits += number
        # Adds `number` to `sum_of_even_digits`.

    total = sum_of_odd_digits + sum_of_even_digits
    # Calculates `total` as the sum of `sum_of_odd_digits` and `sum_of_even_digits`.
    
    print(total)
    # Outputs `total` for verification purposes.
    
    return total % 10 == 0
    # Returns `True` if `total` modulo 10 is 0, indicating a valid card number.

def main():
    # `main` is the entry point of the program, defining the card number to check and running verification.
    
    card_number = '4111-1111-4555-1141'
    # `card_number` holds the string representing the card number to validate.

    card_translation = str.maketrans({'-': '', ' ': ''})
    # `card_translation` maps `-` and space characters to empty strings to remove them from `card_number`.
    
    translated_card_number = card_number.translate(card_translation)
    # Uses `translate` to apply `card_translation` to `card_number`, producing a string without spaces or hyphens.

    if verify_card_number(translated_card_number):
        # Calls `verify_card_number` with `translated_card_number` and checks if it returns `True`.
        
        print('VALID!')
        # Prints 'VALID!' if the card number is valid.
        
    else:
        print('INVALID!')
        # Prints 'INVALID!' if the card number is not valid.

main()
# Calls `main` to start the program.


# String Manipulation: card_number[::-1] reverses the string, and card_number[::2] selects every other character.
# Character Translation: str.maketrans maps characters to replacements, making it easy to remove or replace them using translate.
# Luhn Algorithm: This algorithm verifies credit card numbers by doubling every second digit from the end and summing all digits, ensuring the total is divisible by 10.
# Modular Arithmetic: total % 10 == 0 checks if the total is divisible by 10, signaling validity.
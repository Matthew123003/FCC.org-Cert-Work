# main.py

def verify_card_number(card_number):
    # `verify_card_number` function verifies if a card number is valid based on the Luhn algorithm.
    # The Luhn algorithm is widely used for verifying credit card numbers, where certain rules are
    # applied to the digits in a way that produces a "checksum". If the checksum meets a specific condition
    # (being divisible by 10), the card number is considered valid.

    sum_of_odd_digits = 0
    # Initializes `sum_of_odd_digits` to 0, which will accumulate the sum of every other digit
    # from the end of the card number (following the Luhn algorithm rules).

    card_number_reversed = card_number[::-1]
    # Reverses the `card_number` string, making it easier to process every other digit from the end.
    # `[::-1]` is Python slice notation for reversing a sequence.
    # In the Luhn algorithm, you process digits from the right, so reversing simplifies the indexing.

    odd_digits = card_number_reversed[::2]
    # `odd_digits` takes every second digit from the reversed `card_number`, which aligns with
    # selecting every other digit starting from the end (odd indices in the original order).
    # `card_number_reversed[::2]` uses slice notation `start:end:step`, where a step of 2 skips
    # every other character.

    for digit in odd_digits:
        # Iterates over each `digit` in `odd_digits`. Here, each `digit` represents a character,
        # so conversion to an integer is necessary for arithmetic operations.

        sum_of_odd_digits += int(digit)
        # Converts `digit` from string to integer with `int(digit)` and adds it to `sum_of_odd_digits`.
        # `+=` is shorthand for `sum_of_odd_digits = sum_of_odd_digits + int(digit)`, updating the total sum.

    sum_of_even_digits = 0
    # Initializes `sum_of_even_digits` to 0, which will hold the sum of modified even-position digits.
    # Even-positioned digits (from the right in the original sequence) undergo doubling as per the Luhn algorithm.

    even_digits = card_number_reversed[1::2]
    # `even_digits` selects every other digit from the reversed number starting at index 1,
    # which, due to the reversal, corresponds to even positions in the original sequence.
    # `card_number_reversed[1::2]` captures these positions by skipping every second character.

    for digit in even_digits:
        # Iterates through each `digit` in `even_digits`.

        number = int(digit) * 2
        # Doubles each even-positioned digit as per the Luhn algorithm requirements.
        # `int(digit) * 2` converts the character to an integer and multiplies it by 2.
        
        if number >= 10:
            # Checks if `number` is 10 or greater. If so, the number is split into its tens and ones places.
            # This "splitting and summing" follows the Luhn algorithm, where double-digit numbers have their
            # individual digits summed.

            number = (number // 10) + (number % 10)
            # `(number // 10)` isolates the tens place, while `(number % 10)` gives the ones place.
            # Summing these gives a single-digit result (mimicking summing the individual digits of `number`).

        sum_of_even_digits += number
        # Adds `number` (doubled and potentially adjusted) to `sum_of_even_digits`.
        # `+=` increments `sum_of_even_digits` with each processed `digit`.

    total = sum_of_odd_digits + sum_of_even_digits
    # Adds both `sum_of_odd_digits` and `sum_of_even_digits` to produce a cumulative `total`.
    # This `total` represents the checksum that determines card validity.

    print(total)
    # Displays `total` to provide a visual reference of the computed checksum. 
    # This line can help with debugging by showing if `total` is what you expect.

    return total % 10 == 0
    # Returns `True` if `total` modulo 10 is 0, which signifies a valid card number by the Luhn algorithm.
    # `total % 10 == 0` checks divisibility by 10, a condition required for card number validity.

def main():
    # `main` function is the program's entry point, initializing the card number and triggering validation.
    
    card_number = '4111-1111-4555-1141'
    # `card_number` contains the card number to validate, stored as a string with dashes.

    card_translation = str.maketrans({'-': '', ' ': ''})
    # `card_translation` creates a mapping with `str.maketrans` to replace `-` and spaces with empty strings.
    # This is used to strip out extraneous characters for clean processing.
    
    translated_card_number = card_number.translate(card_translation)
    # `translated_card_number` removes `-` and spaces by applying `translate(card_translation)`,
    # yielding a purely numeric string suitable for validation.

    if verify_card_number(translated_card_number):
        # Calls `verify_card_number` with `translated_card_number` to determine its validity.
        
        print('VALID!')
        # Prints "VALID!" if the card number passes verification (i.e., `True` is returned).
        
    else:
        print('INVALID!')
        # Prints "INVALID!" if the card number fails verification.

main()
# Calls `main()` to start the program, initializing `card_number` and running the Luhn check.

# Additional Breakdown of Key Python Concepts
# -------------------------------------------
# - **String Manipulation:** card_number[::-1] reverses the string, and card_number[::2] selects every other character.
# - **Character Translation:** str.maketrans creates a mapping, and translate uses this map for efficient string replacement.
# - **Luhn Algorithm:** A checksum method verifying credit card numbers by doubling every second digit from the end and summing all digits.
# - **Modular Arithmetic:** total % 10 == 0 checks if the total is divisible by 10, a rule to signal card number validity.

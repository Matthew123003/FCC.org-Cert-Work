def arithmetic_arranger(problems, show_answers=False):
    # `def` is used to define a function in Python, followed by the function name `arithmetic_arranger`.
    # `problems` is a parameter that expects a list of arithmetic problem strings.
    # `show_answers=False` is an optional parameter with a default value of `False`.
    # When this function is called, `show_answers` will be `False` unless specified otherwise.

    # Error if there are too many problems
    if len(problems) > 5:
        # `len()` is a built-in function that returns the number of items in `problems`.
        # `if` checks a condition. Here, it checks if there are more than 5 problems.
        return 'Error: Too many problems.'
        # `return` stops the function and sends the provided message back to the caller.

    # Lists to store different parts of each problem
    first_operands = []
    second_operands = []
    operators = []
    answers = []
    line_lengths = []
    # `first_operands`, `second_operands`, `operators`, `answers`, and `line_lengths` are initialized as empty lists.
    # Each list will store respective values from each problem to make arranging them easier later.

    for problem in problems:
        # `for` loop goes through each item in `problems`.
        parts = problem.split()
        # `split()` divides the string `problem` by whitespace into a list of parts (e.g., ["32", "+", "698"]).

        # Error if the operator is not '+' or '-'
        if parts[1] not in ('+', '-'):
            # `parts[1]` represents the operator (second item in the split list).
            # `not in` checks if the operator is neither '+' nor '-'. If so, an error message is returned.
            return "Error: Operator must be '+' or '-'."

        # Error if operands contain non-digit characters
        if not parts[0].isdigit() or not parts[2].isdigit():
            # `isdigit()` checks if the string is all digits. Here, `parts[0]` and `parts[2]` must be all digits.
            return 'Error: Numbers must only contain digits.'

        # Error if operands are more than four digits
        if len(parts[0]) > 4 or len(parts[2]) > 4:
            # Checks the length of `parts[0]` and `parts[2]` to ensure they are not over 4 digits.
            return 'Error: Numbers cannot be more than four digits.'

        # Store values in respective lists
        first_operands.append(parts[0])  # Adds the first operand to `first_operands`.
        second_operands.append(parts[2])  # Adds the second operand to `second_operands`.
        operators.append(parts[1])  # Adds the operator to `operators`.

        # Calculate answer if needed
        if parts[1] == '+':
            answer = str(int(parts[0]) + int(parts[2]))
            # If the operator is '+', it converts `parts[0]` and `parts[2]` to integers,
            # adds them, then converts the result back to a string and stores it in `answer`.
        else:
            answer = str(int(parts[0]) - int(parts[2]))
            # If the operator is '-', it subtracts the second operand from the first.

        answers.append(answer)  # Adds the computed answer to `answers`.

        # Determine length for formatting
        line_lengths.append(max(len(parts[0]), len(parts[2])) + 2)
        # `max()` finds the maximum length of the two operands to determine the space needed for alignment.
        # `+ 2` allows space for the operator and formatting (extra padding).

    # Initializing strings for each line in the final arrangement
    line1 = line2 = line3 = line4 = ""
    # Each line (line1 for first operands, line2 for operators, etc.) starts as an empty string.
    # `line4` will only be used if `show_answers` is True.

    for i in range(len(problems)):
        # Loops through each problem using its index `i`.
        # `len(problems)` gives the total number of problems.

        # Formatting each line with appropriate spacing
        line1 += first_operands[i].rjust(line_lengths[i]) + '    '
        # `rjust()` right-aligns the operand to `line_lengths[i]` width, adding extra spaces if necessary.
        # `+ '    '` adds four spaces between each problem for clarity.

        line2 += operators[i] + second_operands[i].rjust(line_lengths[i] - 1) + '    '
        # The operator is added first, followed by the right-aligned second operand.
        # `line_lengths[i] - 1` leaves space for the operator.

        line3 += '-' * line_lengths[i] + '    '
        # `'-' * line_lengths[i]` creates a line of dashes matching `line_lengths[i]` for underlining.
        # `+ '    '` adds spacing for formatting.

        if show_answers:
            # Only execute if `show_answers` is True.
            line4 += answers[i].rjust(line_lengths[i]) + '    '
            # The answer is added, right-aligned to `line_lengths[i]`, with extra spaces for formatting.

    # Removing trailing spaces from each line and combining them with newline characters
    arranged_problems = line1.rstrip() + '\n' + line2.rstrip() + '\n' + line3.rstrip()
    # `rstrip()` removes trailing spaces at the end of each line to tidy up the layout.
    # `+ '\n'` adds newline characters to start a new line for each section (first operand, operator line, dashes).

    if show_answers:
        # Adds the answers line if `show_answers` is True.
        arranged_problems += '\n' + line4.rstrip()

    return arranged_problems
    # Returns the final arranged string to the caller.

# Test example
print(arithmetic_arranger(["32 + 698", "3801 - 2", "45 + 43", "123 + 49"]))
# `print()` outputs the arranged problems without answers.
print()
print(arithmetic_arranger(["32 + 8", "1 - 3801", "9999 + 9999", "523 - 49"], True))
# This print statement includes `show_answers=True` to display the solutions along with the problems.



# Function Definition (def ... :): In Python, functions are defined with def, and a colon : indicates the beginning of the function body.
# Lists ([]): Lists are created with square brackets [], and items are separated by commas.
# Colon for Conditional and Loop Statements: After if, for, and similar statements, a colon : signifies the start of an indented code block, representing the statement’s body.
# String Formatting (' '): In Python, string formatting can be achieved with string concatenation (like + ' ' for spacing).
# Right-Justify (rjust()): Python’s rjust(width) method right-aligns text in a field of given width, padding it with spaces on the left.
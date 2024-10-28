def arithmetic_arranger(problems, show_answers=False):
    # Error if there are too many problems
    if len(problems) > 5:
        return 'Error: Too many problems.'

    first_operands = []
    second_operands = []
    operators = []
    answers = []
    line_lengths = []

    for problem in problems:
        parts = problem.split()

        # Error if the operator is not '+' or '-'
        if parts[1] not in ('+', '-'):
            return "Error: Operator must be '+' or '-'."

        # Error if operands contain non-digit characters
        if not parts[0].isdigit() or not parts[2].isdigit():
            return 'Error: Numbers must only contain digits.'

        # Error if operands are more than four digits
        if len(parts[0]) > 4 or len(parts[2]) > 4:
            return 'Error: Numbers cannot be more than four digits.'

        # Store values
        first_operands.append(parts[0])
        second_operands.append(parts[2])
        operators.append(parts[1])

        # Calculate answer if needed
        if parts[1] == '+':
            answer = str(int(parts[0]) + int(parts[2]))
        else:
            answer = str(int(parts[0]) - int(parts[2]))
        answers.append(answer)

        # Determine length for formatting
        line_lengths.append(max(len(parts[0]), len(parts[2])) + 2)

    # Building each line
    line1 = line2 = line3 = line4 = ""

    for i in range(len(problems)):
        # Formatting each line with appropriate spacing
        line1 += first_operands[i].rjust(line_lengths[i]) + '    '
        line2 += operators[i] + second_operands[i].rjust(line_lengths[i] - 1) + '    '
        line3 += '-' * line_lengths[i] + '    '
        if show_answers:
            line4 += answers[i].rjust(line_lengths[i]) + '    '

    # Removing trailing spaces from each line
    arranged_problems = line1.rstrip() + '\n' + line2.rstrip() + '\n' + line3.rstrip()
    if show_answers:
        arranged_problems += '\n' + line4.rstrip()

    return arranged_problems

# Test example
print(arithmetic_arranger(["32 + 698", "3801 - 2", "45 + 43", "123 + 49"]))
print()
print(arithmetic_arranger(["32 + 8", "1 - 3801", "9999 + 9999", "523 - 49"], True))

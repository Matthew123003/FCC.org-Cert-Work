# main.py

# Function to add an expense to the list
def add_expense(expenses, amount, category):
    # `expenses` is a list where each expense will be stored as a dictionary
    # `amount` is a float or integer, representing the cost of an item
    # `category` is a string, categorizing the expense (e.g., "Food", "Travel")
    
    # Dictionaries in Python store data as key-value pairs. Here, a dictionary with 'amount' and 'category' is added to the `expenses` list
    expenses.append({'amount': amount, 'category': category})  # `append()` is a method that adds an item to the end of a list

# Function to print all expenses in a readable format
def print_expenses(expenses):
    # A `for` loop is used here to iterate over each item in the list `expenses`
    # `expense` represents each dictionary item in `expenses` during each iteration of the loop
    for expense in expenses:
        # f-string syntax (f'...') allows embedding expressions directly within a string for easy formatting
        # `{expense["amount"]}` and `{expense["category"]}` insert the values of 'amount' and 'category' from the `expense` dictionary
        print(f'Amount: {expense["amount"]}, Category: {expense["category"]}')

# Function to calculate the total of all expenses
def total_expenses(expenses):
    # `map()` applies a given function (lambda here) to each item in `expenses`
    # `lambda expense: expense['amount']` is an anonymous function extracting 'amount' from each expense dictionary
    # `sum()` takes the resulting list of amounts and calculates the total sum
    return sum(map(lambda expense: expense['amount'], expenses))

# Function to filter expenses by a specific category
def filter_expenses_by_category(expenses, category):
    # `filter()` applies the given function to each item in `expenses`, returning only items where the condition is True
    # The lambda function checks if `expense['category']` matches the given `category`
    return filter(lambda expense: expense['category'] == category, expenses)

# Main function to execute the program logic
def main():
    # Initializes `expenses` as an empty list; this will store all expense entries added by the user
    expenses = []
    
    # `while True` starts an infinite loop, repeatedly showing a menu and processing user input until `break` is called
    while True:
        # Displays menu options; `\n` is a newline character for readability in the output
        print('\nExpense Tracker')
        print('1. Add an expense')
        print('2. List all expenses')
        print('3. Show total expenses')
        print('4. Filter expenses by category')
        print('5. Exit')
        
        # `input()` captures user input as a string. `choice` will determine which branch of the if-elif-else structure is taken
        choice = input('Enter your choice: ')
        
        # If user selects option '1', they will add an expense
        if choice == '1':
            # Prompts for expense amount; `float(input(...))` converts the input to a float (decimal value) for accurate monetary values
            amount = float(input('Enter amount: '))
            
            # Prompts for the category, which remains as a string
            category = input('Enter category: ')
            
            # Calls `add_expense()` with the given amount and category, adding it to the `expenses` list
            add_expense(expenses, amount, category)

        # If user selects option '2', all expenses are printed
        elif choice == '2':
            # Outputs a header for readability, then calls `print_expenses()` to display each expense entry in `expenses`
            print('\nAll Expenses:')
            print_expenses(expenses)
    
        # If user selects option '3', total expenses are calculated and printed
        elif choice == '3':
            # Calls `total_expenses()`, which calculates the sum of all 'amount' values in `expenses`, and displays it
            print('\nTotal Expenses: ', total_expenses(expenses))
    
        # If user selects option '4', they can filter expenses by a specific category
        elif choice == '4':
            # Prompts for a category to filter by, e.g., "Food", "Transport"
            category = input('Enter category to filter: ')
            
            # Calls `filter_expenses_by_category()` with the input category to get expenses that match the category
            # `expenses_from_category` is a filter object, an iterable containing only the filtered expenses
            print(f'\nExpenses for {category}:')
            expenses_from_category = filter_expenses_by_category(expenses, category)
            
            # `print_expenses()` takes any iterable, so it can display filtered expenses directly
            print_expenses(expenses_from_category)

        # If user selects option '5', the program will exit
        elif choice == '5':
            # Outputs exit message, then `break` terminates the infinite loop, ending the program
            print('Exiting the program.')
            break

# Runs the main function to start the program
# This check ensures that the program only runs if executed as the main file, and not if it's imported as a module
if __name__ == "__main__":
    main()

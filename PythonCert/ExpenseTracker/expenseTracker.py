# main.py

# Function to add an expense to the list
def add_expense(expenses, amount, category):
    # `expenses` is a list that dynamically expands with each new entry, storing all expense data
    # Each expense entry is a dictionary with key-value pairs {'amount': amount, 'category': category}
    # Dictionaries provide structured data storage, linking `amount` and `category` for each expense
    expenses.append({'amount': amount, 'category': category})  # append() method adds this dictionary to `expenses`

# Function to print all expenses in a readable format
def print_expenses(expenses):
    # A `for` loop is used to iterate over each item in `expenses`
    # Loops like `for` allow repeated actions, here looping over each dictionary within the list
    for expense in expenses:
        # Using f-string formatting to display values dynamically in a readable format
        # `{expense["amount"]}` and `{expense["category"]}` insert the respective dictionary values
        # f-strings provide a way to embed expressions directly within strings
        print(f'Amount: {expense["amount"]}, Category: {expense["category"]}')

# Function to calculate the total of all expenses
def total_expenses(expenses):
    # `map()` applies a function to each item in the `expenses` list, here extracting 'amount' from each dictionary
    # The lambda function is an anonymous (inline) function that accesses `amount` in each dictionary
    # `sum()` then accumulates all the amounts, calculating the total sum of expenses
    # Lambda functions provide a quick way to apply small, one-time logic, ideal for short operations like this
    return sum(map(lambda expense: expense['amount'], expenses))

# Function to filter expenses by a specific category
def filter_expenses_by_category(expenses, category):
    # `filter()` returns only items where the lambda function’s condition is True
    # The lambda function checks if `expense['category']` matches the input `category`
    # This returns a filter object, an iterable with only expenses matching the category
    return filter(lambda expense: expense['category'] == category, expenses)

# Main function to execute the program logic
def main():
    # Initializes `expenses` as an empty list to store all added expenses
    expenses = []
    
    # Infinite loop that continually displays options to the user until they choose to exit
    # `while True` creates a loop that will keep running, controlled by the user's input
    while True:
        # Displays the program menu options; `\n` creates a newline for readability
        print('\nExpense Tracker')
        print('1. Add an expense')
        print('2. List all expenses')
        print('3. Show total expenses')
        print('4. Filter expenses by category')
        print('5. Exit')
        
        # Captures user input as a string; `choice` is used to determine which option is chosen
        # `input()` captures user input, always as a string; necessary conversions will follow based on context
        choice = input('Enter your choice: ')
        
        # Using conditional logic to execute different actions based on user choice
        # `if-elif-else` enables branching logic, allowing specific code to run depending on `choice`
        
        if choice == '1':  # If the user chooses to add an expense
            # Prompts the user for `amount` and `category`, converting `amount` to a float for decimal values
            # float(input(...)) converts the input to a float for monetary precision
            amount = float(input('Enter amount: '))
            category = input('Enter category: ')  # Category remains a string
            
            # Calls `add_expense()` with `amount` and `category`, adding a new dictionary to `expenses`
            add_expense(expenses, amount, category)

        elif choice == '2':  # If the user chooses to list all expenses
            # Outputs a header for readability, then calls `print_expenses()` to display each entry in `expenses`
            print('\nAll Expenses:')
            print_expenses(expenses)
    
        elif choice == '3':  # If the user chooses to show the total of all expenses
            # Calls `total_expenses()` to calculate the total of all `amount` values, and displays it
            print('\nTotal Expenses: ', total_expenses(expenses))
    
        elif choice == '4':  # If the user chooses to filter expenses by category
            # Prompts the user for a category, then calls `filter_expenses_by_category()` to find matching entries
            category = input('Enter category to filter: ')
            
            # `filter_expenses_by_category()` returns an iterable filter object of only matching items
            # `print_expenses()` takes any iterable, so it can display the filtered expenses directly
            print(f'\nExpenses for {category}:')
            expenses_from_category = filter_expenses_by_category(expenses, category)
            print_expenses(expenses_from_category)

        elif choice == '5':  # If the user chooses to exit the program
            # Outputs exit message, then `break` terminates the infinite loop, ending the program
            print('Exiting the program.')
            break

# This conditional check ensures the program only runs if executed directly, not if imported as a module
# `if __name__ == "__main__":` is a common Python pattern to control execution of standalone scripts
if __name__ == "__main__":
    main()

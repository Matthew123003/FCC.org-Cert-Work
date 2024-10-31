class Category:
    # `class` declares a new class named `Category`, which represents a budget category.

    def __init__(self, name):
        # `__init__` is a special method in Python known as the constructor.
        # It initializes new objects with attributes when they're created.
        
        self.name = name
        # `self.name` is an instance variable set to the `name` argument passed when creating a `Category`.

        self.ledger = []
        # `self.ledger` initializes an empty list to store each transaction as a dictionary.

    def deposit(self, amount, description=""):
        # `deposit` method takes `amount` and `description` (optional with a default empty string).
        
        self.ledger.append({"amount": amount, "description": description})
        # Appends a dictionary with `amount` and `description` to `self.ledger`.

    def withdraw(self, amount, description=""):
        # `withdraw` takes `amount` and an optional `description`.
        
        if self.check_funds(amount):
            # `if` checks if there are enough funds by calling `check_funds`.
            
            self.ledger.append({"amount": -amount, "description": description})
            # Adds a dictionary entry with the negative `amount` to `self.ledger`, marking it as a withdrawal.
            
            return True
            # Returns `True` to indicate the withdrawal was successful.
            
        return False
        # If funds aren't sufficient, returns `False`.

    def get_balance(self):
        # `get_balance` calculates the current balance of the category.
        
        return sum(item["amount"] for item in self.ledger)
        # Uses `sum` with a generator expression to add up all `amount`s in `self.ledger` and returns the balance.

    def transfer(self, amount, category):
        # `transfer` allows transferring `amount` from one `Category` to another.
        
        if self.check_funds(amount):
            # Checks if there are enough funds for the transfer.
            
            self.withdraw(amount, f"Transfer to {category.name}")
            # Calls `withdraw` with a description that includes the destination category’s `name`.
            
            category.deposit(amount, f"Transfer from {self.name}")
            # Calls `deposit` on the target category with a description indicating the source.
            
            return True
            # Returns `True` to indicate the transfer succeeded.
            
        return False
        # Returns `False` if there aren’t enough funds.

    def check_funds(self, amount):
        # `check_funds` checks if the current balance is sufficient for a transaction.
        
        return amount <= self.get_balance()
        # Compares `amount` to `get_balance()` and returns `True` if there are enough funds.

    def __str__(self):
        # `__str__` defines the string representation of the `Category`.
        
        title = f"{self.name:*^30}\n"
        # `f"{self.name:*^30}"` centers `self.name` within a 30-character width, padded with `*`, and adds a newline.

        items = ""
        # `items` string will accumulate formatted entries from `self.ledger`.
        
        for item in self.ledger:
            # Loops over each `item` (a dictionary) in `self.ledger`.
            
            description = f"{item['description'][:23]:23}"
            # Limits `description` to the first 23 characters to fit the format, using slicing and f-string formatting.
            
            amount = f"{item['amount']:.2f}".rjust(7)
            # `amount` is right-justified to 7 characters, formatted to two decimal places.
            
            items += f"{description}{amount}\n"
            # Adds each formatted line to `items`.

        total = f"Total: {self.get_balance():.2f}"
        # `total` adds the final balance in a string formatted to two decimal places.

        return title + items + total
        # Returns the formatted category with a title, each ledger entry, and the total.

        
def create_spend_chart(categories):
    # `create_spend_chart` creates a bar chart showing spending by category.
    
    # Calculate total and percentages spent
    total_spent = 0
    # Initializes `total_spent` to zero for summing category expenditures.
    
    spent_per_category = []
    # Initializes an empty list to store spending per category.

    for category in categories:
        # Loops through each `category` in `categories`.
        
        spent = sum(-item["amount"] for item in category.ledger if item["amount"] < 0)
        # Sums negative values in `category.ledger`, representing all withdrawals, into `spent`.
        
        spent_per_category.append(spent)
        # Appends `spent` for the current category to `spent_per_category`.
        
        total_spent += spent
        # Adds the current `spent` amount to `total_spent` for calculating percentages.

    spent_percentage = [(spend / total_spent) * 100 for spend in spent_per_category]
    # List comprehension divides each `spend` by `total_spent` and multiplies by 100 for the percentage.

    # Build the chart
    chart = "Percentage spent by category\n"
    # Initializes `chart` string with a title.

    for i in range(100, -1, -10):
        # Loops downward from 100 to 0, by tens, for the y-axis.
        
        chart += f"{i:>3}| "
        # Adds the y-axis value (`i`) right-justified to 3 spaces, followed by a vertical bar and space.
        
        for percent in spent_percentage:
            chart += "o  " if percent >= i else "   "
            # Adds `"o  "` if `percent` is >= `i` (indicating bar height), otherwise spaces `"   "`.
        
        chart += "\n"
        # Adds a newline to separate each y-axis row.

    chart += "    -" + "---" * len(categories) + "\n"
    # Adds the horizontal line at the bottom. `"    -"` aligns it with the y-axis, and `"---"` scales with categories.

    # Add category names at the bottom
    max_len = max(len(category.name) for category in categories)
    # `max_len` holds the longest category name length for aligning name letters vertically.

    names = [category.name.ljust(max_len) for category in categories]
    # Pads each category name with spaces up to `max_len` to align columns.

    for i in range(max_len):
        # Iterates over each character position (column) from top to bottom.

        chart += "     "
        # Adds padding for alignment with the y-axis and chart bars.

        for name in names:
            chart += name[i] + "  "
            # Adds the `i`-th character from each `name` and spaces to align vertically.
        
        chart += "\n"
        # Newline after each row of characters for the vertical label alignment.

    return chart.rstrip("\n")
    # `chart.rstrip("\n")` removes the trailing newline before returning `chart`.


# Classes and Objects: Defines a Category class to manage budgeting data and methods for interaction.
# Dictionary Data Structure: Each ledger entry is a dictionary, which allows storing related data (amount and description) together.
# f-strings and String Formatting: Used for neatly formatting numbers and strings.
# Iteration: For-loops simplify repetitive actions, such as summing values and constructing parts of the chart.
# List Comprehensions: Provides compact ways to process lists, such as calculating percentages of each category’s spending.
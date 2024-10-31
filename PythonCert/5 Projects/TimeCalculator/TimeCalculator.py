def add_time(start, duration, day_of_week=None):
    # `def` defines a function named `add_time` that takes three parameters: `start`, `duration`, and an optional `day_of_week`.
    # `day_of_week=None` means if no day of the week is provided, it defaults to `None`.

    # Split the start time into hours, minutes, and period (AM/PM)
    start_time, period = start.split()
    # `split()` divides the `start` string into a list of two parts: time and AM/PM period. These are assigned to `start_time` and `period`.

    start_hour, start_minute = map(int, start_time.split(':'))
    # `start_time.split(':')` splits `start_time` by the colon into hour and minute parts.
    # `map(int, ...)` applies `int()` to each part to convert them to integers. `start_hour` and `start_minute` store these values.

    # Split the duration into hours and minutes
    duration_hour, duration_minute = map(int, duration.split(':'))
    # Similarly, splits `duration` into hours and minutes, converts them to integers, and stores them in `duration_hour` and `duration_minute`.

    # Convert start time to 24-hour format for easier manipulation
    if period == "PM":
        start_hour += 12 if start_hour != 12 else 0
        # Checks if `period` is PM, indicating afternoon or evening.
        # In 24-hour time, PM hours (except 12 PM) need 12 added for correct conversion.
        # `+= 12 if start_hour != 12 else 0` means if the hour isn't 12 (noon), add 12; otherwise, leave it as 12.

    elif start_hour == 12:  # Midnight edge case
        start_hour = 0
        # Handles the midnight case by setting `start_hour` to 0 (24-hour format for midnight).

    # Calculate the final minutes and carry over to hours if necessary
    end_minute = start_minute + duration_minute
    # Adds `duration_minute` to `start_minute` to get the total final minutes in `end_minute`.

    extra_hours = end_minute // 60
    # `//` is the floor division operator, which divides `end_minute` by 60 and returns the integer result.
    # This value, `extra_hours`, represents full hours carried over from `end_minute`.

    end_minute %= 60
    # `%=` is the modulus assignment operator, which finds the remainder when `end_minute` is divided by 60.
    # This updates `end_minute` to show only the minutes remaining after carrying over full hours.

    # Calculate the final hours and days elapsed
    end_hour = start_hour + duration_hour + extra_hours
    # `end_hour` adds `start_hour`, `duration_hour`, and `extra_hours` to get the total hours.

    days_later = end_hour // 24
    # `days_later` is calculated by integer-dividing `end_hour` by 24 to count how many full days have passed.

    end_hour %= 24
    # `end_hour %= 24` limits `end_hour` to values within 0–23, since each 24 hours loops back to a new day.

    # Convert back to 12-hour format
    end_period = "AM" if end_hour < 12 else "PM"
    # Sets `end_period` to "AM" if `end_hour` is less than 12, otherwise to "PM".

    if end_hour == 0:
        end_hour = 12
        # 0 in 24-hour time is midnight, which is represented as 12 in 12-hour format.

    elif end_hour > 12:
        end_hour -= 12
        # For hours over 12, subtracting 12 converts `end_hour` into the correct 12-hour format.

    # Format the minutes to always display two digits
    end_minute = f"{end_minute:02}"
    # `f"{end_minute:02}"` uses an f-string to format `end_minute` as a two-digit number, adding a leading 0 if needed.

    # Determine the final day of the week if provided
    if day_of_week:
        # This `if` condition checks if `day_of_week` was provided (is not None).

        days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
        # Creates a list, `days`, with the days of the week for reference.

        day_index = days.index(day_of_week.capitalize())
        # `day_of_week.capitalize()` makes sure `day_of_week` is case insensitive (e.g., 'monday' becomes 'Monday').
        # `days.index()` finds the position of this day in the `days` list.

        end_day = days[(day_index + days_later) % 7]
        # `(day_index + days_later) % 7` shifts `day_index` forward by `days_later`, wrapping around with `% 7`.
        # `end_day` will be the correct day after accounting for any days passed.

        day_string = f", {end_day}"
        # `day_string` adds a comma and the new `end_day` to display the final day if provided.

    else:
        day_string = ""
        # If `day_of_week` is not provided, `day_string` is an empty string.

    # Determine if it’s the next day or multiple days later
    if days_later == 1:
        day_count_string = " (next day)"
        # If exactly 1 day has passed, `day_count_string` is set to "(next day)".

    elif days_later > 1:
        day_count_string = f" ({days_later} days later)"
        # If more than 1 day has passed, `day_count_string` reflects the number of days later.

    else:
        day_count_string = ""
        # If no days have passed, `day_count_string` is an empty string.

    # Compile the final time string
    result = f"{end_hour}:{end_minute} {end_period}{day_string}{day_count_string}"
    # `result` is a formatted string combining `end_hour`, `end_minute`, `end_period`, `day_string`, and `day_count_string`.
    # This forms the complete result with final time, period, optional day, and day count.

    return result
    # `return` sends `result` back to where the function was called.

# Test example
print(add_time('3:30 PM', '2:12'))            
# `print()` outputs the arranged time after adding the duration without a day of the week.

print(add_time('11:55 AM', '3:12'))           
# Tests adding 3 hours and 12 minutes to 11:55 AM.

print(add_time('8:16 PM', '466:02', 'Tuesday')) 
# This tests adding a large duration to check day rollover and final day calculation.

print(add_time('2:59 AM', '24:00', 'Saturday')) 
# Tests adding exactly 24 hours to see if the function correctly identifies the next day.


# Function Definition (def): In Python, functions are defined with def, followed by the function name and parameters in parentheses.
# String Formatting (f-strings): Python uses f-strings (f"{value}") for inline variable substitution and formatting. Here, they simplify the construction of the final time string.
# Modulus and Floor Division (% and //): % gives the remainder, and // provides integer division, which are useful for calculating time carryover and days elapsed.
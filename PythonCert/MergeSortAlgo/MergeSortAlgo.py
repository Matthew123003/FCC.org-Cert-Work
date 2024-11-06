def merge_sort(array):
    """
    Sorts an array in ascending order using the merge sort algorithm, a divide-and-conquer approach.

    Parameters:
        array (list): A list of numbers to be sorted.

    Returns:
        None: The input array is modified in-place, and elements are sorted in ascending order.
    """

    # Recursive Divide-and-Conquer Strategy:
    # The merge_sort function applies a divide-and-conquer approach by continuously splitting
    # the array in half until each subarray contains only a single element (or is empty).
    # This recursive approach allows it to handle larger data sets efficiently.

    # Base Case (Line 7): 
    # If the array has one or zero elements, it's already sorted, so no further action is required.
    # The function checks if the array length is less than or equal to 1 and simply returns in these cases.
    if len(array) <= 1:
        return  # Exit the function if array is empty or contains only one element.
    
    # Splitting the Array (Lines 11-13):
    # Step 1: Divide the array into two halves by calculating the midpoint index.
    # The midpoint is calculated as len(array) // 2, which divides the array into two halves.
    # Using list slicing (array[:middle_point] and array[middle_point:]), we define the left and right parts.
    middle_point = len(array) // 2
    left_part = array[:middle_point]  # Left half includes elements from the start to the middle.
    right_part = array[middle_point:]  # Right half includes elements from the middle to the end.

    # Recursive Sorting of Halves (Lines 15-16):
    # Step 2: Recursively split the left and right halves until each subarray reaches the base case.
    # The function calls itself on left_part and right_part, which recursively splits these parts
    # further until each subarray contains only one or no element, thus sorted by definition.
    merge_sort(left_part)  # Recursively apply merge sort to the left half.
    merge_sort(right_part)  # Recursively apply merge sort to the right half.

    # Merging Process (Lines 19-30):
    # Step 3: Merge the two sorted halves back into the original array in a sorted order.
    # After reaching the smallest subarrays, the merge step starts, where left_part and right_part
    # are merged in a sorted manner back into the main array.

    # Indexes:
    # left_array_index and right_array_index track the current position in the left_part and right_part arrays, respectively.
    # sorted_index tracks the position in the main array where the next smallest element should be placed.
    left_array_index = 0  # Initialize index for the left half.
    right_array_index = 0  # Initialize index for the right half.
    sorted_index = 0  # Initialize index for the main array, to place sorted elements.

    # Comparison and Assignment (Line 24):
    # Merge the left and right halves by comparing elements at each index.
    # The while loop compares elements from the left and right subarrays.
    # If the current element in the left half is smaller, place it in the array.
    # The smaller element is copied into the main array, and the corresponding index
    # (left_array_index or right_array_index) is incremented.
    while left_array_index < len(left_part) and right_array_index < len(right_part):
        if left_part[left_array_index] < right_part[right_array_index]:
            array[sorted_index] = left_part[left_array_index]
            left_array_index += 1  # Move to the next element in the left half
        else:
            array[sorted_index] = right_part[right_array_index]
            right_array_index += 1  # Move to the next element in the right half
        sorted_index += 1  # Move to the next position in the sorted main array

    # Remaining Elements in Left/Right Subarrays (Lines 32-37):
    # After exiting the main while loop, one of the subarrays may still contain unprocessed elements.
    # These elements are already sorted within their subarray, so they’re added directly to the main array.
    while left_array_index < len(left_part):
        array[sorted_index] = left_part[left_array_index]
        left_array_index += 1  # Move to the next element in the left half
        sorted_index += 1  # Move to the next position in the sorted main array

    while right_array_index < len(right_part):
        array[sorted_index] = right_part[right_array_index]
        right_array_index += 1  # Move to the next element in the right half
        sorted_index += 1  # Move to the next position in the sorted main array

# Overall Complexity:
# - Time Complexity: Merge sort has an average and worst-case time complexity of O(n log n),
#   due to the recursive division and merging of subarrays.
# - Space Complexity: Although it modifies the array in place, the function uses additional space for
#   left_part and right_part during recursive calls, resulting in a space complexity of O(n).

# Entry point of the script
if __name__ == '__main__':
    # Define an unsorted array of numbers
    numbers = [4, 10, 6, 14, 2, 1, 8, 5]
    print('Unsorted array:')
    print(numbers)  # Display the unsorted array

    # Call merge_sort to sort the array in-place
    merge_sort(numbers)  

    # Print the sorted array after merge_sort completes
    print('Sorted array:')
    print(numbers)

import java.util.*;

public class Hackrank {
    /*
     * Complete the 'getMergedIntervals' function below.
     *
     * The function is expected to return a 2D_INTEGER_ARRAY.
     * The function accepts 2D_INTEGER_ARRAY intervals as parameter.
     */

    public static List<List<Integer>> getMergedIntervals(List<List<Integer>> intervals) {
        // If there are no intervals, return an empty list
        if (intervals == null || intervals.isEmpty()) {
            return new ArrayList<>();
        }

        // Convert the list of lists into an array of arrays for easier sorting
        int[][] intervalArray = intervals.stream()
                                         .map(list -> new int[]{list.get(0), list.get(1)})
                                         .toArray(int[][]::new);

        // Sort intervals by their start times
        Arrays.sort(intervalArray, (a, b) -> Integer.compare(a[0], b[0]));

        // Create a list to hold the merged intervals
        List<List<Integer>> merged = new ArrayList<>();

        // Initialize the first interval as the current interval to merge
        int[] current = intervalArray[0];

        for (int i = 1; i < intervalArray.length; i++) {
            int[] next = intervalArray[i];

            // Check if the current interval overlaps with the next one
            if (current[1] >= next[0]) {
                // Merge the intervals by extending the end of the current interval
                current[1] = Math.max(current[1], next[1]);
            } else {
                // Add the current interval to the merged list
                merged.add(Arrays.asList(current[0], current[1]));

                // Update the current interval to the next one
                current = next;
            }
        }

        // Add the last interval
        merged.add(Arrays.asList(current[0], current[1]));

        return merged;
    }

    public static int balancedSum(List<Integer> arr) {
        // Calculate the total sum of the array
        int totalSum = 0;
        for (int num : arr) {
            totalSum += num;
        }

        // Initialize left sum as 0
        int leftSum = 0;

        // Iterate through the array to find the pivot
        for (int i = 0; i < arr.size(); i++) {
            // The right sum can be calculated as totalSum - leftSum - arr[i]
            int rightSum = totalSum - leftSum - arr.get(i);

            // Check if left sum equals right sum
            if (leftSum == rightSum) {
                return i;
            }

            // Update left sum by adding the current element
            leftSum += arr.get(i);
        }

        // If no pivot is found, return -1 (though problem assumes one always exists)
        return -1;
    }

    public static void main(String[] args) {
        // Example usage
        List<Integer> arr = Arrays.asList(1, 7, 3, 6, 5, 6);
        System.out.println("Pivot index: " + balancedSum(arr)); // Output: 3

        arr = Arrays.asList(1, 2, 3);
        System.out.println("Pivot index: " + balancedSum(arr)); // Output: -1 (no pivot exists)

        arr = Arrays.asList(2, 1, -1);
        System.out.println("Pivot index: " + balancedSum(arr)); // Output: 0
    }

}

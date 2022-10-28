public class Solution {
    public void Rotate(int[][] matrix) {
        
        void swap(int r, int c, int[] arr1, int[] arr2) {
            int temp = arr1[r];
            arr1[r] = arr2[c];
            arr2[c] = temp;
        }
        
        void reverse(int [] arr) {
            for (int l = 0, r = arr.Length - 1; l < r; l++, r--) {
                int temp = arr[l];
                arr[l] = arr[r];
                arr[r] = temp;
            }
        }
        
        for (int r = 0; r < matrix.Length; r++) {
            for (int c = r; c < matrix[0].Length; c++) {
                swap(r, c, matrix[c], matrix[r]);
            }
        }
        
        foreach (int[] arr in matrix) {
            reverse(arr);
        }
    }
}
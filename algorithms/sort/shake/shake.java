import java.util.Arrays;
import java.util.Scanner;


class Shake {
    public static void main(String [] args) {

        Scanner in = new Scanner(System.in);

        System.out.print("Length: ");

        int length = in.nextInt();

        int[] array = new int[length];

        for (int i = 0; i < length; i++) {
            System.out.printf("Item %d: ", i);
            array[i] = in.nextInt();
        }

        System.out.println("Source array " + Arrays.toString(array));

        int left = 0;
        int right = length -1;

        do {

            for (int i = left; i < right; i++) {
                if (array[i] > array[i + 1]) {
                    int tmp = array[i];
                    array[i] = array[i + 1];
                    array[i + 1] = tmp;
                }
            }
            right--;

            for (int i = right; left < i; i++) {
                if (array[i] < array[i -1]) {
                    int tmp = array[i];
                    array[i] = array[i - 1];
                    array[i - 1] = tmp;
                }
            }
            left++;

        } while (left < right);

        System.out.println("Sorted array " + Arrays.toString(array));

        in.close();
    }   
}
import java.util.Arrays;
import java.util.Scanner;


class Insertion {
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

        for (int i = 0; i < length; i++) {
            int key = array[i];
            int j = i - 1;

            while (j >= 0 && array[j] > key) {
                array[j + 1] = array[j];
                j = j - 1;
            }

            array[j + 1] = key;
        }

        System.out.println("Sorted array " + Arrays.toString(array));

        in.close();
    }   
}

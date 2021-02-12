import java.util.Arrays;
import java.util.Scanner;


class Bubble {
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

        boolean loop = true;

        while (loop) {
            loop = false;
            for (int i = 0; i < length - 1; i++) {
                if (array[i] > array[i + 1]) {
                    loop = true;
                    int tmp = array[i];
                    array[i] = array[i + 1];
                    array[i + 1] = tmp;
                }
            }
        }

        System.out.println("Sorted array " + Arrays.toString(array));

        in.close();
    }
}
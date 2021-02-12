#include <stdio.h>


void print_array(char * pre, int array[], int length)
{

    printf("%s[ ", pre);

    for (int i = 0; i < length; i++) {
        if (i != length - 1)
        {
            printf("%d,", array[i]);
        }
        else
        {
            printf("%d ]\n", array[i]);
        }
    }
}

int main()
{

    int length;

    printf("Length: ");
    scanf("%d", &length);

    int array[length];

    for (int i = 0; i < length; i++)
    {
        printf("Item %d: ", i);
        scanf("%d", &array[i]);
    }

    print_array("Source array: ", array, length);

    int left = 0;
    int right = length - 1;

    do
    {

        for (int i = left; i < right; i++)
        {
            if (array[i] > array[i + 1])
            {
                int tmp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = tmp;
            }
        }
        right--;

        for (int i = right; left < i; i--)
        {
            if (array[i] < array[i - 1])
            {
                int tmp = array[i];
                array[i] = array[i - 1];
                array[i - 1] = tmp;
            }
        }
        left++;

    } while (left < right);
    

    print_array("Sorted array: ", array, length);

    return 0;
}
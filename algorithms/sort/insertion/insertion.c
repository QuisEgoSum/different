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

    for (int i = 0; i < length; i++)
    {
        int key = array[i];
        int j = i - 1;

        while (j >= 0 && array[j] > key)
        {
            array[j + 1] = array[j];
            j = j - 1;
        }
        
        array[j + 1] = key;
    }
    
    print_array("Sorted array: ", array, length);

    return 0;
}
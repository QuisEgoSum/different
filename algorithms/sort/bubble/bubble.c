#include <stdio.h>
#include <stdbool.h>


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

    bool loop = true;

    while (loop)
    {
        loop = false;
        for (int i = 0; i < length - 1; i++)
        {
            if (array[i] > array[i + 1])
            {
                loop = true;
                int tmp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = tmp;
            }
        }
    }
    
    print_array("Sorted array: ", array, length);

    return 0;
}


def main():

    length = int(input('Length: '))
    array = [None] * length

    for i in range(length):
        array[i] = int(input('Item {}: '.format(i)))

    print('Source array: ', array)

    loop = True

    while loop:
        loop = False
        for i in range(length - 1):
            if (array[i] > array[i + 1]):
                loop = True
                array[i], array[i + 1] = array[i + 1], array[i]

    print('Sorted array: ', array)


if __name__ == "__main__":
    main()


def main():
    lenght = int(input('Lenght: '))

    array = [None] * lenght

    for i in range(lenght):
        array[i] = int(input('Item {}: '.format(i)))

    print('Source array: ', array)

    for i in range(lenght):
        key = array[i]
        j = i - 1

        while j >= 0 and array[j] > key:
            array[j + 1] = array[j]
            j = j - 1
        
        array[j + 1] = key

    print('Sorted array: ', array)


if __name__ == "__main__":
    main()
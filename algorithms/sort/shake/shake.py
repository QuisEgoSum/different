

def main():
    length = int(input('Length: '))
    array = [None] * length

    for i in range(length):
        array[i] = int(input('Item {}: '.format(i)))

    print('Source array: ', array)

    left = 0
    right = length - 1

    while left < right:

        for i in range(left, right, 1):
            if array[i] > array[i + 1]:
                array[i], array[i + 1] = array[i + 1], array[i]

        right -= 1

        for i in range(right, left, -1):
            if (array[i] < array[i - 1]):
                array[i], array[i - 1] = array[i - 1], array[i]
        
        left += 1

    print('Sorted array: ', array)


if __name__ == "__main__":
    main()
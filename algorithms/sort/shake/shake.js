const readline = require('readline')
const rl = readline.createInterface({input: process.stdin, output: process.stdout})


const input = prompt => new Promise(resolve => rl.question(prompt, resolve))

async function main() {

    const length = await input('Length: ')

    const array = new Array(length)

    for (let i = 0; i < length; i++)
        array[i] = Number(await input(`Item ${i}: `))

    console.log('Source array', array)

    let left = 0, right = length - 1

    do {

        for (let i = left; i < right; i++) {
            if (array[i] > array[i + 1]) {
                ;[array[i], array[i + 1]] = [array[i + 1], array[i]]
            }
        }
        right--

        for (let i = right; left < i; i--) {
            if (array[i] < array[i - 1]) {
                ;[array[i], array[i - 1]] = [array[i - 1], array[i]]
            }
        }
        left++

    } while(left < right)

    console.log('Sorted array', array)

    process.exit(0)
}

main()
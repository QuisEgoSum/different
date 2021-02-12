const readline = require('readline')
const rl = readline.createInterface({input: process.stdin, output: process.stdout})


const input = prompt => new Promise(resolve => rl.question(prompt, resolve))

async function main() {

    const length = await input('Length: ')

    const array = new Array(length)

    for (let i = 0; i < length; i++)
        array[i] = Number(await input(`Item ${i}: `))

    console.log('Source array', array)

    for (let i = 0; i < length; i++) {
        const key = array[i]
        let j = i - 1

        while(j >= 0 && array[j] > key) {
            array[j + 1] = array[j]
            j = j - 1
        }

        array[j + 1] = key
    }

    console.log('Sorted array', array)

    process.exit(0)
}

main()
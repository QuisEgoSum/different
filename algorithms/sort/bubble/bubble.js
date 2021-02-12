const readline = require('readline')
const rl = readline.createInterface({input: process.stdin, output: process.stdout})


const input = prompt => new Promise(resolve => rl.question(prompt, resolve))

async function main() {

    const length = Number(await input('Length: '))

    const array = new Array(length)

    for (let i = 0; i < length; i++)
        array[i] = Number(await input(`Item ${i}: `))

    console.log('Source array', array)

    let loop = true

    while(loop) {
        loop = false
        for (let i = 0; i < length - 1; i++) {
            if (array[i] > array[i + 1]) {
                loop = true
                ;[array[i], array[i + 1]] = [array[i + 1], array[i]]
            }
        }
    }

    console.log('Sorted array', array)

    process.exit(0)
}


main()
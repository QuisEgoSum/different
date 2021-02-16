

function equalDeepPartial(expectation, actual) {

    if (typeof expectation !== typeof actual)
        return false

    if (typeof expectation !== 'object') {
        if (typeof expectation === 'number' && expectation !== expectation)
            return actual !== actual

        return expectation === actual
    }

    if (typeof expectation !== 'object')
        return actual === actual

    if (!expectation || !actual)
        return expectation === actual

    if (Array.isArray(expectation) || Array.isArray(actual)) {
        if (Array.isArray(expectation) && Array.isArray(actual)) {

            const expectationCopy = [...expectation]
            const actualCopy = [...actual]

            for (let ie = 0; ie < expectationCopy.length; ie++) {

                let found = false

                for (let ia = 0; ia < actualCopy.length; ia++) {
                    if (equalDeepPartial(expectationCopy[ie], actualCopy[ia])) {
                        found = true
                        actualCopy.splice(ia, 1)
                        break
                    }
                }

                if (!found)
                    return false

                expectationCopy.splice(ie, 1)
                ie--
            }

            return true

        } else {
            return false
        }
    }

    const expectationKeys = Object.keys(expectation)

    for (let i = 0; i < expectationKeys.length; i++) {

        const curKey = expectationKeys[i]

        if (!Object.prototype.hasOwnProperty.call(actual, curKey))
            return false

        if (!equalDeepPartial(expectation[curKey], actual[curKey]))
            return false
    }

    return true
}


module.exports = equalDeepPartial
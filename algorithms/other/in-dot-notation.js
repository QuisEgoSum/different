

function inDotNotation(targetObject, propertyName = '') {

    let object = {...targetObject}

    if (propertyName)
        propertyName += '.'

    const entries = Object.entries(object)

    for (let i = 0; i < entries.length; i++) {

        if (entries[i][1] && typeof entries[i][1] === 'object' && !Array.isArray(entries[i][1])) {
            object = {...object, ...inDotNotation(entries[i][1], propertyName + entries[i][0])}
            delete object[entries[i][0]]
        } else if (propertyName) {
            object[propertyName + entries[i][0]] = entries[i][1]
            delete object[entries[i][0]]
        }
    }

    return object
}

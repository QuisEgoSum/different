

function copyPropertiesDeep(source, target) {
    for (const [key, value] of Object.entries(source)) {
        if (typeof value === 'object' && !Array.isArray(value)) {
            if (key in target) {
                if (typeof target[key] === 'object' && !Array.isArray(target[key])) {
                    replaceDeep(source[key], target[key])
                } else {
                    target[key] = source[key]
                }
            }
        } else {
            target[key] = value
        }
    }

    return target
}


module.exports = copyPropertiesDeep
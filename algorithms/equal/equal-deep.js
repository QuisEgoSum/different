

function equalDeep(obj1, obj2) {

    if (typeof obj1 !== typeof obj2)
        return false

    if (typeof obj1 === 'number' && obj1 !== obj1)//NaN
        return obj2 !== obj2

    if (typeof obj1 !== 'object')
        return obj1 === obj2

    if (Array.isArray(obj1) || Array.isArray(obj2)) {
        if (Array.isArray(obj1) && Array.isArray(obj2)) {

            if (obj1.length !== obj2.length)
                return false

            for (let i = 0; i < obj1.length; i++)
                if (!equalDeep(obj1[i], obj2[i]))
                    return false

            return true

        } else {
            return false
        }
    }

    if (!obj1 || !obj2)//null
        return obj1 === obj2

    const ent1 = Object.entries(obj1)
    const ent2 = Object.entries(obj2)

    if (ent1.length !== ent2.length)
        return false

    for (let i1 = 0; i1 < ent1.length; i1++) {
        let found = false
        for (let i2 = 0; i2 < ent2.length; i2++) {
            if (ent1[i1][0] !== ent2[i2][0])
                continue
            
            found = true

            if (!equalDeep(ent1[i1][1], ent2[i2][1]))
                return false

            ent2.splice(i2, 1)

            break
        }
        if (!found)
            return false
    }

    return true
}


module.exports = equalDeep
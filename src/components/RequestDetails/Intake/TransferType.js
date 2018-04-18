import React from 'react'

export const KindOfHome = (type) => {
    switch (type) {
        case 0:
            return 'Detached House'
            break
        case 1:
            return 'Semi Detached'
            break
        case 2:
            return 'Town House'
            break
        case 3:
            return 'Condo'
            break
    }
}

export const BooleanType = (type) => {
    return type === 1 ? 'Yes' : 'No'
}
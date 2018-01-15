import React from 'react'

export const KindOfHome = (type) => {
    switch (type) {
        case 0:
            return 'Detached House'
            break
        case 1:
            return 'Semi TownHouse'
            break
        case 2:
            return 'Condo Apartment'
            break
        case 3:
            return 'Other Type'
            break
    }
}

export const BooleanType = (type) => {
    return type === 1 ? 'Yes' : 'No'
}
const config = {
    URL: 'http://138.197.143.187:3000/api/v1',
    SECRET_KEY: 'peWseTYsjSLDzZBFYhJb2ouZUxPMAHbR'
};

export const STATUS = {
    DRAFT: 0,
    OPEN: 1,
    CLOSED: 2,
    BID_CLOSED: 3,
}

export const PROFILE = {
    YES: 1,
    NO: 0,
    BUY_NEW_HOME: 0,
    RENEW_MORTGAGE: 1,
    REFINANCE_MORTGAGE: 2,
    SINGLE: 1,
    JOINT: 0,
}

export const PREFERENCE = {
    PROPERTY_TYPE: {
        SINGLE_DETACHED: 0,
        SEMI_DETACHED: 1,
        TOWNHOUSE: 2,
        CONDO: 3
    },
    WHEN_BUY_NEW_HOME: {
        THREE_MONTHS: 0,
        SIX_MONTHS: 1,
        NEXT_YEAR: 2,
    },
    WHEN_REFINANCE: {
        WEEKS: 0,
        A_MONTH: 1,
        THREE_MONTHS: 2,
    },
    INTENDED_PROPERTY: {
        PRIMARY: 0,
        RENTAL: 1,
        BOTH: 2,
    },
    PREFERRED_MORTGAGE_TYPE: {
        VARIABLE: 0,
        FIXED: 1,
    },
    PREFERRED_MORTGAGE_TERM: {
        A_YEAR: 0,
        THREE_YEARS: 1,
        FIVE_YEARS: 2,
    }
}

export const INFO = {
    OCCUPATION_TYPE: {
        FULL_TIME: 0,
        PART_TIME: 1,
        CONTRACT: 2,
        SEASONAL: 3,
        SELF_EMPLOYED: 4,
        RETIRED: 5
    },
    SEX: {
        MALE: 0,
        FEMALE: 1,
    },
    CIVIL_STATUS: {
        MARRIED: 0,
        COMMON_LAW: 1,
        SINGLE: 2,
        SEPARATED: 3,
        DIVORCED: 4,
        WIDOWED: 5
    },
    CANADIAN_CITIZEN: {
        YES: 1,
        NO: 0
    }
}

export default config
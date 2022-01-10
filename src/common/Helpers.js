import {
    EURO_RATE_WITH_USD,
    AMD_RATE_WITH_USD,
    RUBLE_RATE_WITH_USD,
    DEFAULT_CURRENCY,
    CURRENCY_LIST
} from "../store/constant";

export const salaryExchange = (config) => {
    if (!config?.salary || !config?.currency) {
        return 0
    }

    if (config.currency === DEFAULT_CURRENCY) {
        return config.salary
    }
    switch (config.currency) {
        case CURRENCY_LIST.AMD.value: {
            return 1 / AMD_RATE_WITH_USD * config.salary
        }
        case CURRENCY_LIST.Euro.value: {
            return 1 / EURO_RATE_WITH_USD * config.salary
        }
        case CURRENCY_LIST.Ruble.value: {
            return 1 / RUBLE_RATE_WITH_USD * config.salary
        }
        default : {
            return config.salary
        }
    }
}
export const compare = (a, b) => a.key > b.key ? 1 : -1



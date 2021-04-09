import { years } from '../data/yearsData'
import { getTrains } from '../helpers/defineTrainsByYear'

export const useOptions = year => {
    return {
        yearOptions: years.map(year => ({ value: year, text: year })),
        routeOptions: getTrains(year)
            .map(train => ({ value: train.number, text: `${train.number} ${train.route}` }))
            .sort((a, b) => a.value - b.value)
    }
}



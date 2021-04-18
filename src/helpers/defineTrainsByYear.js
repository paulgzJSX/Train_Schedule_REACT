import * as years from '../data/index'

export const getTrains = year => {
    switch (year) {
        case '1980/1981':
            return years._1980
        case '1981/1982':
            return years._1981
        case '1983/1984':
            return years._1983_1984
        case '1989/1990':
            return years._1989_1990
        case '1999/2000':
            return years._1999_2000
        default:
            break;
    }
}

export const getFirstTrain = trains => trains.sort((a, b) => a.number - b.number)[0].number

export const displayStops = train => (
    train.type === 'outbound'
        ? [...train.stations].reverse()
        : train.stations
)

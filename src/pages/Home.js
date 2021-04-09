import { useState } from 'react'
import { EuiSpacer } from '@elastic/eui';
import { Select, Table, TrainHeader } from '../components/index'
import { getTrains, getFirstTrain } from '../helpers/defineTrainsByYear'
import { years } from '../data/yearsData'


const Home = () => {
    const [year, setYear] = useState(years[0]);
    const [trainNumber, setTrainNumber] = useState(getFirstTrain(getTrains(years[0])));
  
    const train = getTrains(year).find(item => item.number === trainNumber)

    return (
        <>
            <Select setYear={setYear} setTrainNumber={setTrainNumber} year={year} />
            <EuiSpacer size='l' style={{ backgroundColor: '#fff' }} />
            <TrainHeader train={train} year={year} />
            <EuiSpacer size='xl' />
            <Table train={train} />
        </>
    )
}

export default Home

import { _1981 } from '../data/1981'
import { getTrains, getFirstTrain } from '../helpers/defineTrainsByYear'
import { EuiFlexGroup, EuiPanel } from '@elastic/eui';
import SelectDropdown from './SelectDropdown';
import { useOptions } from '../hooks/useOptions'

const Select = ({ setYear, setTrainNumber, year }) => {
    const { yearOptions, routeOptions } = useOptions(year)

    const handleYearChange = e => {
        setYear(e.target.value)
        setTrainNumber(getFirstTrain(getTrains(e.target.value)))
    }

    const handleRouteChange = e => setTrainNumber(e.target.value)

    return (
        <EuiPanel style={{ maxWidth: '100%' }}>
            <EuiFlexGroup alignItems='center' justifyContent='flexStart'>
                {['Годы', 'Направление'].map(title =>
                    <SelectDropdown
                        title={title}
                        options={title === 'Годы' ? yearOptions : routeOptions}
                        handleChange={title === 'Годы' ? handleYearChange : handleRouteChange}
                    />)}
            </EuiFlexGroup>
        </EuiPanel>
    )
};

export default Select
import { EuiFormRow, EuiSelect, EuiFlexItem } from '@elastic/eui';
import Tooltip from './Tooltip';

const SelectDropdown = ({ title, options, handleChange }) => {

    const tooltip =
        <Tooltip
            title={title}
            content={title === 'Годы' ? 'Годы действия расписания' : 'Маршрут поезда'}
        />

    return (
        <EuiFlexItem>
            <EuiFormRow
                label={tooltip}
                display="columnCompressed"
            >
                <EuiSelect
                    options={options}
                    onChange={handleChange}
                    compressed
                />
            </EuiFormRow>
        </EuiFlexItem>
    )
}

export default SelectDropdown

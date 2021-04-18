import { EuiBasicTable } from '@elastic/eui';
import { displayStops } from '../helpers/defineTrainsByYear'

const columns = [
    { field: 'station', name: 'Станция' },
    { field: 'arrTime', name: 'Прибытие' },
    { field: 'depTime', name: 'Отправление' },
]

const Table = ({ train }) => {
    return (
        <EuiBasicTable
            items={displayStops(train)}
            rowHeader="station"
            columns={columns}
        />
    );
};

export default Table
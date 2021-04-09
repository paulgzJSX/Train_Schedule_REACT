import { EuiBasicTable } from '@elastic/eui';

const columns = [
    { field: 'station', name: 'Станция' },
    { field: 'arrTime', name: 'Прибытие' },
    { field: 'depTime', name: 'Отправление' },
]

const Table = ({ train }) => {
    return (
        <EuiBasicTable
            items={train.type === 'outbound' ? [...train.stations].reverse() : train.stations}
            rowHeader="station"
            columns={columns}
        />
    );
};

export default Table
import { Document, Page, View, Text, StyleSheet, Font } from '@react-pdf/renderer'

Font.register({
    family: "Roboto",
    src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-medium-webfont.ttf"
});


const styles = StyleSheet.create({
    tableHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        fontSize: 12,
        marginBottom: 20
    },
    tableRow: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        fontSize: 10,
        marginBottom: 10
    }
})

const PDF = ({ train, year }) => {
    const trainStops = train.type === 'outbound' ? [...train.stations].reverse() : train.stations

    return (
        <Document>
            <Page style={{ padding: 60, fontFamily: 'Roboto' }}>
                <View style={{ textAlign: 'center', marginBottom: 20 }}>
                    <Text>Поезд №{train.number} {train.route} {train.title || ''}</Text>
                </View>
                <View style={{ textAlign: 'center', fontSize: 12, marginBottom: 30 }}>
                    <Text>Расписание {year} годов</Text>
                </View>
                <View style={{ width: 400 }}>
                    <View style={styles.tableHeader}>
                        <Text style={{ width: 45 }}>Станция</Text>
                        <Text style={{ width: 10 }}>Прибытие</Text>
                        <Text style={{ width: 10 }}>Отправление</Text>
                    </View>
                    {trainStops.map(stop =>
                        <View style={styles.tableRow}>
                            <Text style={{ width: 45 }}>{stop.station}</Text>
                            <Text style={{ width: 10 }}>{stop.arrTime}</Text>
                            <Text style={{ width: 10 }}>{stop.depTime}</Text>
                        </View>
                    )}
                </View>
            </Page>
        </Document>
    )
}

export default PDF
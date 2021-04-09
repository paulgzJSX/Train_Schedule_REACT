import { EuiText, EuiFlexGroup, EuiFlexItem, EuiButton } from '@elastic/eui';
import { PDFDownloadLink } from '@react-pdf/renderer'
import { PDF } from './index'

const TrainHeader = ({ train, year }) => {
     return (
        <EuiFlexGroup alignItems='center' justifyContent='spaceBetween'>
            <EuiFlexItem>
                <EuiText>
                    <h2>{`№${train.number} ${train.route} ${train.title || ''}`}</h2>
                </EuiText>
            </EuiFlexItem>
            <EuiFlexItem grow={false}>
                <EuiButton>
                    <PDFDownloadLink
                        document={<PDF train={train} year={year} />}
                        fileName={`${train.number} ${train.route}`}
                    >
                        Export to PDF
                    </PDFDownloadLink>
                </EuiButton>
            </EuiFlexItem>
        </EuiFlexGroup>
    )
}

export default TrainHeader

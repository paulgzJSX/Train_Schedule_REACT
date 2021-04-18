import { useEffect, useState } from 'react'
import { EuiText, EuiFlexGroup, EuiFlexItem, EuiButton } from '@elastic/eui';
import { PDFDownloadLink, usePDF } from '@react-pdf/renderer'
import { PDFDoc } from './index'

const TrainHeader = ({ train, year }) => {
    const [instance, updateInstance] = usePDF({ document: <PDFDoc train={train} year={year} /> })

    useEffect(() => {
        updateInstance()
    }, [train])

    return (
        <EuiFlexGroup alignItems='center' justifyContent='spaceBetween'>
            <EuiFlexItem>
                <EuiText>
                    <h2>{`№${train.number} ${train.route} ${train.title || ''}`}</h2>
                </EuiText>
            </EuiFlexItem>
            <EuiFlexItem grow={false}>
                <EuiButton>
                    <a href={instance.url} download={`${train.number} ${train.route}.pdf`}>Download</a>
                    {/* <PDFDownloadLink
                        document={<PDFDoc train={train} year={year} />}
                        fileName={`${train.number} ${train.route}`}
                    >
                        Export to PDF
                    </PDFDownloadLink> */}
                </EuiButton>
            </EuiFlexItem>
        </EuiFlexGroup>
    )
}

export default TrainHeader

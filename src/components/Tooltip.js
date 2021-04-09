import { EuiIcon, EuiToolTip } from '@elastic/eui';

const Tooltip = ({ title, content }) => {
    return (
        <EuiToolTip content={content}>
            <span>
                {title} <EuiIcon type="questionInCircle" color="subdued" />
            </span>
        </EuiToolTip>
    )
}

export default Tooltip

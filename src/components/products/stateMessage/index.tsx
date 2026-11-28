import RetryButton from './retryButton';
import { Box } from './style';

interface StateMessageProps {
    message: string;
    retryLabel?: string;
}

export default function StateMessage({ message, retryLabel }: StateMessageProps) {
    return (
        <Box role={retryLabel ? 'alert' : 'status'}>
            <p>{message}</p>
            {retryLabel && <RetryButton label={retryLabel} />}
        </Box>
    );
}
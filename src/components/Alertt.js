import Alert from '@material-ui/core/Alert';
import Stack from '@material-ui/core/Stack';

function Alertt(props) {
    return (<div>
        <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert severity="info">{props.msg+" Not Yet Active...It is Activate Soon...."}</Alert>
        </Stack>
    </div>);
}

export default Alertt;
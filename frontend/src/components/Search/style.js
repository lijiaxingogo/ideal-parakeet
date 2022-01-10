import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
    Container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 180,
        maxWidth: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        flexDirection: 'column',
    },
    ErrorMsg: {
        marginTop: 10,
    },
}));

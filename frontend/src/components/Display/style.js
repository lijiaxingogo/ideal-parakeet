import { makeStyles } from '@material-ui/core';
export default makeStyles((theme) => ({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    displayBoard: {
        height: 480,
        width: '85%',
        paddingTop: 10,
    },
}));

import { AppBar, Toolbar, Typography } from '@material-ui/core';
import useStyle from './style';
const Header = () => {
    const classes = useStyle();

    return (
        <div>
            <AppBar position="static">
                <Toolbar className={classes.toolbar}>
                    <Typography variant="h4">Pikapika</Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
};
export default Header;

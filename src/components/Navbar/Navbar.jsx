import { AppBar, IconButton, Toolbar, Button, Avatar, useMediaQuery } from '@mui/material';
import { Menu, AccountCircle, Brightness7, Brightness4 } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import useStyles from './styles';

function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery('(max-width:600px)');
  const isAuthenticated = true;

  return (
    <AppBar position="fixed">
      <Toolbar className={classes.toolbar}>
        {
          isMobile && (
            <IconButton
              style={{ outline: 'none' }}
              onClick={() => {}}
              className={classes.menuButton}
              color="inherit"
              edge="start"
            >
              <Menu />
            </IconButton>
          )
        }
        <IconButton color="inherit" sx={{ ml: 1 }} onClick={() => {}}>
          {
            theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />
          }
        </IconButton>
        {
          !isMobile && 'Search...'
        }
        <div>
          {
            !isAuthenticated ? (
              <Button color="inherit" onClick={() => {}}>
                Login &npsp; <AccountCircle />
              </Button>
            ) : (
              <Button color="inherit" component={Link} to="/profile/123" className={classes.linkButton} onClick={() => {}}>
                {!isMobile && <>My Movies &nbsp;</>}
                <Avatar style={{ height: '30px', width: '30px' }} alt="Profile" src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png" />
              </Button>
            )
          }
        </div>
        {
          isMobile && 'Search...'
        }
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;

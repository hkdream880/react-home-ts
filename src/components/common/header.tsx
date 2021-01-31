// eslint-disable-next-line no-use-before-define
import * as React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { Link } from 'react-router-dom'
import Login from './login'
import { useSelector } from 'react-redux'
import { RootState, UserState } from '../../types/redux'
// import Avatar from '@material-ui/core/Avatar';
import AvataIcon from '../common/avatarIcon'


const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))

type HeaderProps = {
  toggleNavi(showNavi: boolean): void
  showNavi: boolean
}

const Header:React.FC<HeaderProps> = ({ toggleNavi, showNavi }): React.ReactElement => {
  const classes = useStyles()

  const user  = useSelector((state: RootState) => state.userStore.user)

  return (
    <div className={classes.root} data-testid="header">
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={() => {
              toggleNavi(!showNavi)
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <Link to="/" style={{textDecoration: 'none', color:'#fff'}}>
                HK's Home
            </Link>
          </Typography>
          {user ? 
            <AvataIcon />:
            // <Avatar>
            //   {user.email.substring(0,1).toUpperCase()}
            // </Avatar>:
            <>
              <Login />
              <Button >
                <Link to="/join" style={{textDecoration: 'none', color: 'white'}}>
                  JOIN
                </Link>
              </Button>
            </>
          }
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header

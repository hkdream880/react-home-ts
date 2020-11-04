// eslint-disable-next-line no-use-before-define
import * as React from 'react'
import * as classNames from 'classnames'
import {
  createStyles, makeStyles, useTheme, Theme,
} from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'

import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import MailIcon from '@material-ui/icons/Mail'

const drawerWidth = 240

const useStyles = makeStyles((theme: Theme) => createStyles({
  list: {
    width: '239px',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    top: '64px',
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
    top: '64px',
  },
}))

interface LeftMenuProps {
  open: boolean,
}

const LeftMenu:React.FC<LeftMenuProps> = ({ open }) => {
  const classes = useStyles()
  // const theme = useTheme()
  // left menu spend
  // const [open, setOpen] = React.useState(false)

  const toolbarClass = React.useMemo(() => classNames({
    [classes.drawerOpen]: open,
    [classes.drawerClose]: !open,
  }), [open])

  return (
    <div data-testid="leftMenu">
      <Drawer
        variant="permanent"
        className={toolbarClass}
        classes={{
          paper: toolbarClass,
        }}
      >
        <Divider />
        <List className={classes.list}>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List className={classes.list}>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  )
}

export default LeftMenu

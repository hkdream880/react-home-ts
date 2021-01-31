import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../types/redux';
import { IconButton, Menu, MenuItem, Avatar } from '@material-ui/core'
import { REMOVE_USER } from '../../consts/actions';

const AvataIcon = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const dispatch = useDispatch()

  const logoutHandler = () => {
    handleClose()
    dispatch({
      type: REMOVE_USER
    })
  }

  const user  = useSelector((state: RootState) => state.userStore.user)

  return (
    user?
    <div>
      <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <Avatar>
          {user.email.substring(0,1).toUpperCase()}
        </Avatar>
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={logoutHandler}>Logout</MenuItem>
      </Menu>
    </div>:<></>
  );
}

export default AvataIcon
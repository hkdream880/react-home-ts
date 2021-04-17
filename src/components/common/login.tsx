// eslint-disable-next-line no-use-before-define
import * as React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import { useDispatch } from 'react-redux'
import { SET_USER } from '../../consts/actions'

const LoginDialog = () => {
  const [open, setOpen] = React.useState(false)
  const dispatch = useDispatch()

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const requestLogin = () => {
    console.log('requestLogin')
    dispatch({
      type: SET_USER,
      user: {
        email: 'test',
      },
    })
  }

  return (
    <div>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open form dialog
      </Button> */}
      <Button color="inherit" onClick={handleClickOpen}>Login</Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Log In</DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText> */}
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email"
            type="email"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={requestLogin} color="primary">
            Log In
          </Button>
          <Button onClick={handleClose} color="primary">
            Join
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default LoginDialog

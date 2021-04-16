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
import { useForm } from 'react-hook-form'
import { makeStyles } from '@material-ui/core/styles'
import { Join } from '../../types/joinform'

const useStyles = makeStyles({
  root: {
    width: '450px',
  },
  formDefault: {
    textAlign: 'center',
  },
  defaultInput: {
    width: '300px',

  },
})

const JoinDialog:React.FC = (): React.ReactElement => {
  const classes = useStyles()
  const [captcharState, setCaptcharState] = React.useState(false)

  const captcharSuccessHandler = () => {
    setCaptcharState(true)
    console.log('captcharState: ', captcharState)
  }

  const onSubmit = (data: any) => {
    console.log('onSubmit: ', data)
  }

  const {
    register, handleSubmit, watch, errors,
  } = useForm<Join>()

  const [open, setOpen] = React.useState(false)

  const dispatch = useDispatch()

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open form dialog
      </Button> */}
      <Button color="inherit" onClick={handleClickOpen}>Join</Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Join</DialogTitle>
        <DialogContent className={classes.root}>
          <form onSubmit={handleSubmit(onSubmit)} className={classes.formDefault}>
            <TextField
              id="input-email"
              label="email"
              className={classes.defaultInput}
              type="text"
              name="email"
              inputRef={register}
              autoComplete="nope"
              inputProps={{
                required: true,
              }}
            />
            <br />
            <TextField
              id="input-nick"
              label="nick"
              name="nick"
              type="text"
              className={classes.defaultInput}
              inputRef={register}
              inputProps={{
                required: true,
              }}
            />
            <br />
            <TextField
              id="input-password"
              label="password"
              className={classes.defaultInput}
              type="password"
              autoComplete="new-password"
              name="password"
              inputRef={register}
              inputProps={{
                required: true,
              }}
            />
            <br />
            <TextField
              id="input-password"
              label="repeat password"
              className={classes.defaultInput}
              type="password"
              name="repeat-password"
              inputRef={register}
              inputProps={{
                required: true,
              }}
            />
            <DialogActions>
              <Button color="primary">
                Cancel
              </Button>
              <Button color="primary">
                Reset
              </Button>
              <Button color="primary" type="submit">
                Join
              </Button>
            </DialogActions>
          </form>
          {/* <GoogleReCaptchaProvider
            reCaptchaKey={process.env.CAPTCHA_SITE_KEY}
          >
            <GoogleReCaptcha onVerify={captcharSuccessHandler} />
          </GoogleReCaptchaProvider> */}
        </DialogContent>
      </Dialog>
    </div>
  )
}
export default JoinDialog

// eslint-disable-next-line no-use-before-define
import * as React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Checkbox from '@material-ui/core/Checkbox'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { useDispatch } from 'react-redux'
import { useForm, Controller } from 'react-hook-form'
import { makeStyles } from '@material-ui/core/styles'
import { Join } from '../../types/joinform'
import { EMAIL_REG_EX, PASSWORD_REG_EX } from '../../consts/regExp'
import JoinTerms from './joinTerms'

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
  termsCheckBox: {
    marginTop: '25px',
  },
})

const JoinDialog:React.FC = (): React.ReactElement => {
  const classes = useStyles()
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
    setError,
    register,
    watch,
    setValue,
  } = useForm<Join>({
    mode: 'onSubmit',

  })
  const [open, setOpen] = React.useState(false)
  const [acceptTerms, seAtcceptTerms] = React.useState(false)
  const dispatch = useDispatch()
  const [captcharState, setCaptcharState] = React.useState(false)
  const password = React.useRef({})
  password.current = watch('password', '')

  const onSubmit = (data: Join) => {
    console.log('onSubmit: ', data)
    setError('email', { type: 'duplicated', message: 'duplicated email' })
  }

  const handleClickOpen = () => {
    setOpen(true)
  }

  const closeTermsCallback = (acceptVal: boolean) => {
    seAtcceptTerms(acceptVal)
    setValue('acceptTerms', acceptVal)
  }

  const handleClose = () => {
    setOpen(false)
  }
  
  console.log('ERROR: ', errors)
  return (
    <div>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open form dialog
      </Button> */}

      <Button color="inherit" onClick={handleClickOpen}>Join</Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Join</DialogTitle>
        <DialogContent className={classes.root}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={classes.formDefault}
          >
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <TextField
                  label="email"
                  {...field}
                  className={classes.defaultInput}
                  type="text"
                  autoComplete="nope"
                  error={errors.email !== undefined}
                  helperText={errors.email && errors.email.message}
                />
              )}
              rules={{ required: { value: true, message: 'email is required' }, pattern: { value: EMAIL_REG_EX, message: 'wrong email' } }}
            />
            <Controller
              name="nick"
              control={control}
              render={({ field }) => (
                <TextField
                  error={errors.nick !== undefined}
                  helperText={errors.nick && errors.nick.message}
                  label="nick name"
                  {...field}
                  className={classes.defaultInput}
                  type="text"
                />
              )}
              rules={{ required: 'nick is required' }}
            />
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <TextField
                  error={errors.password !== undefined}
                  helperText={errors.password && errors.password.message}
                  label="password"
                  {...field}
                  className={classes.defaultInput}
                  type="password"
                  autoComplete="new-password"
                />
              )}
              rules={{
                required: 'password is required',
                pattern: {
                  value: PASSWORD_REG_EX,
                  message: 'password is pattern is wrong',
                },
              }}
            />
            <Controller
              name="repeatPassword"
              control={control}
              render={({ field }) => (
                <TextField
                  error={errors.repeatPassword !== undefined}
                  helperText={errors.repeatPassword && errors.repeatPassword.message}
                  label="repeat password"
                  {...field}
                  className={classes.defaultInput}
                  type="password"
                />
              )}
              rules={{ required: 'repeat password', validate: (value) => value === password.current || 'not same' }}
            />
            <div className={classes.termsCheckBox}>
              <JoinTerms acceptCallback={closeTermsCallback} acceptValue={acceptTerms} errorText={errors.acceptTerms && errors.acceptTerms.message}/>
              <input
                className="hidden"
                type="checkbox"
                // eslint-disable-next-line react/jsx-props-no-multi-spaces
                {...register('acceptTerms', { validate: (value) => value === true || 'please check terms' })}
              />
            </div>
            <DialogActions>
              <Button color="primary" onClick={handleClose}>
                CANCEL
              </Button>
              <Button
                color="primary"
                onClick={() => {
                  reset()
                }}
              >
                RESET
              </Button>
              <Button color="primary" type="submit">
                JOIN
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

// eslint-disable-next-line no-use-before-define
import * as React from 'react'
import { GoogleReCaptchaProvider, GoogleReCaptcha } from 'react-google-recaptcha-v3'
import { useForm } from 'react-hook-form'
import { Box, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Join } from '../../types/joinform'

const useStyles = makeStyles({
  root: {
    background: 'red',

  },
})

const Join: React.FC = () => {
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

  const classes = useStyles()

  return (
    <Box justifyContent="center" display="flex">
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField id="input-email" label="email" />
        <br />
        <TextField id="input-nick" label="nick" />
        <br />
        <TextField id="input-password" label="password" />
        <br />
        <TextField id="input-password" label="repeat password" />
      </form>
      <GoogleReCaptchaProvider
        reCaptchaKey={process.env.CAPTCHA_SITE_KEY}
      >
        <GoogleReCaptcha onVerify={captcharSuccessHandler} />
      </GoogleReCaptchaProvider>
    </Box>
  )
}
export default Join

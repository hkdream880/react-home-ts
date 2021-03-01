import * as React from 'react'
import { GoogleReCaptchaProvider, GoogleReCaptcha } from 'react-google-recaptcha-v3'
import { useForm } from 'react-hook-form'
import { Join } from '../../types/joinform'
import { TextField } from '@material-ui/core'


const Join: React.FC = () => {
  const [captcharState, setCaptcharState] = React.useState(false)
  
  const captcharSuccessHandler = () => {
    setCaptcharState(true)
    console.log('captcharState: ', captcharState)
  }

  const onSubmit = (data: any) => {
    console.log('onSubmit: ', data)
  }

  const { register, handleSubmit, watch, errors } = useForm<Join>();
  
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField />
        <TextField />
        <TextField />
      </form>
      <GoogleReCaptchaProvider
        reCaptchaKey={process.env.CAPTCHA_SITE_KEY}
      >
        <GoogleReCaptcha onVerify={captcharSuccessHandler}/>
      </GoogleReCaptchaProvider>
    </div>
  )
}
export default Join
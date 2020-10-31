// eslint-disable-next-line no-use-before-define
import * as React from 'react'
import { hot } from 'react-hot-loader/root'
import CssBaseline from '@material-ui/core/CssBaseline'
import Header from './components/header'

const App: React.FC = () => (
  <>
    <CssBaseline />
    <Header />
  </>
)

export default hot(App)

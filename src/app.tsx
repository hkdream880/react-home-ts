// eslint-disable-next-line no-use-before-define
import * as React from 'react'
import { hot } from 'react-hot-loader/root'
import CssBaseline from '@material-ui/core/CssBaseline'
// import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Header from './components/header'
import LeftMenu from './components/leftMenu'

const App: React.FC = () => (
  <>
    <CssBaseline />
    <Header />
    <Container style={{ background: 'red' }}>
      <LeftMenu />
    </Container>

  </>
)

export default hot(App)

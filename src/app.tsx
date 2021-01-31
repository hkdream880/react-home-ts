// eslint-disable-next-line no-use-before-define
import * as React from 'react'
import { hot } from 'react-hot-loader/root'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import {
  createStyles, makeStyles, Theme,
} from '@material-ui/core/styles'
import {
  BrowserRouter, Redirect, Route, Switch,
} from 'react-router-dom'
import Header from './components/common/header'
import LeftMenu from './components/common/leftMenu'
import Home from './pages/home'
import ReduxTest from './pages/redux-test'
import Join from './pages/join'

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    display: 'flex',
    paddingLeft: '48px'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    border: '1px solid #424242'
  },
}))

const App: React.FC = () => {
  const classes = useStyles()
  const [showLeftNavi, setShowLeftNavi] = React.useState(false)
  return (
    <>
      <CssBaseline />
      <BrowserRouter>
      <Header toggleNavi={setShowLeftNavi} showNavi={showLeftNavi} />
      <Container >
        <div className={classes.root}>
            <LeftMenu open={showLeftNavi} />
            <main className={classes.content}>
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/redux-test" component={ReduxTest} />
                <Route path="/join" component={Join} />
                <Redirect path="*" to="/" />
              </Switch>
            </main>
        </div>
      </Container>
      </BrowserRouter>

    </>
  )
}

export default hot(App)

// eslint-disable-next-line no-use-before-define
import * as React from 'react'
import { hot } from 'react-hot-loader/root'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import {
  createStyles, makeStyles, Theme,
} from '@material-ui/core/styles'
import {
  BrowserRouter, Route, Router, Switch,
} from 'react-router-dom'
import Header from './components/header'
import LeftMenu from './components/leftMenu'
import Home from './pages/home'
import Page2 from './pages/page2'

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    background: 'red',
  },
}))

const App: React.FC = () => {
  const classes = useStyles()
  const [showLeftNavi, setShowLeftNavi] = React.useState(false)
  return (
    <>
      <CssBaseline />
      <Header toggleNavi={setShowLeftNavi} showNavi={showLeftNavi} />
      <Container>
        <div className={classes.root}>
          <LeftMenu open={showLeftNavi} />
          <main className={classes.content}>
            <BrowserRouter>
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/page2" component={Page2} />
              </Switch>
            </BrowserRouter>
            {/* <Typography paragraph>
              contents
            </Typography> */}
          </main>
        </div>
      </Container>

    </>
  )
}

export default hot(App)

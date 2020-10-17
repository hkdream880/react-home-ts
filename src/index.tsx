import * as React from 'react'  //해당 타입에는 export default가 없기 때문에 import React from 'react' 불가
import * as ReactDOM from 'react-dom'
import { hot } from 'react-hot-loader/root'
import App from './app'
import * as dotenv from 'dotenv';

dotenv.config();

const HOT = hot(App)
ReactDOM.render(<App />,document.querySelector('#root'));
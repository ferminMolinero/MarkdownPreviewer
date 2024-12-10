/*import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

*/

import React from 'react'
import ReactDOM from 'react-dom'
import {App} from './App.jsx'
import './index.css'

const appDomElement = document.getElementById("root");

ReactDOM.render(<App/>, appDomElement);
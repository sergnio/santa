import React from 'react';
import './App.css';
import ToggleFrame from "./components/ToggleFrame";
import {CssBaseline} from "@material-ui/core";

function App() {
    return <div id='root'>
        <CssBaseline/>
        <ToggleFrame/>
    </div>
}

export default App;

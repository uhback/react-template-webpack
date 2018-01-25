import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css'; // normalize for different browsers
import './styles/styles.scss';

const App = () => (
    <div>
        <h1>Enjoy REACT :)</h1>
    </div>
)

ReactDOM.render(<App />, document.getElementById('app'));
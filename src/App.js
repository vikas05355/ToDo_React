import React , {Component} from 'react';
import ReactDom from 'react-dom';
import './assets/css/Index.css';
import ToDo from './ToDo.js';

class App extends Component {
  render() {
    return (
      <div>
        <ToDo />
      </div>
    );
  }
};

ReactDom.render(
  <App />,
  document.getElementById("root")
);

export default App;
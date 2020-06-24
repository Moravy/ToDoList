import React ,{Component} from 'react';
import {Header} from './Component/Header';
import Body from './Container/todo_list';

class App extends Component {
    state = { }
    render() { 
        return ( 
            <React.Fragment>
                <Header />
                <Body />
            </React.Fragment>
        );
    }
}

export default App;





import React ,{Component} from 'react';
import {Header} from './Component/Header';
import Todolist from './Container/todo_list';

class App extends Component {
    state = { }
    render() { 
        return ( 
            <React.Fragment>
                <Header />
                <Todolist />
            </React.Fragment>
        );
    }
}

export default App;





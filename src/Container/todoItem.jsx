import React, { Component } from 'react';
class Buttons extends Component {
    state = {  }

    //2.
    // I passed Item (this.props.values) so that I can return the span description
    // Create two buttons where one called the function handleDelete with parameter of (this.props.id)
    createTask(item){
        return <React.Fragment>
            <span className="presentation"><h5>{item}</h5></span>
            <div className= "buttons">          
                <button type="button" onClick={this.handleAdd} className="b btn btn-success"><i className="fa fa-check"></i></button>
                <button type="button" onClick={() => this.props.onDelete(this.props.id)}className="b btn btn-danger"><i className="fa fa-trash"></i></button>
            </div>
        </React.Fragment>
    }
    
    
    render() { 
        //1.
        //In todo_list.jsx I pass abunch of "parameter"(idk what its call) eg. key={something}, this allow us to retrieve information from TodoList
        //So you can do this.props.value, this.props.key
        // then I call createTask 
        var todoEntries = this.props.value;
        var Items = this.createTask(todoEntries);
 
        return (           
        <div>
            {Items}
        </div> );
    }
}
 
export default Buttons;
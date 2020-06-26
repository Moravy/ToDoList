import React, { Component } from 'react';
class Buttons extends Component {
    state = {  }

    // handleAdd = () => {
    //     console.log(this.props.id)
    // }

    createTask(item){
        // console.log(item)
        return <React.Fragment>
            <span className="presentation"><h5>{item}</h5></span>
            <div className= "buttons">          
                <button type="button" onClick={this.handleAdd} className="b add btn btn-success"><i className="fa fa-check"></i></button>
                <button type="button" onClick={() => this.props.onDelete(this.props.id)}className="b btn btn-danger"><i className="fa fa-trash"></i></button>
            </div>
        </React.Fragment>
    }
    render() { 
        var todoEntries = this.props.value;
        var Items = this.createTask(todoEntries);
 
        return (           
        <div>
            {Items}
        </div> );
    }
}
 
export default Buttons;
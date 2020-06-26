import React,{Component} from 'react';
import Todoitem from "./todoItem";
class todo_list extends Component {
    constructor(props) {
        super(props);
        // this.handleadd = this.handleadd.bind(this)
        this.state = {
          data: [],
        };
      }
    componentDidMount(){
        fetch('http://localhost:8080/users')
        .then(response => response.json())
        .then(fromApi => {
          this.setState({data:fromApi})

        });

    }

    handleDelete = itemId =>{
      const items = this.state.data.filter((element) => element.id !== itemId);
      this.setState({data:items})
      fetch('http://localhost:8080/users/'+itemId,{
        method: 'DELETE',
      })
      .then(res => res.text())
      .then(res => console.log(res))
    }

    renderData(){
      if (this.state.data.length === 0) return <p>You don't have anything to do today</p>
      return  <React.Fragment>
                {this.state.data.map((element) => (
                  <Todoitem key={element.id} id={element.id} value={element.todo} onDelete={this.handleDelete} />
                ))}
              </React.Fragment>
    }
    //FINISHED ADDING DELETE
    // trying adding a add function
    // trying to add object into data

    render() { 
        return (
          <React.Fragment>
          {this.renderData()}
          </React.Fragment>
         );
    }
}

// OK SO WE JUST MAKE ONE ITEM FOR NOW AND AFTER USE A CONTAINER TO MAKE MULTIPLE ITEMS
export default todo_list;
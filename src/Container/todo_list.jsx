import React,{Component} from 'react';
import Todoitem from "./todoItem";
class todo_list extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.state = {
          value: '',
          data: [],
          id: '0',
        };
      }

    // Fetch all the todoItem from the APi and setState
    componentDidMount(){
        // fetch('http://localhost:8080/users')
        // .then(response => response.json())
        // .then(fromApi => {
        //   this.setState({data:fromApi})
        // });
        this.handleAdd();
    }

    handleAdd(){
      fetch('http://localhost:8080/users')
      .then(response =>  response.json())
      .then(fromApi => {
        this.setState({data:fromApi})
        fromApi.map((element) =>(
          this.setState({id:element.id})
        ))
      });
    }
    //When the delete this function is triggered
    //This function has a parameter of itemId. This parameter will be used to filter the this.state.data
    //the filter is if the parameter is if current element.id "not equal value or not equal type" itemId
    //Once done setState to a new list (Since react recommend to think state is immutable)
    //After we delete the item from PSQL using API(FROM pgAPi.js) using DELETE.
    handleDelete = itemId =>{
      const items = this.state.data.filter((element) => element.id !== itemId);
      this.setState({data:items})
      fetch('http://localhost:8080/users/'+itemId,{
        method: 'DELETE',
      })
      .then(res => res.text())
      .then(res => console.log(res))
    }


    // Dynamically create new component depend on how many item there are on the list.
    // Passing keys, id will allow me to identify which object this is.
    // Passing value, so each of the component knows what todoItem it is
    // Passing Delete allow the todoItem to use THIS.handleDelete
    renderData(){
      if (this.state.data.length === 0) return <p>You don't have anything to do today</p>
      return  <React.Fragment>
                {this.state.data.map((element) => (
                  <Todoitem key={element.id} id={element.id} value={element.todo} onDelete={this.handleDelete} />
                ))}
              </React.Fragment>
    }

    handleChange(event) {
      this.setState({value:event.target.value})
      }

    //FIX INSERTING 
    handleDup=() =>{
      var newid = parseInt(this.state.id)+1
      console.log(this.state.id)
      this.setState({id:newid.toString()},()=>{
        console.log(this.state.id)
        const added = this.state.data.concat({id:this.state.id,todo:this.state.value })
        this.setState({data:added})})
        var inputField = document.getElementsByClassName("add")[0]
        inputField.placeholder = "Succeed"
    }

    handleSubmit(event) {
      event.preventDefault();
      fetch('http://localhost:8080/users/',{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({id:this.state.id,todo: this.state.value })
        }).then(res =>{
          var inputField = document.getElementsByClassName("add")[0]
          res.status!== 400 ? this.handleDup() : 
          inputField.placeholder = "You have already enter this task"
          inputField.value = ""
        })
      }

    
    render() { 
        return (
          <React.Fragment>
          <form  onSubmit={this.handleSubmit}>
            <input value={this.state.value} onChange={this.handleChange} type="text" className="add"/>
            <div className="buttons">
              <button type="submit" className="b btn btn-success"><i className="fa fa-plus"></i></button>
              <button type="button" className="b disable " disabled><i className="fa fa-plus"></i></button>
            </div>
          </form>
          {this.renderData()}
          </React.Fragment>
         );
    }
}

// OK SO WE JUST MAKE ONE ITEM FOR NOW AND AFTER USE A CONTAINER TO MAKE MULTIPLE ITEMS
export default todo_list;
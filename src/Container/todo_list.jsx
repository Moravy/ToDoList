import React,{Component} from 'react';
class todo_list extends Component {
    constructor(props) {
        super(props);
     
        this.state = {
          data: [],
        };
      }
    componentDidMount(){
        fetch('http://localhost:8080/users')
        .then(response => response.json())
        .then(data => {
          let item;
          data.forEach(element => {
            item  = element.todo
            this.state.data.push(item)
          });
          
          this.setState({data:item})});
          console.log(this.state)
    }
    render() { 
        return ( 
          <h1>{this.state.data}</h1>
          // I GUESS TRY TO FIND A WAY TO LOOP THrough the result
         );
    }
}
 
export default todo_list;
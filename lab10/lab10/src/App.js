import {Component} from 'react'
import Productos from './components/Productos';

class App extends Component{
  state={
    productos:[]

  }
  componentDidMount(){
    fetch('http://127.0.0.1:8000/producto')
    .then((response)=>{
      return response.json()
    })
    .then((prod)=>{
      this.setState({productos:prod});
      console.log(prod);
      
    })
  }


  render(){
    return (
      <div>
        <Productos productos={this.state.productos}/>
      </div>
    )
  }
}

export default App;

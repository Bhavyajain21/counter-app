import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import  Navbar from './components/navbar';
import Counters from './components/counters';

class App extends Component {
  constructor(props){
    super(props);
    // console.log('countstrunctor')
  }
  componentDidMount(){
   
    // console.log('Component did Mount is Rendered')

  }

 
 
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleDelete = counterId => {
      const counters = this.state.counters.filter(c => c.id !== counterId);
      this.setState({counters})

  }
  handelReset = () => {
   let counters = this.state.counters.map(c =>{
        c.value =0;
        return c;
    })
    this.setState({counters})
  }
  handleIncrement = counter =>{
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index] = {...counter};
      counters[index].value++;
      this.setState({counters})

      // console.log(counters,index)
  }
  handleDecrement = counter =>{
    const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index] = {...counter};
      counters[index].value--;
      this.setState({counters})

      // console.log(counters,index)
    console.log('this is handle decrement')
  }
  render(){
    // console.log('Render Function is Rendered')

  return (
    <React.Fragment>
      <Navbar totalCounters={this.state.counters.filter(c => c.value > 0).length}/>
      <main className="container">
        <Counters
          counters={this.state.counters}
          onDelete={this.handleDelete}
          onIncrement={this.handleIncrement}
          onReset={this.handelReset}
          onDecrement={this.handleDecrement}
        />

      </main>
    </React.Fragment>
  );
  }
}

export default App;

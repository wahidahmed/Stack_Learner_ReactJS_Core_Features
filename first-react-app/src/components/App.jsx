import React,{ Component } from "react";
import Profile from "./profile";



class App extends Component{

 state={
  count:0
 }

intervalId=null;

 increament=()=>{
  this.setState({
    count:this.state.count+1,
  })
 }

 decreament=()=>{
  if(this.state.count>0){
    this.setState({
      count:this.state.count-1,
    })
  }
 
 }

 startCount=()=>{
  if(this.state.count>0 && !this.intervalId){
   this.intervalId= setInterval(() => {
      this.setState({
        count:this.state.count-1,
      },()=>{
        if(this.state.count===0){
          alert('count down done');
          clearInterval(this.intervalId);
          this.intervalId=null;
        }
      })
    }, 1000);
  }
 }
 stopCount=()=>{
  if(this.intervalId){
    clearInterval(this.intervalId);
    this.intervalId=null;
  }
}
resetCount=()=>{
  this.setState({
    count:0,
  })

  clearInterval(this.intervalId);
  this.intervalId=null;
}

    render(){

        return (
        <div className="App">
            <h1>create a timer</h1>
            <div>
              <button onClick={this.decreament} >Decrement</button>
              <span style={{margin:'10px'}}>{this.state.count}</span>
              <button onClick={this.increament} >Increment</button>
            </div>
            <div>
              <button onClick={this.startCount}>Start</button>
              <button onClick={this.stopCount}>stop</button>
              <button onClick={this.resetCount}>reset</button>
            </div>
        </div>
        )
    }
}

export default App;
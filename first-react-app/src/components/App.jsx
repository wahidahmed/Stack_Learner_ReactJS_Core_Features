import React,{ Component } from "react";
import Profile from "./profile";


class Child extends Component {

  render() {

    this.props.func(this)
    return (
      <h1>
        i am child
      </h1>
    )
  }
}


const ChildComponent=(props)=>{
    <div>
    <p>i am a child component.
    i dont know what to do.</p>
    {/* {props.Children} */}
</div>
}

class App extends Component{

    getContext(context){
        console.log(context);
    }

    render(){
        this.getContext(this);
        return (
        <div className="App">
            <Profile />
            <Child func={this.getContext}/>

                <ChildComponent>
                <h4>hi this is a test of non self closing child component</h4>
                </ChildComponent>
        </div>
        )
    }
}

export default App;
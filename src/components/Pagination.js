import React, { Component } from 'react'

export default class Pagination extends Component {

    
    state={
        counter:2,
    }

increase=()=>{
    this.setState({
        counter:this.state.counter+1,   
      })
          const value=(this.props.state.end-this.props.state.start)*this.state.counter
          const start=value-(this.props.state.end-this.props.state.start);
          const end=value;
          this.props.stateUpdate(start,end);
          console.log(start,end)

}
decrease=()=>{
   
       this.setState({
           counter:this.state.counter-1,   
         })
         const value=(this.props.state.end-this.props.state.start)*this.state.counter
         const start=value-(this.props.state.end-this.props.state.start);
         const end=value;
         this.props.stateUpdate(start,end);
         console.log(start,end)
}
  render() {
    return (
      <div className='d-flex justify-content-between'>
    <button className='btn btn-primary'
     onClick={this.decrease}>Prev</button>
    <button className='btn btn-primary'
    onClick={this.increase}
    >Next</button>

      </div>
    )
  }
}

import './App.css';
import React, { Component } from 'react'
import Dropdown from './components/Dropdown';
import {Mock} from './components/Mock'
import Pagination from './components/Pagination';
import DisplayView from './components/DisplayView';


export default class App extends Component {

  state={
    start:0,
    end:8,
    DisplayView:'row',
    hide:false

  }

  stateUpdate=(x,y)=>{
    console.log(this.state.start,this.state.end)
    if(x>=0 || y>0){
      this.setState({
        start:x,
      end:y,
      hide:false

      })
    }
   
  }
  showlimited=(x)=>{
  console.log(x)
  this.setState({
    start:0,
  end:x,
  hide:true
  })
  }
  ViewChange=(val)=>{
    this.setState({
     DisplayView:val
    })
  }
  render(){
    if(!this.state.hide){
  return (
    <div className="App">
      <DisplayView ViewChange={this.ViewChange}/>
     <div className='container py-4'>
     <div className={this.state.DisplayView}>
      {
        Mock.slice(this.state.start,this.state.end).map((item,index)=>{
            return(
              <div className='col-md-3 mb-2' key={index}>
                  <div className='card'>
                    <div className='card-body'>
              <h5>#{item.id} {item.title}</h5>
              <p>{item.body}</p>
                    </div>

                  </div>
              </div>
            )
        })
      }
      </div>
      <Pagination state={this.state} stateUpdate={this.stateUpdate}/>
     </div>
     <Dropdown showlimited={this.showlimited}/>

    </div>
  )
}return(
  <div className="App">
  <div className='container py-4'>
  <div className='row'>
   {
     Mock.slice(this.state.start,this.state.end).map((item,index)=>{
         return(
           <div className='col-md-3 mb-2' key={index}>
               <div className='card'>
                 <div className='card-body'>
           <h5>#{item.id} {item.title}</h5>
           <p>{item.body}</p>
                 </div>

               </div>
           </div>
         )
     })
   }
   </div>
   <Pagination state={this.state} stateUpdate={this.stateUpdate}/>
  </div>
 </div>
)
}
}


import React, { Component } from 'react'

export default class Dropdown extends Component {


  render() {
    return (
      <div>
        <select onChange={(e)=>{this.props.showlimited(e.target.value)}}>
            <option defaultValue='8'>default</option>
            <option value='50' >50 records</option>
        </select>
      </div>
    )
  }
}

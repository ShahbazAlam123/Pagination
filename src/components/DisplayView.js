import React, { Component } from 'react'

export default class DisplayView extends Component {
  render() {
    return (
      <div>
        <select onChange={(e)=>{this.props.ViewChange(e.target.value)}}>
            <option value='row'>grid view</option>
            <option value='col'>Card view</option>

        </select>
      </div>
    )
  }
}

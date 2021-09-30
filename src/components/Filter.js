import React, { Component } from 'react'

export default class Filter extends Component {
    render() {
        return (
            <div className='filter'>
                
        <div className="filter-result">{this.props.count} Products</div>
        <div className="fliter-sort">
          order{" "}
            <select value={this.props.sort} onChange={this.props.sortProducts}>
                <option value="lowest">lowest</option>
                <option value="highest">highest</option>
            </select>

            </div>
        
            </div>
        )
    }
}

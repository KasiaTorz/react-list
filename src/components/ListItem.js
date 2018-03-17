import React, { Component } from 'react';


class ListItem extends Component {
render(){
    const {title} = this.props
    return(
        <div>
            <div><image src="{image} alt="/></div>
            <div>{title}</div>
            <div>{rating}</div>
            </div>
        </div>
    )
}
}

export default ListItem;

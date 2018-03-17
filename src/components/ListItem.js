import React, { Component } from 'react';
import Statc from "./Stact";

class ListItem extends Component {

    render() {
        const { title, image, rating } = this.props

        return (
            <div>
                <div>
                    {image ?
                        <img src={image} alt="error"/> :
                        <span>No image :(</span>
                    }
                </div>
                <div>{title}</div>
                <Statc rating={rating}/>
            </div>

        );

    }

}



export default ListItem;
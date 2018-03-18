import React, { Component } from 'react';
import {ratingNames, getStats} from "../utis";


class Statc extends Component {


    render() {
        const stats = getStats(this.props.data)
        console.log(stats)

        return (
            <div>{ratingNames.map(item =>

                <div>{item}{stats[item]}
                </div>
            )}

            </div>
        )

    }
}
export default Statc;

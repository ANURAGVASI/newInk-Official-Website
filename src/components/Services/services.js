import "./services.css";

import React, { Component } from 'react';

const data = [
    {
       title: "Mobile"   
    },
    {
       title: "Web"
    },
    {
        title: "Analytics"
    }
];

class services extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div>
                hi
                {data.map((serviceItem)=>{
                   console.log(serviceItem);
                })}
            </div>
        );
    }
}

export default services;
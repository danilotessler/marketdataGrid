import React from 'react';
import ReactDOM from 'react-dom';
import Grid from 'Grid';

const marketdata = [
        { 
            stock : "PETR4", 
            lastPrice : random(10, 12), 
            minPrice : random(10, 11), 
            maxPrice : random(11, 12)
        },
        { 
            stock : "VALE5", 
            lastPrice : random(20, 22), 
            minPrice : random(20, 21), 
            maxPrice : random(21, 22)
        }                                               
    ];

function random(min, max) {
  return Math.random() * (max - min) + min;
}

ReactDOM.render(
    <Grid marketdata={marketdata} />,
    document.getElementById("root")
);
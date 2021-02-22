import './styles/index.less';
import React from 'react';
import {render} from 'react-dom';

const panda = {
    name: "Big Panda",
    weight: "140kg",
    sex:"male"
};

render(<h1>Hello React Here</h1>,document.getElementById("app"))

console.log(panda)
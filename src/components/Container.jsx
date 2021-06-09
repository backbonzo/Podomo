import React, {useEffect, useState} from 'react';
import {IoIosArrowForward} from "react-icons/io";

import "./Container.css";

const Container = (props) => {

    const [toggle, setToggle] = useState(false);

    const handleClick = (e) => {
        console.log(e)
        setToggle(!toggle)
    }

    const toggleStyle = {
        transform: "rotate(90deg)",
        padding:"2px 0px 0px 4px",

    }
    

  return (
        <div class="container" onClick={handleClick}>
            <IoIosArrowForward style={toggle? toggleStyle:null} />
            <h2 style={{color: "white", cursor: "pointer"}} >{props.title? props.title:"Undefined"}</h2>
        </div>
  );
};

export default Container;
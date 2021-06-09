import React, {useEffect, useState} from 'react';
import {IoIosArrowForward} from "react-icons/io";

import "./Container.css";

const Container = (props) => {

    const [toggle, setToggle] = useState(false);

    const handleClick = (e) => {
        console.log(e)
        setToggle(!toggle)
    }

    const showList = () => {
        return (
                listArr.map((item, idx) =>
                    <h3 style={{color: "white", display: "flex"}} key={idx}>{item}</h3>
                )
        )
    }

    const toggleStyle = {
        transform: "rotate(90deg)",
        padding:"2px 0px 0px 4px",

    }

    const listArr = [
        "Learn Math",
        "Learn PHP",
        "Learn ASM"
    ]
    

  return (
      <div style={{margin: "auto"}}>
        <div class="container" onClick={handleClick}>
            <IoIosArrowForward style={toggle? toggleStyle:null} />
            
            
                <h2 className="listTtile" style={{color: "white", cursor: "pointer"}} >{props.title? props.title:"Undefined"}</h2>

        </div>
        <div className="list">
        { 
                    toggle? showList():null
        }
                    </div>
        </div>
  );
};

export default Container;
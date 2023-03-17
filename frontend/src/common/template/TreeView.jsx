import { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import './TreeView.css';

export default function TreeView(props) {
    const [expand, setExpand] = useState(false);
    return (
        <div className="TreeView">
            
            <button className="text-nowrap" onClick={() => setExpand(!expand)}>
                {props.icon}
                <b> </b>
                {props.name}
                <RiArrowDownSLine />
            </button>
            <br />
            <div className={expand ? "d-block" : "d-none"}>
                <span className="ms-3">{props.children}</span>
            </div>


        </div>
    )
}
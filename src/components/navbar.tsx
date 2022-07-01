import React from "react";
import {IoEarthSharp} from "react-icons/io5";

export default function Navbar() 
    {
  
return (
    <nav
      style={{
        position: "fixed",
        minWidth: "100%",
        height: "55px",
        left: "0px",
        top: "0px",
        marginBottom: "50px",
        background: "#F55A5A",
        backgroundPosition: "center",
        backgroundSize: "%100 %100",
        display: "table"
    }}
    >
        <div style={{
                position: "absolute",
}}>
            <IoEarthSharp style={{
                position: "fixed",
                width: '24px',
                height: '24px',
                left: "45rem",
                top: "20px",
                bottom: "0px",
                display: "inline"
            }}size={28}/>
            <div style={{
                position: 'fixed',
                fontFamily: 'Inter',
                textAlign: 'center',
                fontStyle: 'normal',
                fontWeight: 500,
                fontSize: '32px',
                lineHeight: '18px',
                letterSpacing: '-0.075em',
                display: 'inline',
                whiteSpace: 'nowrap',
                left: '47rem',
                top: '1.5rem',
            }}>
                Baran's Travel Journal
            </div>

        </div>
    </nav>
  );
}


import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css"


const Navigation = () => {

    useEffect(() => {
        Aos.init({})
    }, [])
    return (

        <div>
            <div data-aos = "fade-up" style={{ fontSize: 50, textAlign: "center", display: 'inline-flex', color: 'orange', fontFamily: "Arial" }}>

                <div style={{}}>
                    <li>
                        <Link to="/">Main</Link>
                    </li>
                </div>
                <div style={{}}>
                    <li>
                        <Link to="/extension">Extension</Link>
                    </li>
                </div>
            </div>
        </div>
    )
}

export default Navigation
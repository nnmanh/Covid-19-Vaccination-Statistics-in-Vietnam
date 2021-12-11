import React, { useRef, useEffect } from 'react';
import Aos from 'aos'; //npm install aos --save
import "aos/dist/aos.css"


const { tableau } = window;

function Dataset() {

    useEffect(() => {
        Aos.init({ duration: 3000 })
    })
    const ref = useRef(null);

    const url = "https://public.tableau.com/views/Dataset_16392336072880/Sheet1?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link"
    //const url = "https://public.tableau.com/views/TrainingTableau04/Dashboard1?:language=fr-FR&:display_count=n&:origin=viz_share_link"

    function initViz() {
        new tableau.Viz(ref.current, url)
    }

    useEffect(() => {
        initViz();
    }, [])

    return (
        <div data-aos="fade-up" style={{alignContent: "center", backgroundColor: "rgb(238, 243, 244)" }}>
            <div style={{ color: "#fff", marginTop: "0px", marginRight: "200px", padding: "100px 0" }}>
                <h1 style={{ textAlign: "center", color: "black", fontFamily: "arial", marginLeft: "200px", marginTop: "-50px", marginBottom: "40px" }}> Map Visualisation</h1>
                <div ref={ref} style={{alignItems: "center", marginLeft: "125px", width: '1200px', height: '600px' }}>
                </div>
            </div>
        </div>
    );
}

export default Dataset;
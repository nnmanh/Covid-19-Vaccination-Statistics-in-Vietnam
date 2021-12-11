import React, {useRef, useEffect} from 'react';
import Aos from 'aos'; //npm install aos --save
import "aos/dist/aos.css"


const { tableau } = window;

function Map() {

    useEffect (()=> {
        Aos.init ({duration : 3000})
    })
    const ref = useRef(null);

    const url = "https://public.tableau.com/views/MapChart_16374214103300/Dashboard1?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link"
    //const url = "https://public.tableau.com/views/TrainingTableau04/Dashboard1?:language=fr-FR&:display_count=n&:origin=viz_share_link"

    function initViz() {
        new tableau.Viz(ref.current, url)
    }

    useEffect(() => {
        initViz();
    }, [])

    return (
        <div data-aos = "fade-up" style = {{backgroundColor: "rgb(238, 243, 244)"}}>
        <div style= {{color: "#fff", marginTop: "350px", marginLeft: "200px" , marginRight: "200px", padding: "100px 0"}}>
            <h1 style = {{textAlign : "center", color : "black", fontFamily: "arial", marginTop: "-50px", marginBottom: "40px"}}> Map Visualisation</h1>
            
            <div ref={ref} style={{width: '1200px', height: '600px'}}>
            </div>
            
            
        </div>
        </div>
    );
}

export default Map;
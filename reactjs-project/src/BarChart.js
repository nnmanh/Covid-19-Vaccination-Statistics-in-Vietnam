import React, {useRef, useEffect} from 'react';

const { tableau } = window;

function BarChart() {
    const ref = useRef(null);

    const url = "https://public.tableau.com/views/BarChart_16374635426590/DeathsbyProvince?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link"
    //const url = "https://public.tableau.com/views/TrainingTableau04/Dashboard1?:language=fr-FR&:display_count=n&:origin=viz_share_link"

    function initViz() {
        new tableau.Viz(ref.current, url)
    }

    useEffect(() => {
        initViz();
    }, [])

    return (
        <div style = {{marginTop: "50px", marginLeft: "150px", marginRight: "100px"}}>
            <div ref={ref} style={{width: '1200px', height: '400px'}}>
            </div>

            
        </div>
    );
}

export default BarChart;
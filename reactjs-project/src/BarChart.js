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
        <div>
            
            <p>Vertical Bar Chart</p>

            <div ref={ref} style={{width: '1500px', height: '600px'}}>
            </div>

            
        </div>
    );
}

export default BarChart;
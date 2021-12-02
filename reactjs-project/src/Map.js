import React, {useRef, useEffect} from 'react';

const { tableau } = window;

function Map() {
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
        <div>
            
            <p>Map!</p>

            <div ref={ref} style={{width: '1500px', height: '600px'}}>
            </div>

            
        </div>
    );
}

export default Map;
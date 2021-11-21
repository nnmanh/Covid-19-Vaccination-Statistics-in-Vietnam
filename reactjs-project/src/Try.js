import React, {useRef, useEffect} from 'react';

const { tableau } = window;

function Try() {
    const ref1 = useRef(null);
    const ref2 = useRef(null);

    //const url = "http://public.tableau.com/views/RegionalSampleWorkbook/Storms";
    //"https://public.tableau.com/app/profile/chris.gerrard/viz/RegionalSampleWorkbook/Storms"
    const url1 = "https://public.tableau.com/views/Demo_16373386180000/Dashboard1"
    const url2 = "https://public.tableau.com/views/TrainingTableau04/Dashboard1?:language=fr-FR&:display_count=n&:origin=viz_share_link"

    function initViz1() {
        new tableau.Viz(ref1.current, url1)
    }

    function initViz2() {
        new tableau.Viz(ref2.current, url2)
    }

    useEffect(() => {
        initViz1();
    }, [])

    useEffect(() => {
        initViz2();
    }, [])

    return (
        <div>
            
            <p>Hello Vince!</p>

            <div ref={ref1} style={{width: '1500px', height: '600px'}}>
            </div>

            <div ref={ref2} style={{width: '1500px', height: '600px'}}>
            </div>

        </div>
    );
}

export default Try;
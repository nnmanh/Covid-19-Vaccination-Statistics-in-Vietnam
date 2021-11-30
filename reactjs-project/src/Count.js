import CountUp from 'react-countup';

function Count() {
    return (
        <div>
            <div style = {{fontSize: 40, textAlign: "center", display: 'inline-flex', backgroundColor: 'green', color: 'white'}}>
            
                <div style = {{marginRight: 200, marginLeft: 100}}>
                    <h1 style = {{fontSize: 14}}>Injected Population</h1>
                    <CountUp start = {0} end = {50} duration = {2} />
                        </div>
                <div style = {{marginRight: 200}}>
                <h1 style = {{fontSize: 14}}>Injected Population</h1>
                    <CountUp start = {0} end = {50} duration = {2} />
                        </div>
                <div style = {{marginRight: 100}}>
                <h1 style = {{fontSize: 14}}>Injected Population</h1>
                    <CountUp start = {0} end = {50} duration = {2} />
                        </div>
            </div>
        </div>
    )
}

export default Count
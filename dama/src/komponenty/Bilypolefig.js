import React from 'react';
import './bilypolefig.css';

 //jeste jestli by si mi neukazal, jak jsou add a remove class v JS, ze bych to nedelal pres state jako tady, ale normalne si pripnul tridu,ktery bych si nastiloval v CSS? nemohl sem to najit
 //jakto ze kdyz bych udelal function Bilypolefig() {} tak to nefunguje?:D
class Bilypolefig extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
            fgColor: "",
            Border: "",
        }
    }
    
    
    klikanek = (e) => {
        this.setState({
            fgColor: "red",
            Border: "3px solid black"
        })
    }
    klikanek2 = (i) => {
        this.setState({
            fgColor: "",
            Border: ""
        })
    }
    //jak se da tohle vyresit 2* onClick
    render() {
        return(
            <div className="Bilypolefig">
                <div className="Figurka" style={{backgroundColor: this.state.fgColor, border: this.state.Border}}
                    onClick={this.klikanek} 
                    style={{backgroundColor: this.state.fgColor, border: this.state.Border}} onDoubleClick={this.klikanek2}></div>
            </div>
        );
    }
}
export default Bilypolefig;
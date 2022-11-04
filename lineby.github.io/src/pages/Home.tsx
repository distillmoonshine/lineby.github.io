import React from "react";
import AOS from "aos";

import Navbar from "../components/ui/Navbar";

interface Props {};
interface State {
    WindowWidth: number;
    WindowHeight: number;
};

class Home extends React.Component<Props, State> {
    constructor (props: Props) {
        super(props);
        this.state = {
            WindowWidth: 0,
            WindowHeight: 0,
        }
        this.updateDimensions = this.updateDimensions.bind(this);
    }

    componentDidMount() {
        AOS.init({
          duration: 2000
        });
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions);
    }
    
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }

    updateDimensions() {
        let WindowWidth = typeof window !== "undefined" ? window.innerWidth : 0;
        let WindowHeight = typeof window !== "undefined" ? window.innerHeight : 0;

        this.setState({WindowWidth, WindowHeight});
    };

    // Render and return HTML + CSS
    render() {
        const WindowWidth = this.state.WindowWidth;
        // Threshhold for when to turn on mobile mode:
        const mobile = WindowWidth < 934;

        const background = {
            background: 'radial-gradient(92.84% 63.81% at 146.64% 100%, #F1C58E 0%, rgba(241, 197, 142, 0) 100%), radial-gradient(80.8% 96.74% at -13.59% 25.92%, rgba(48, 123, 246, 0.4) 0%, rgba(225, 247, 254, 0) 100%), #FCFDFF',
            display: "flex",
        };

        const title = {
            
        }
          
        return <> 
            <div style={background}>
                <h1 style={{fontFamily: "ArticulatCF-DemiBold"}}>Line By </h1>
                <h1 style={{fontFamily: "ArticulatCF-Thin"}}> Line </h1>
            </div>
        </> 
    };
}

export default Home;

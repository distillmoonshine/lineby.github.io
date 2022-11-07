import React from "react";
import AOS from "aos";

import ExternalLayout from "../components/ui/ExternalLayout";

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

        const secondColumn = {
            float: mobile ? 'initial' as const : 'left' as const,
            width: mobile ? '100%' : '50%',
            margin: mobile ? 'auto' : '10px auto',
            padding: '10px',
        };

        const background = {
            background: 'radial-gradient(92.84% 63.81% at 146.64% 100%, #F1C58E 0%, rgba(241, 197, 142, 0) 100%), radial-gradient(80.8% 96.74% at -13.59% 25.92%, rgba(48, 123, 246, 0.4) 0%, rgba(225, 247, 254, 0) 100%), #FCFDFF',
            display: "flex",
            justifyContent: "flex-start",
            flexDirection: "column",
            width: "100vw"
        };

        const Navbar_loc = {flex: 1, height: "1vh"};
        const Title = {flex: 2, fontSize: "200px", display: "flex"};
        const Subtitle = {flex: 3, fontSize: "64px", color: "#307BF6", display:"flex"};

          
        return <> 

            <section style={background as React.CSSProperties}>
                <ExternalLayout Fixed={true} TransparentTop={true}>
                    <div style={Title}>
                        <p style={{fontFamily: "ArticulatCF-DemiBold"}}>Line By&nbsp;</p> <p style={{fontFamily: "ArticulatCF-Light"}}>Line</p>
                    </div>
                    <div style={Subtitle}>
                        <p style={{fontFamily: "ArticulatCF-Light"}}>Don't Edit,&nbsp;</p> <p style={{fontFamily: "ArticulatCF-DemiBold"}}>Create</p>
                    </div>
                </ExternalLayout>
            </section>


        </> 
    };
}

export default Home;

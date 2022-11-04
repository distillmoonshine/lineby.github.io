import React from "react";
import AOS from "aos";

interface Props {};
interface State {
    WindowWidth: number,
};

class Navbar extends React.Component<Props, State>{
    constructor (props: Props) {
        super(props);
        this.state = {WindowWidth: 0,}
        this.updateDimensions = this.updateDimensions.bind(this);
    };

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

        this.setState({WindowWidth});
    };

    render () {
        const mini_line = {
            background: "line",
            color: "000000",
            height: "1px"
        }

        return <>
            <hr style={mini_line}></hr>
        </>
    }
}

export default Navbar;
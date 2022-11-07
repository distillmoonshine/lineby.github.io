import React from "react";
import {Link} from 'react-router-dom'

interface ExternalHeaderProps {
    Fixed: boolean,
    TransparentTop: boolean,
};

interface ExternalHeaderState {
    Scroll: number,
};

class Navbar extends React.Component<ExternalHeaderProps, ExternalHeaderState>{
    constructor (props: ExternalHeaderProps) {
        super(props);
        this.state = {Scroll: 0};
    };

    listenToScroll = () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
        const scrolled = winScroll / height

        this.setState({Scroll: scrolled})
    }

    componentDidMount() {
        window.addEventListener('Scroll', this.listenToScroll)
    }
    
    componentWillUnmount() {
        window.removeEventListener('Scroll', this.listenToScroll);
    }

    render () {
        const SmallLine = {
            background: "#000000",
            width: "5vw",
            height: "1px",
            margin: "2.3vw"
        };
        const LongLine = {background: "#000000", height: "1px"}
        const Spacer = {
            //opacity: "0",
            //width: "0.014vw"
        };
        const BlackLinkStyle = {
            fontFamily: "ArticulatCF-DemiBold",
            color: "#000000",
            textAlign: "center",
            textDecoration: "none",
            margin: "2.3vw"
        }

        const BlueLinkStyle = {
            fontFamily: "ArticulatCF-ExtraBold",
            color: "#307BF6",
            textAlign: "center",
            textDecoration: "none",
            margin: "2.3vw"
        }

        return <>
            <div style={{display: "flex",}}>
                <Link style={BlueLinkStyle as React.CSSProperties} to="/create">Create</Link>
                <hr style={SmallLine}/>
                <Link style={BlackLinkStyle as React.CSSProperties} to="/for_business">For Business</Link>
                <hr style={SmallLine}/>
                <Link style={BlackLinkStyle as React.CSSProperties} to="/about">About</Link>
                <hr style={LongLine}/>
                <Link style={BlackLinkStyle as React.CSSProperties} to="/">LINEBY</Link>
            </div>
        </>
    }
}

export default Navbar;
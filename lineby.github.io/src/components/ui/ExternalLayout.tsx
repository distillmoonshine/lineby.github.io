import React from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";

interface ExternalLayoutProps {
    Fixed: boolean;
    TransparentTop: boolean;
    children: React.ReactNode | React.ReactNode[]
}

class ExternalLayout extends React.Component<ExternalLayoutProps> {
    render() {

        const outer_page = {display: "flex", flexDireciton: "row"}
        const inner_page = {display: "flex", flexDirection: "column"};
        const sidebar = {
            opacity: "0",
            width: "100px",
            height: "100vh"
        };

        return <>
            <div style={outer_page}>
                <div style={sidebar}/>
                <div style={inner_page as React.CSSProperties}>
                    <Navbar Fixed={this.props.Fixed} TransparentTop={this.props.TransparentTop}/>
                    {this.props.children}
                </div>
                <div style={sidebar}/>
            </div>
            <Footer />

        </>
    }
}

export default ExternalLayout;
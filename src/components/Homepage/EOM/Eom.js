import React from "react";
import "./eom.css";
import eomChart from "../../../assets/eom_chart.svg";
import eomChart2 from "../../../assets/eom_chart_mobile.svg";
import brandLogo from "../../../assets/mxv_logo_vertical.svg";

export default function Eom(){
    return(
        <div className="eombg-div">
            <img className="brand-logo-eom" src={brandLogo} alt="brand logo"/>
            <div className="eom-box">
                <div className="row justify-content-center">
                    <div>
                        <h2>Evolution of Recorded Music</h2>
                        <img className="mt-3 ecom1" src={eomChart} alt="evolution of music chart"/>
                        <img className="mt-3 ecom2" src={eomChart2} alt="evolution of music chart"/>
                    </div>
                </div>
            </div>
        </div>
    );
}
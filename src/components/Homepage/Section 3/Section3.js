import React, { Fragment } from "react";
import "./section3.css";
import Button from "../../Layout/Button/Button";
import dashboardImage from "../../../assets/to-delete3.jpg";

export default function Section2(){
    return(
        <Fragment>
            <div className="section3-container">
                <div className="section3-card d-flex">
                    <div className="col">
                        <img className="dashboard-preview" src={dashboardImage} alt="dashboard preview" />
                    </div>
                    <div className="col d-flex flex-column align-items-end m-0 p-0">
                        <div className="d-flex flex-column grey-sub-card ps-4">
                            <div>
                                <h3><strong>Creating NFT <br/>is so easy</strong></h3>
                            </div>
                            <div className="mt-4">
                                <p>
                                    Making the process of Creating and
                                    Selling NFTs easy has always been our 
                                    main goal. Our website UI places things 
                                    that matter the most.
                                </p>
                            </div>
                            <div className="d-flex mt-4">
                                <div className="me-2 flex-fill">
                                    <Button>Create</Button>
                                </div>
                                <div className="ms-2 flex-fill">    
                                    <Button>Library</Button>
                                </div>    
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
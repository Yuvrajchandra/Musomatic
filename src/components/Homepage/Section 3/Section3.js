import React, { Fragment } from "react";
import "./section3.css";
import Button from "../../Layout/Button/Button";
import dashboardImage from "../../../assets/to-delete3.jpg";

export default function Section2(){
    return(
        <Fragment>
            <div className="section3-container">
                <div className="section3-card">
                    <div>
                        <img className="dashboard-preview" src={dashboardImage} alt="dashboard preview" />
                    </div>
                    <div className="d-flex align-items-end flex-column">
                        <div className="grey-sub-card d-flex flex-column ps-4">
                            <div>
                                <h3><strong>Creating NFT <br/>is so easy</strong></h3>
                            </div>
                            <div className="mt-4">
                                <p>
                                    Making the process of Creating and <br/>
                                    Selling NFTs easy has always been our <br />
                                    main goal. Our website UI places things <br />
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
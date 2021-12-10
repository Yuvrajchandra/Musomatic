import React, { Fragment } from "react";
import "./section2.css";

export default function Section2(){
    return(
        <Fragment>
            <div className="section2-container row m-0 justify-content-center">
                <div className="section2-box">
                    <div className="section2-bg-div">
                        <div className="section2-intro">
                            <h1><strong>New Generation of Music Collection</strong></h1>
                            {/* <h1>New Generation of Music Collection</h1> */}
                            <p className="mt-4">
                                We aim to uplift musicians by enabling them to create NFTs of thier 
                                music. We intend to provide them with royalties and recognition that 
                                they deserve but are not able to get enough from other sources.
                            </p>
                        </div>
                        <div className="green-card mt-5">
                            <h3><strong>Create and Sell your Music as an NFT</strong></h3>
                            <p className="mt-4">
                                We aim to uplift musicians by enabling them to create NFTs of thier 
                                music. We intend to provide them with royalties and recognition that 
                                they deserve but are not able to get enough from other sources.
                            </p>
                            <p className="mb-4">
                                We aim to uplift musicians by enabling them to create NFTs of thier 
                                music.
                            </p>
                        </div>
                        <div className="song-info-preview">
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
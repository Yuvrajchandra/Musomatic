import React, { Fragment, useState } from "react";
import Dropdown from "../UploadSongUtil/Dropdown";
import "./uploadSongDiv2.css";
import LyricsDetails from "./Div2Utils/LyricsDetails";

export default function UploadSongDiv2(){
    // STATE MANAGEMENT
    const [isLyrical, setIsLyrical] = useState(true);

    const handleRadioChange = (event)=>{
        if(event.target.value === "No"){
            setIsLyrical(false);
        }
        else{
            setIsLyrical(true);
        }
    }


    const typeOfSong = ["Bass boosted","Fast tempo"];
    return(
        <Fragment>
            <div className="create_nft_bg upload-song-div-2 ">
                {/* DIV HEADING */}
                <h3 className="create_nft_heading">Other Details</h3>
                <div className="div1-content">
                    {/* TYPE OF SONG */}
                    <div className="large-dropdown-div mb-3">
                        <p>Type of song</p>
                        <Dropdown optionsArray={typeOfSong} dropdownID="songTypeDropdown"/>
                    </div>
                    {/* LYRICS RADIO */}
                    <p>Lyrics</p>
                    <div>
                        <div className="form-check form-check-inline mr-3">
                            <input className="custom-radio-box form-check-input" type="radio" name="inlineRadioOptions1" id="lyricsRadio1" value="Yes" defaultChecked onChange={handleRadioChange}/>
                            <label className="form-check-label" htmlFor="lyricsRadio1">Yes</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="custom-radio-box form-check-input" type="radio" name="inlineRadioOptions1" value="No" id="lyricsRadio2" onChange={handleRadioChange}/>
                            <label className="form-check-label" htmlFor="lyricsRadio2">No</label>
                        </div>
                    </div>
                    {/* CONDITIONAL RENDERING OF LYRICS FROM HERE */}
                    {isLyrical? <LyricsDetails/>:null}
                    <p>Background</p>
                    <div className="form-group">
						<textarea
							className={"form-control background-area " + (isLyrical ? "lyrical-height" : "non-lyrical-height")}
							name="description-box"
						></textarea>
					</div>
                </div>
            </div>
        </Fragment>
    );
}
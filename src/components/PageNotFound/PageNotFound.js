import React, { Fragment } from "react";
import "./pageNotFound.css";

function PageNotFound() {
	return (
		<Fragment>
			<div className="page_not_found_container">
				<div className="wrapper">
					<div className="page-wrapper">
						<div className="needle-wrapper">
							<div className="base"></div>
							<div className="lines">
								<div className="vertical"></div>
								<div className="horizontal"></div>
							</div>
						</div>
						<div className="disk-wrapper">
							<div className="light-left"></div>
							<div className="light-right"></div>
							<div className="disk">
								<div className="half-circle-top"></div>
								<div className="half-circle-bottom"></div>
								<div className="separator"></div>
								<div className="inner-circle">
									<span>4</span>
									<div className="dot"></div>
									<span>4</span>
								</div>
							</div>
						</div>
					</div>
					<div className="error">Uh oh! Looks like we've skipped a beat </div>
				</div>
			</div>
		</Fragment>
	);
}

export default PageNotFound;

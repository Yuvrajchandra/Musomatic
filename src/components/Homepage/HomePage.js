import React, { Fragment } from "react";
import HeroSection from "./HeroSection/HeroSection.js";
import HowItWorks from "./HowItWorks/HowItWorks.js";
import Eom from "./EOM/Eom.js";
import Cta from "./CtaSection/Cta.js";

export default function HomePage() {
	return (
		<Fragment>
			<HeroSection />
			<HowItWorks />
			<Eom />
			<Cta isHomeSection={true} />
		</Fragment>
	);
}

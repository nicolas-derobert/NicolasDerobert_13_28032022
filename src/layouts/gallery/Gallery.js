import React from "react";
import "./Gallery.css";
import chatlogo from "../../assets/images/icon-chat.png";
import moneylogo from "../../assets/images/icon-money.png";
import securitylogo from "../../assets/images/icon-security.png";
import Feature from "../../components/feature/Feature";

function Gallery() {
	return (
		<div className="gallery">
			<Feature
				title="You are our #1 priority"
				description="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
				svg={chatlogo}
			>
			</Feature>
            <Feature
				title="More savings means higher rates"
				description="The more you save with us, the higher your interest rate will be!"
				svg={moneylogo}
			>
			</Feature>
            <Feature
				title="Security you can trust"
				description="We use top of the line encryption to make sure your data and money is always safe."
				svg={securitylogo}
			>
			</Feature>
		</div>
	);
}

export default Gallery;

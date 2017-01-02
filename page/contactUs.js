import React from 'react'

export class ContactUs extends React.Component{
	render(){
		return 	<div className="col-lg-12 p-0">
					<div className="BannerWrapper">
						<h1>Contact Us</h1>
					</div>
					<div className="col-lg-12 mt-40 mb-40">
						<div className="col-lg-4 conatctImage"><img src="./images/mahesh.jpg" /></div>
						<div className="col-lg-4 addressDetails">
							<h2>Address</h2>
							<p><b>HI-AMP Batteries</b>,<br />#2, srilakshmi nilaya, sumukha layout,<br />chikkallassandra, Bengalore-560061.</p>
							<p><b>Mobile: </b><a href="tel:+919741161500">+91 97411 61500</a> / <a href="tel:+919739525503">+91 97395 25503</a><br />
								<b>Email: </b><a href="mailto:maheshups@gmail.com">maheshups@gmail.com</a></p>
						</div>
					</div>
				</div>
	}
}
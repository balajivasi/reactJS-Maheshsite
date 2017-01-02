import React from 'react'
import {Link} from 'react-router'

export class Navigation extends React.Component{
	render(){
		return <nav className="navbar navbar-inverse">
				  <div className="container-fluid p-0">
				    <div className="navbar-header">
				      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
				        <span className="sr-only">Toggle navigation</span>
				        <span className="icon-bar"></span>
				        <span className="icon-bar"></span>
				        <span className="icon-bar"></span>
				      </button>
				    </div>
				    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
				      <ul className="nav navbar-nav">
				        <li><Link to="home" activeClassName="active">Home</Link></li>
				        <li><Link to="aboutUs" activeClassName="active">About Us</Link></li>
				        <li  className="dropdown"><Link className="dropdown-toggle" data-toggle="dropdown" to="products" activeClassName="active">Products</Link>
				        	<ul className="dropdown-menu">
				        		<li><Link to="products/lognLifeTubular" activeClassName="active">HI-AMP Long Life Tubular Batteries</Link></li>
				        		<li><Link to="products/premiumInverter" activeClassName="active">Premium Inverter Batteries</Link></li>
				        		<li><Link to="products/automotiveBatteries" activeClassName="active">Automotive Batteries</Link></li>
				        		<li><Link to="products/leadAcidBatteries" activeClassName="active">Lead Acid Batteries</Link></li>
				        	</ul>
				        </li>
				        <li><Link to="services" activeClassName="active">Services</Link></li>
				        <li><Link to="photoGallery" activeClassName="active">Photo Gallery</Link></li>
				        <li><Link to="contactUs" activeClassName="active">Contact Us</Link></li>
				      </ul>
				    </div>
				  </div>
				</nav>
	}
}



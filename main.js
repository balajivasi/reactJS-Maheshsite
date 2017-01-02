import React from 'react';
import {render} from 'react-dom';
import {hashHistory,Router,Route,IndexRoute} from 'react-router'
import {MainLayOut} from './page/mainLayOut'

import {HomePageMain} from './page/home/homePageMain'

import {ContactUs} from './page/contactUs'

import {AboutUs,Products,Services,PhotoGallery,LognLifeTubular,PremiumInverter,AutomotiveBatteries,LeadAcidBatteries} from './page/pages'

export class MainPage extends React.Component{
	render(){
		return 	<Router history={hashHistory}>
					<Route path="/" component={MainLayOut}>
						<IndexRoute component={HomePageMain} />
						<Route path="home" component={HomePageMain} />
						<Route path="aboutUs" component={AboutUs} />
						<Route path="products">
							<IndexRoute component={Products} />
							<Route path="lognLifeTubular" component={LognLifeTubular} />
							<Route path="premiumInverter" component={PremiumInverter} />
							<Route path="automotiveBatteries" component={AutomotiveBatteries} />
							<Route path="leadAcidBatteries" component={LeadAcidBatteries} />
						</Route>
						<Route path="services" component={Services} />
						<Route path="photoGallery" component={PhotoGallery} />
						<Route path="contactUs" component={ContactUs} />
					</Route>
				</Router>
	}
	
}
render(<MainPage />,mySri)
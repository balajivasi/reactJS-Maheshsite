import React from 'react';
import {PageLogo} from './header/logo'
import {HeaderContacts} from './header/headerContacts'
import {Navigation} from './header/navigation'

export class HeaderPanel extends React.Component{

	constructor(){
		super();
		this.state={}
	}
	render(){
		return <header className="mdl-layout__header mdl-layout__header--scroll">
				    <div className="col-lg-12 p-0">
				    	<PageLogo />
				    	<HeaderContacts />
				    </div>
				    <div className="col-lg-12 p-0">
				    	<Navigation />
				    </div>
				  </header>
	}
}
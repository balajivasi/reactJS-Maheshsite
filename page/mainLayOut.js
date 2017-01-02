import React from 'react';
import {HeaderPanel} from './header'
import {FooterPanel} from './footerPanel'
export class MainLayOut extends React.Component{
	render(){
		return 	<div className="container-fluid p-0">
				  <HeaderPanel />
				  <main className="col-lg-12 p-0">
				    <div className="page-content">{this.props.children}</div>
				  </main>
				  <FooterPanel />
				</div>
	}
}
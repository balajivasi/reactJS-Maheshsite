import React from 'react'
import {Link} from 'react-router'

export class PageLogo extends React.Component{
	render(){
		return <div className="col-lg-6 logo p-0"><Link to="home"><img src="./images/hi-amp.jpg" className="pageLogo" /></Link></div>
	}
}
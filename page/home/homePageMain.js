import React from 'react'
import {HomePageContent} from './homePageContent'
import {HomepageSlider} from './homepageSlider'
export class HomePageMain extends React.Component{
	render(){
		return 	<div className="col-lg-12 p-0">
					<div id="carousel-banner-generic" className="carousel slide" data-ride="carousel">
					  <ol className="carousel-indicators">
					    <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
					    <li data-target="#carousel-example-generic" data-slide-to="1"></li>
					    <li data-target="#carousel-example-generic" data-slide-to="2"></li>
					  </ol>
					  <div className="carousel-inner" role="listbox">
					    <div className="item active">
					      <img src="http://placehold.it/1350x350" />
					    </div>
					    <div className="item">
					      <img src="http://placehold.it/1350x350" />
					    </div>
					    <div className="item">
					      <img src="http://placehold.it/1350x350" />
					    </div>
					  </div>
					</div>
					<div className="col-lg-12 p-0">
						<div className="col-lg-7 col-md-7 col-sm-7 col-xs-12"><HomePageContent /></div>
						<div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 mb-20 pull-right p-0"><HomepageSlider /></div>
					</div>
					<script>
						$('#carousel-banner-generic').carousel()
					</script>
				</div>
	}
}
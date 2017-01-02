import React from 'react'

export class HomepageSlider extends React.Component{
	render(){
		return 	<div className="homePageSlider">
					<div id="carousel-slider" className="carousel slide" data-ride="carousel">
					  <div className="carousel-inner" role="listbox">
					    <div className="item active">
					      <img src="http://placehold.it/350x200" />
					    </div>
					    <div className="item">
					      <img src="http://placehold.it/350x200" />
					    </div>
					    <div className="item">
					      <img src="http://placehold.it/350x200" />
					    </div>
					  </div>
					</div>
					<script>
						$('#carousel-slider').carousel()
					</script>
				</div>
	}
}
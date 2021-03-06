/* =================================
  This is the Projects component
==================================== */

import React, {Component} from 'react';
import Number1 from '../img/mementoLogo.png';
import Number2 from '../img/floop.png';
import Number6 from '../img/potOgold01.png';
import Number9 from '../img/teamTreehouse01.png';
import Number12 from '../img/dataCamp.png';
import { Link } from 'react-router-dom';

import '../css/Projects.css';

class Projects extends Component {

  render(){
    return (
        <div className="gallery">
		<h2>Gallery</h2>
		<ul id="imageGallery">
			<li>
            <Link to="/memento">
                <img src={Number1} alt="Number 1" />
            </Link>
			</li>
			<li>
			<Link to="/floop">
				<img src={Number2} alt="Number 2" />
			</Link>
			</li>
			<li>
            <Link to="/potOgold">
				<img src={Number6} alt="Number 6" />
            </Link>
			</li>
			<li>	
			<a href="https://teamtreehouse.com/joseluislopez" target="_blank" rel="noopener noreferrer" >
				<img src={Number9} alt="Number 9" />
			</a>
			</li>
			<li>
			<a href="https://www.datacamp.com/profile/Jose10" target="_blank" rel="noopener noreferrer">
				<img src={Number12} alt="Number 12" />
			</a>
			</li>
		</ul>
	</div>
    );
  }
}

export default Projects;

import React, { Component } from 'react';

import Icon from '../icon';
import Arrow from '../arrow';

class LibraryCourse extends Component {
    render() {
        return (
        <div className="library-course">
            <div className="library-course__title-arrow">
              <label className="library-course__title">Problem Solving</label>
              { Icon('fas fa-check', 'library-course__icon') }
             </div>
             <Arrow className="library-course__arrow"/>
             {/* arrow component */}
             {/* action button component */}
            <div className="library-course__description">
                <label>Course Description</label>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id tincidunt elit. Proin at tristique ligula. Sed quis orci ac massa ultrices tempor. Nullam tortor erat, dictum sit amet ex sit amet, sollicitudin semper nisi.</p>

             </div>
                
        </div>
        )
    }
}

export default LibraryCourse;

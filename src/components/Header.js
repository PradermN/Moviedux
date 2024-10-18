import React from 'react'; // import react to have access to all his funtionalities
import '../styles.css'; // two points then we are in component folder

export default function header(){
    return(
        <div className='header'>
            <img className='logo' src='logo.png' alt='moviedux' />
            <h2 className='app-subtitle'>It's time for popcorn! Find your next movie here.</h2>
        </div>
    );
}

import React, { useEffect, useState } from 'react';

const Navbar = () => {
    const [isActive, setIsActive] = useState(false); // Use state to manage class toggle
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const windowScrollY = window.scrollY;
            setIsSticky(windowScrollY > 250);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleMenuClick = () => {
      setIsActive(!isActive); // Toggle isActive state
    };

    return (
            <header className={`${isSticky ? 'stick' : ''}`}>
		        <nav className="nav-container">
                    <div className="logo">
                        <a href="#">BONIAMIN</a>
                    </div>
			
                    <div className={`toggle-icon menu-icon toggle-menu-icon ${isActive? 'change' : ''}`} onClick={handleMenuClick}>
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3"></div>
                    </div>

                    <div className={`menu ${isActive? 'menu-bar-responsive' : ''}`}>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Course</a></li>
                            <li><a href="#">Service</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
		        </nav>
	        </header>
    );
};

export default Navbar;
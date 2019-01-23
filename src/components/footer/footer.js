import React from 'react';

//IMPORTANT! Add 'media' file to import material

const Footer = () => (
    
    <div>
        <footer className="pt-4">
            <div className="container">
                <ul className="list-unstyled list-inline text-center">
                    <li className="list-inline-item">
                        <a className="btn-floating btn-gh mx-1" target="_blank" href="https://github.com/Redfearn-Justin"><img className="footerIcon" src="assets/media/GitHub-Mark-Light-32px.png" alt="github"></img></a>
                    </li>
                    <li className="list-inline-item">
                        <a className="btn-floating btn-li mx-1" target="_blank" href="https://www.linkedin.com/in/redfearnjustin"><img className="footerIcon" src="assets/media/In-White-34px-R.png" alt="LinkedIn"></img></a>
                    </li> 
                    <li className="list-inline-item">
                        <a className="btn-floating btn-li mx-0" target="_blank" href="assets/media/JR_Resume.pdf" download><img className="footerIcon" src="assets/media/resume.png" alt="Resume"></img></a>
                    </li>
                </ul>
            </div>
            <div className="footer-copyright text-center py-3 text-white"> © &copy; 2019 Copyright
                <div className="text-right text-white credit"> Resume Icon made by <a href="https://www.flaticon.com/authors/smashicons">Smashicons</a></div>
            </div>
        </footer>
    </div>
);

export default Footer;
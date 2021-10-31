import style from './style.module.scss';
import Fade from 'react-reveal/Fade';

const Footer = () => {
    return (
        <footer className={style.container}>
            <div className={`${style['footer-company']} ${style.section}`}>
                <Fade top>
                    <h1 className={`${style.title} ${style.logo} logo`}>
                        Company
                    </h1>
                </Fade>
                <Fade bottom>
                    <p className={`${style.description} description`}>
                        This company is a tech focused company. We can help you
                        with any electronic equipment.
                    </p>
                </Fade>
            </div>

            <div className={`${style['footer-links']} ${style.section}`}>
                <Fade top>
                    <h1 className={`${style.title}`}>Links</h1>
                </Fade>
                <ul>
                    <Fade bottom cascade>
                        <a href="/">
                            <li>Home</li>
                        </a>
                        <a href="/services">
                            <li>Services</li>
                        </a>
                        <a href="/equipments">
                            <li>Equipments</li>
                        </a>
                        <a href="/contact">
                            <li>Opening hours</li>
                        </a>
                        <a href="/contact">
                            <li>Contact</li>
                        </a>
                    </Fade>
                </ul>
            </div>

            <div className={`${style['footer-contact']} ${style.section}`}>
                <Fade top>
                    <h1 className={`${style.title}`}>Contact</h1>
                </Fade>
                <Fade bottom cascade>
                    <ul>
                        <li>
                            <i
                                className={`fas fa-map-marker-alt ${style.icon}`}
                            ></i>
                            <p>CBD Belapur</p>
                        </li>

                        <li>
                            <i className={`fas fa-envelope ${style.icon}`}></i>
                            <p>n1shnt@company.com</p>
                        </li>

                        <li>
                            <i className={`fab fa-instagram ${style.icon}`}></i>
                            <p>@company</p>
                        </li>

                        <li>
                            <i className={`fas fa-phone-alt ${style.icon}`}></i>
                            <p>+91 900-429-2863</p>
                        </li>
                    </ul>
                </Fade>
            </div>

            <Fade top>
                <p className={style.copyright}>
                    ©{new Date().getFullYear()} Copyright: Company.com
                </p>
            </Fade>
        </footer>
    );
};

export default Footer;

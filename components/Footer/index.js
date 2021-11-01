import Fade from 'react-reveal/Fade';
import { Mail, Phone, Instagram } from 'react-feather';
import style from './style.module.scss';

const Footer = () => {
    return (
        <footer className={style.container}>
            <div className={`${style['footer-metro']} ${style.section}`}>
                <Fade top>
                    <h1 className={`${style.title} ${style.logo} logo`}>
                        Metro
                    </h1>
                </Fade>
                <Fade bottom>
                    <p className={`${style.description} description`}>
                        -- Description --
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
                            <li>
                                <i className={style.icon}>/</i>Home
                            </li>
                        </a>
                        <a href="/features">
                            <li>
                                <i className={style.icon}>/</i>Features
                            </li>
                        </a>
                        <a href="/downloads">
                            <li>
                                <i className={style.icon}>/</i>Downloads
                            </li>
                        </a>
                        <a href="/contact">
                            <li>
                                <i className={style.icon}>/</i>Contact
                            </li>
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
                            <Mail className={style.icon} />
                            <p>n1shnt@metro.com</p>
                        </li>

                        <li>
                            <Instagram className={style.icon} />
                            <p>@metro</p>
                        </li>

                        <li>
                            <Phone className={style.icon} />
                            <p>+91 900-429-2863</p>
                        </li>
                    </ul>
                </Fade>
            </div>

            <Fade top>
                <p className={style.copyright}>
                    ©{new Date().getFullYear()} Copyright: metro.com
                </p>
            </Fade>
        </footer>
    );
};

export default Footer;

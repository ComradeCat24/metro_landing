import Fade from 'react-reveal/Fade';
import style from './style.module.scss';

const Contact = () => {
    return (
        <Fade bottom cascade>
            <div className={style.contact}>
                <div className={style.email}>
                    <p className={style.title}>Need help?</p>
                    <span className={style.data}>n1shnt@metro.com</span>
                </div>

                <div className={style.phone}>
                    <p className={style.title}>Write down our phone</p>
                    <span className={style.data}>+91 900-429-2863</span>
                </div>
            </div>
        </Fade>
    );
};

export default Contact;

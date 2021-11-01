import style from './styleRev.module.scss';
import Fade from 'react-reveal/Fade';

const Services = () => {
    return (
        <div className={style.container} id="services">
            <Fade bottom>
                <img
                    src="https://i.stack.imgur.com/y9DpT.jpg"
                    className="icon"
                    alt="services"
                />
            </Fade>

            <Fade bottom cascade>
                <div className={style.content}>
                    <h1 className="title">Feature 2</h1>

                    <p className={`description ${style.description}`}>
                        We from Company work hard to solve the variety of our
                        customers problems. Like <span>maintence</span>,{' '}
                        <span>formatting</span> and <span>cleaning</span> your{' '}
                        <span>electronics</span>, we help you with{' '}
                        <span>xerox</span> and you’re always welcome to our{' '}
                        <span>Lan House</span>!
                    </p>
                </div>
            </Fade>
        </div>
    );
};

export default Services;

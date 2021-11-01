import style from './style.module.scss';
import Fade from 'react-reveal/Fade';

const Equipments = () => {
    return (
        <div className={style.container} id="equipments">
            <Fade bottom>
                <img
                    src="https://i.stack.imgur.com/y9DpT.jpg"
                    className="icon"
                    alt="equipments"
                />
            </Fade>

            <Fade bottom cascade>
                <div className={style.content}>
                    <h1 className="title">Feature 1</h1>

                    <p className={`description ${style.description}`}>
                        We work with any type of equipment, including the modern
                        ones! Like <span>desktop</span>, <span>notebooks</span>,{' '}
                        <span>printers</span> and <span>video-games</span>!
                    </p>
                </div>
            </Fade>
        </div>
    );
};

export default Equipments;

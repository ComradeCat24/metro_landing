import style from './style.module.scss';
import Fade from 'react-reveal/Fade';

const Presentation = () => {
    return (
        <div className={style.container} id="home">
            <h1 className="title">Welcome to Metro!</h1>

            <p className={`description ${style.description}`}>
                this is a <span>Description</span>!
            </p>

            <a href="#contact">
                <button className="btn">Download Now</button>
            </a>
        </div>
    );
};

export default Presentation;

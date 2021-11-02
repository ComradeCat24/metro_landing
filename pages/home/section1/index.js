import style from './style.module.scss';

const Presentation = () => {
    return (
        <div className={style.container} id="home">
            <h1 className="title">Welcome to Metro!</h1>

            <p className={`description ${style.description}`}>
                <span>Description</span> Here!
            </p>

            <a href="/downloads">
                <button className="btn">Download Now</button>
            </a>
        </div>
    );
};

export default Presentation;

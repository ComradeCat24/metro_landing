import Header from '../../components/Header';
import Footer from '../../components/Footer';

import style from './style.module.scss';

const index = () => {
    return (
        <main>
            <Header />
            <div className={style.container} id="home">
                <h1 className="title">Download For Android!</h1>

                <a href="#">
                    <button className="btn">V 1.0.0</button>
                </a>

                <p className={`description ${style.description}`}>
                    By installing <span>Metro</span>, you agree to our Terms and
                    Privacy Policy.
                </p>
            </div>
            <Footer />
        </main>
    );
};

export default index;

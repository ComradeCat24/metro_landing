import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Fade from 'react-reveal/Fade';
import Image from 'next/image';
import phoneMockup from '../../assets/mockup.png';
import style from './style.module.scss';

const Container = (props) => {
    return (
        // <div className={props.id % 2 == 0 ? style.container : style.container}>
        <div className={style.container}>
            <Fade bottom>
                <Image
                    src={phoneMockup}
                    width="550"
                    height="550"
                    layout="intrinsic"
                    alt="phoneMockup"
                />
            </Fade>

            <Fade bottom cascade>
                <div className={style.content}>
                    <h1 className="title">Feature {props.id}</h1>

                    <p className={`description ${style.description}`}>
                        {props.desc}
                    </p>
                </div>
            </Fade>
        </div>
    );
};

const Features = () => {
    return (
        <main>
            <Header />
            <Container
                id="1"
                desc="Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Justo eget magna
                        fermentum iaculis eu non. Suspendisse sed nisi lacus
                        sed. Magna eget est Lorem ipsum dolor."
            />
            <Container id="2" />
            <Container id="3" />
            <Footer />
        </main>
    );
};

export default Features;

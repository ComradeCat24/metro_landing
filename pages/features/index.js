import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Fade from 'react-reveal/Fade';
import Image from 'next/image';
import imgHome from '../../assets/Home.png';
import imgUserProfile from '../../assets/User Profile.png';
import style from './style.module.scss';

const Features = () => {
    // const [reverse, setReverse] = useState(false);

    const Container = ({ id, imgsrc, desc }) => {
        return (
            // <div className={`style.container`}>
            <div
                className={`${style['container']} ${
                    id % 2 === 0 ? style.reversed : style.notreversed
                }`}
            >
                <Fade bottom>
                    <Image
                        className={style.image}
                        src={imgsrc}
                        width="309"
                        height="570.75"
                        layout="fixed"
                        alt="phoneMockup"
                    />
                </Fade>

                <Fade bottom cascade>
                    <div className={style.content}>
                        <h1 className="title">Feature {id}</h1>

                        <p className={`description ${style.description}`}>
                            {desc}
                        </p>
                    </div>
                </Fade>
            </div>
        );
    };

    return (
        <main>
            <Header />

            <Container
                id="1"
                imgsrc={imgHome}
                desc="Lorem ipsum dolor sit amet, consectetur
				adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Justo eget magna
				fermentum iaculis eu non. Suspendisse sed nisi lacus
				sed. Magna eget est Lorem ipsum dolor."
            />

            <Container
                id="2"
                imgsrc={imgUserProfile}
                desc="Lorem ipsum dolor sit amet, consectetur
				adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Justo eget magna
				fermentum iaculis eu non. Suspendisse sed nisi lacus
				sed. Magna eget est Lorem ipsum dolor."
            />

            <Container
                id="3"
                imgsrc={imgHome}
                desc="Lorem ipsum dolor sit amet, consectetur
				adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Justo eget magna
				fermentum iaculis eu non. Suspendisse sed nisi lacus
				sed. Magna eget est Lorem ipsum dolor."
            />
            <Container
                id="4"
                imgsrc={imgUserProfile}
                desc="Lorem ipsum dolor sit amet, consectetur
				adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Justo eget magna
				fermentum iaculis eu non. Suspendisse sed nisi lacus
				sed. Magna eget est Lorem ipsum dolor."
            />

            <Footer />
        </main>
    );
};

export default Features;

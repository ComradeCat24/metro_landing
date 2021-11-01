import style from './style.module.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ContactData from './ContactData';
import Form from './Form';
import Message from './Message';

const Contact = () => {
    return (
        <main>
            <Header />
            <section className={style.container} id="contact">
                <div className={style.content}>
                    <Message />
                    <ContactData />
                    <Form />
                </div>
            </section>
            <Footer />
        </main>
    );
};

export default Contact;

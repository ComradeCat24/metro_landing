import Head from 'next/head';
import '../scss/style.scss';
import '../components/Header/burger.scss';

function MyApp({ Component, pageProps }) {
    return (
        <div>
            <Head>
                <title>Welcome to Metro!</title>

                {/* font-family */}
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;900&display=swap"
                    rel="stylesheet"
                />
                <script src="https://kit.fontawesome.com/4603725681.js"></script>
            </Head>
            <Component {...pageProps} />
        </div>
    );
}

export default MyApp;

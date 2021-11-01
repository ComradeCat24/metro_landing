import style from './style.module.scss';
import Panel from './Panel';

const Navbar = () => {
    return (
        <header className={style.header}>
            <h1 className="logo">Metro</h1>
            <Panel />
        </header>
    );
};

export default Navbar;

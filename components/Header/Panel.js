import { useState } from 'react';
import style from './style.module.scss';

const RightNav = () => {
    const [open, setOpen] = useState(false);

    const burger = () => (
        <div
            className={`burger burger-slide ${open && 'open'}`}
            onClick={() => setOpen(!open)}
        >
            <div className="burger-lines"></div>
        </div>
    );

    return (
        <>
            {/* Menu */}
            {burger()}

            <ul
                className={`${style['nav-list']} ${
                    open ? style.disappear : style.appear
                }`}
            >
                <a href="/" onClick={() => setOpen(!open)}>
                    <li>Home</li>
                </a>
                <a href="/features" onClick={() => setOpen(!open)}>
                    <li>Features</li>
                </a>
                <a href="/downloads" onClick={() => setOpen(!open)}>
                    <li>Downloads</li>
                </a>
                <a href="/contact" onClick={() => setOpen(!open)}>
                    <li>Contact</li>
                </a>
            </ul>
        </>
    );
};

export default RightNav;

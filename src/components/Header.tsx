import React from 'react';

const Header: React.FC = () => {
    return (
        <header
            className="w-full bg-background-dark py-6 px-6 flex flex-col sm:flex-row justify-center items-center gap-4 animate-fade-in"
            role="banner"
            aria-label="En-tête principal GB WebAssist"
        >
            <img
                src="/assets/logo-gbwebassist.png"
                alt="Logo GB WebAssist"
                className="h-28 w-auto transition-transform duration-300 ease-in-out hover:scale-110 drop-shadow-lg"
            />
            <div className="text-center sm:text-left">
                <p className="text-xl text-textlight opacity-80 mt-1">Des sites qui racontent votre histoire</p>
            </div>
        </header>
    );
};

export default Header;
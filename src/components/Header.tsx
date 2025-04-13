import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="w-full bg-background-dark py-6 px-6 flex flex-col sm:flex-row justify-center items-center gap-4">
            <img
                src="/assets/logo-gbwebassist.png"
                alt="Logo GB WebAssist"
                className="h-25 w-auto transition-transform duration-300 ease-in-out hover:scale-110"
            />
            <div className="text-center sm:text-left">
                <h1 className="text-2xl font-semibold text-accent1 transition-transform duration-300 ease-in-out hover:scale-110">
                GB WebAssist
                </h1>
                <p className="text-sm text-textlight transition-transform duration-300 ease-in-out hover:scale-110">Des sites qui racontent votre histoire</p>
            </div>
        </header>
    );
};

export default Header;
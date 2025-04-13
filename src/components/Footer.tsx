import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="w-full bg-background-dark text-textlight py-10 text-center text-sm">
        <p className="text-xl opacity-80">
            Une page signée avec amour et un peu de code par <span className="text-accent1 font-semibold">GB WebAssist</span> – 2025 ✨
        </p>
        </footer>
    );
};

export default Footer;
import React from 'react'

const Header: React.FC = () => {
    return (
        <header className="w-full bg-white shadow-sm py-4 px-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
                <img
                src="/src/assets/logo-gbwebassist.png"
                alt="Logo GB WebAssist"
                className="w-10 h-10 object-contain"
                />
                <div>
                <h1 className="text-xl font-bold">Gaëlle</h1>
                <p className="text-sm text-gray-500">Je crée des sites qui racontent votre histoire</p>
                </div>
            </div>
        </header>
    )
}

export default Header
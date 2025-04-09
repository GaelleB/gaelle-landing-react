import React from 'react'

const Header: React.FC = () => {
    return (
        <header className="w-full bg-white shadow-sm py-4 px-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
                <img
                src="/assets/logo-gbwebassist.png"
                alt="Logo GB WebAssist"
                className="w-40 h-40 object-contain"
                />
            </div>
        </header>
    )
}

export default Header
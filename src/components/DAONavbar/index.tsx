import React from 'react'

export default function index() {
    return (
        <div className="flex">
            <nav className="bg-gray-800 w-64 h-screen border-r-2 border-white border-double">
                <div className="p-4">
                    <div className="flex flex-col">
                        <button className="w-12 h-12 rounded-full mb-2 bg-white">
                            <img src={""} alt="Button 1" className="w-full h-full" />
                        </button>
                        <button className="w-12 h-12 rounded-full mb-2 bg-white">
                            <img src={""} alt="Button 2" className="w-full h-full" />
                        </button>
                        <button className="w-12 h-12 rounded-full mb-2 bg-white">
                            <img src={""} alt="Button 3" className="w-full h-full" />
                        </button>
                        <button className="w-12 h-12 rounded-full bg-white text-black text-lg">
                            +
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    )
}
import React from 'react';

const Footer = () => {
    return (
        <footer className="text-gray-800 border-t shadow-md bordery-gray-400 p-4 text-center">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-center items-center">
                    <p className="text-sm font-bold">&copy; {new Date().getFullYear()} Computer Science Students Society, University of Regina. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

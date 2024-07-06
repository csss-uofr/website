import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white p-4">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-center items-center">
                    <p className="text-sm">&copy; {new Date().getFullYear()} Computer Science Students Society, University of Regina. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

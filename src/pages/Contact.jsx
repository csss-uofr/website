import React from 'react';

const Contact = () => {
    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl lg:text-4xl border-b border-gray-200 pb-4 font-bold mb-4">Contact Us</h1>
            <p className="mb-4">
                Have questions or suggestions? Feel free to reach out to us using the form below or through the contact information provided.
            </p>
            <div>
                <div className='py-14'>
            <h1 className="text-3xl font-bold mb-4">Suggestion Box</h1>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdqQxENadQxbt6WKe6JhPgOp58ykqTf2LdWYc4FYQ9w9uDH-Q/viewform?embedded=true" width="100%" height="1200" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                </div>
            </div>
        </div>
    );
};

export default Contact;

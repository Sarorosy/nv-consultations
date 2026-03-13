import React from 'react';
import { Helmet } from 'react-helmet-async';

const DynamicTitle = ({ title, description }) => {
    const baseTitle = "Dr. Navin Diabetologist | NV Consultations";
    const fullTitle = title ? `${title} | ${baseTitle}` : baseTitle;
    const defaultDescription = "NV Consultations - Dr. Navin is a leading Diabetologist in Chennai, specializing in personalized diabetes care, thyroid management, and comprehensive health consultations.";

    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta name="description" content={description || defaultDescription} />
            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description || defaultDescription} />
            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description || defaultDescription} />
        </Helmet>
    );
};

export default DynamicTitle;

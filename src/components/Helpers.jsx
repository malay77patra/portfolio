import { useState } from 'react';

const Pimg = ({ src, alt, ...props }) => {
    const [isError, setIsError] = useState(false);

    const handleError = () => {
        setIsError(true);
    };

    const renderPlaceholder = () => {
        if (alt && alt.length > 0) {
            return alt[0].toUpperCase();
        }
        return '-';
    };

    return isError ? (
        <span className='review-text-pfp'>
            {renderPlaceholder()}
        </span>
    ) : (
        <img
            className='review-pfp'
            src={src}
            alt={alt}
            onError={handleError}
            {...props}
        />
    );
};

export { Pimg };

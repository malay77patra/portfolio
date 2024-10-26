
const Stars = ({ rating }) => {
    const totalStars = 5;
    const filledStars = Math.min(Math.max(rating, 0), totalStars);
    const emptyStars = totalStars - filledStars;

    return (
        <div className="stars">
            {[...Array(filledStars)].map((_, i) => (
                <span key={`filled-${i}`}>&#9733;</span>
            ))}
            {[...Array(emptyStars)].map((_, i) => (
                <span key={`empty-${i}`}>&#9734;</span>
            ))}
        </div>
    );
};

export { Stars };
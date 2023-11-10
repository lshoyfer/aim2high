export function CloseSvg({ id, className }) {
    return (
        <svg id={id} className={className} aria-label="X Close Icon" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 2L38 38M38 2L2 38" stroke="#6CABEB" strokeWidth="4" strokeLinecap="round"/>
        </svg>
    );
}
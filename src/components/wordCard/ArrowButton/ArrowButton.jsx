export default function ArrowButton ({image, disabled, onClick}) {
    return (
    <button className="arrows" disabled={disabled} onClick={onClick}><img src={image} alt="arrow"/></button>
    );
}
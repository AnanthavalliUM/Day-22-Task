import './card.css';

const cardComponent = (props) => {
    const {sectionCard} = props;
    return (
            <div className="card">
                <img src={sectionCard.iconUrl} className="image-font card-img-top" alt="vdv" />
                <div className="card-body">
                    <h2 className="card-title">{sectionCard.title}</h2>
                    <p className="card-text">{sectionCard.text}</p>
                </div>

            </div>
        
    );
}

export default cardComponent;
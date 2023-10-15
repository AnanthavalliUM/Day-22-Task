import Card from '../Card/card';
import './section.css';

const section = () => {
    const cards = [
        {
            iconUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG0Snp6L8PkbRmX1vm2FRi2EfU4tK2oc41Ww&usqp=CAU",
            title: "Fully Responsive",
            text: "This theme will look great on any device, no matter the size!"
        },
        {
            iconUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4kA9eMeKpLS_jmL8yxuPufqd6HosBRVpj8A&usqp=CAU",
            title: "Bootstrap 5 Ready",
            text: "Featuring the latest build of the new Bootstrap 5 framework!"
        },
        {
            iconUrl: "https://icon-library.com/images/easy-icon-png/easy-icon-png-4.jpg",
            title: "Easy to Use",
            text: "Ready to use with your own content, or customize the source files!"
        }
    ];

    return (
        <div className="section-space">
            <div className="container mt-5 mb-5">
                <div className="card-sec row justify-content-center">
                    {cards.map((card, index) => {
                        return <Card sectionCard = {card} key = {index} />
                    })}
                </div>
            </div>
        </div>
    );
}

export default section;
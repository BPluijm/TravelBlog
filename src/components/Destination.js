import Mountain1 from "..//assets/Taal-Volcano.jpg";
import Mountain2 from "..//assets/Taal-Volcano1.jpg";
import Mountain3 from "..//assets/pink lake.jpg";
import Mountain4 from "..//assets/peru.jpg";
import "./DestinationStyles.css";

const Destination = () => {
    return (
        <div className="destination" >
            <h1>Popular Destinations</h1>
            <p>Tours give you the opportunity to see a lot, within a time frame</p>
            <div className="first-des">
                <div className="des-text">
                 <h2>Taal Volcano, Batangas</h2>
                    <p>One of the most iconic views in Luzon, Mt Taal boasts a volcano inside a lake inside an island. If you fancy a closer look, the hike up to the crater is a mere 45 minutes and is easy enough for beginners. Guides will assist you most of the way, and you'll see the peculiar enviroment found on an active volcano, including volcanic rocks and steam vents. The hike can be dusty and hot, so plan for an early morning trip, and then unwind with come bulalo before heading back home.</p>                
                </div>
                
                <div className="image">
                    <img alt="Taal Vulcano" src={Mountain1}/>
                    <img alt="Taal Vulcano 1" src={Mountain2}/>
                </div>
            </div>
        </div>
    );
};

export default Destination;
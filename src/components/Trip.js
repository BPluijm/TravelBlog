import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "..//assets/jungle1.jpg";
import Trip2 from "..//assets/staircase.jpg";
import Trip3 from "..//assets/red-mountain.jpg";

function Trip(){
    return(
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover unique destinations using Google Maps.</p>
            <div className="tripcard">
                <TripData 
                image={Trip1}
                heading="Trip in Indonesia"
                text="Indonesia, officially the republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pacific oceans.
                It consists of over 17.000 islands, including Sumatra, Java, Sulawesi and parts of Borneo and New Guinea."
                />
                <TripData 
                image={Trip2}
                heading="Staircase to the Moon"
                text="In Broome, Western Austalia there is a phenomenon called the staircase to the moon. This is caused by seasonal tides that are left behind by the 
                ocean. The Staircase to the Moon can be seen with a full moon a couple of months per year."
                />
                <TripData 
                image={Trip3}
                heading="Red mountains"
                text="You can discover unique destinations using Google Maps."
                />
            </div>
        </div>
    );
}

export default Trip;
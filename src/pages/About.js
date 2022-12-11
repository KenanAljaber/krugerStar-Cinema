import "../styles/about.css"
import kenanPhoto from "../assets/kenanPhoto.png"
import ArielPhoto from "../assets/ArielPhoto.png"
const About = () => {
    return (
        <div>
            <div className="aboutContainer">
               <div className="photosContainer">
                    <img src={ArielPhoto}/>
                    <img src={kenanPhoto}/>
                    </div>

                <div className="discContainer">
                    We are a team of tow software developers Kenan and Ariel,
                     this site is our participation in the Kruger Star reality Front-end course, presented by Kruger Corp.
                     We hope you like it.
                </div>

                
                    
              

            </div>
        </div>
    );
}

export default About;
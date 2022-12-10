import "../styles/about.css"
import kenanPhoto from "../assets/kenanPhoto.png"
const About = () => {
    return (
        <div>
            <div className="aboutContainer">
               
                    <img />
               

                <div className="discContainer">
                    This is description of our team
                </div>

                
                    <img src={kenanPhoto}/>
              

            </div>
        </div>
    );
}

export default About;
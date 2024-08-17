import'./Sections.css';
import Section1 from '../Section1/Section1'
import IconSup from "../../assets/Images/icon-supervisor.svg";
import IconBuild from "../../assets/Images/icon-team-builder.svg";
import IconKarma from "../../assets/Images/icon-karma.svg";
import IconCalc from "../../assets/Images/icon-calculator.svg";
function Sections() {
    return (
        <div id="sectionstyle">
            <div id="card1">
                <Section1 
            Title = "Supervisor"
            Label = "Monitors activity to idenitfy project roadblocks"
            Icon = {IconSup} ></Section1>
            </div>
            

            <div id="midsec">
            
            <div id="card2">
                <Section1 
            Title = "Team Builder"
            Label = "Scans our talent network to create the optimal team for your project"
            Icon = {IconBuild} ></Section1>
            </div>

            <div id="card3">
                <Section1 
            Title = "Karma"
            Label = "Regular evaluates our talent to ensure quality"
            Icon = {IconKarma} ></Section1>
            </div>
            
            </div>

            <div id="card4">
                <Section1 
            Title = "Calcularor"
            Label = "Uses data from past project to provide better delivery estimates"
            Icon = {IconCalc} ></Section1>
            </div>
        </div> 
    );
}
export default Sections






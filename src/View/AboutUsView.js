import AboutUsAccordion from "../Components/AboutUsAccordion";
import AboutUsCoinList from "../Components/AboutUsCoinList";
import AboutUsIcons from "../Components/AboutUsIcons";
import AboutUsIntro from "../Components/AboutUsIntro";
import AboutUsProfile from "../Components/AboutUsProfile";
import AboutUsSlick from "../Components/AboutUsSlick";

export default function AboutUsView(){
    
  
    return(
       <>
        <AboutUsSlick/>
        <AboutUsIntro/>
        <AboutUsIcons/>
        <AboutUsProfile/>
        <AboutUsCoinList/>
        <AboutUsAccordion/>
       </>
    )
}
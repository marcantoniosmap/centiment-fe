import HomeAboutUs from "../Components/HomeAboutUs";
import HomeCoinTable from "../Components/HomeCoinTable";
import HomeTutorial from "../Components/HomeTutorial";
import HomeWidgetSlider from "../Components/HomeWidgetSlider";
export default function HomeView(){
    

    return(
       <>
       <HomeWidgetSlider/>
       <HomeCoinTable/>
       <HomeAboutUs/>
       <HomeTutorial/>
       </>
    )
}
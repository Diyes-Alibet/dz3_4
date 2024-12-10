import Description from "../../components/description/Description.jsx";
import style from "./AboutPage.module.css";

const AboutPage = () => {
    const data ={
        title:"title 2",
        description:"description 2",
    }
    return (
        <div className={style.aboutPage}>
            <Description data ={data}/>

        </div>
    )
}
export default AboutPage;
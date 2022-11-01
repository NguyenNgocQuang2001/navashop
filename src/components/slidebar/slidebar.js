import styles from "./slidebar.module.scss"
import { Slide, Fade } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'


const slideImages = [

    {
        url: 'slideshow/batman.jpg',
       
    },
    {
        url: 'slideshow/batman1.jpg',
      
    },
    {
        url: 'slideshow/batman2.jpg',
    },
]
function Slidebar() {

    return (

       <div className={styles.slidebar}>
            <Fade className={styles.slide__show}>
                {slideImages.map((slideImage, index)=> (
                    <div className={styles.each__slide__effect} key={index}>
                        <div style={{'backgroundImage': `url(${slideImage.url})`}}>
                        </div>
                    </div>
                ))}
            </Fade>
       </div>
    )
}

export default Slidebar
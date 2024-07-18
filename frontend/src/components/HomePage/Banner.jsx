import React from 'react'
import styles from "../../style/Banner.module.css"
import ShareIcon from "../../assets/icons/share.png"
import Bedroom from "../../assets/images/bedroom.jpg"
import B2 from "../../assets/images/b-2.jpg"
import B3 from "../../assets/images/b-3.jpeg"
import Menu from "../../assets/icons/3dotmenu.png"

const Banner = () => {

    const handleClick = () => {

    }
    return (
        <>
            <h3 className={styles.MobileHeading} >Comfy New Apt. in Pueblo Libre!</h3>
            <div className={styles.room_image}>
                <img id={styles.mobile_banner} src={Bedroom} className={styles.background_image} />
                <div className={styles.navigation}>
                    <img id={styles.show_all_photos} src={Menu} alt="show all icon" />
                    <div className={styles.banner_button}>
                        <button className={styles.share}>
                            <img id={styles.hostedIcon} src={ShareIcon} alt="Share" />
                        </button>
                        <button className="favorite">♡</button>
                    </div>

                </div>
                <div className={styles.image_count}>1 / 21</div>
            </div>

            <div className={styles.titlebar}>
                <h1 >Comfy New Apt. in Pueblo Libre!</h1>
                <div className={styles.rightSideTitlebar}>
                    <div className={styles.shareDiv}>
                        <img id={styles.shareIcon} src={ShareIcon} alt="share" />
                        <h4 id={styles.shareButton}><u id={styles.cursor_pointer}>Share</u></h4>

                    </div>
                    <div className={styles.saveDiv}>
                        <i id={styles.saveIcon} className="fas fa-heart"></i>
                        <h4 id={styles.saveButton}><u id={styles.cursor_pointer}>Save</u></h4>

                    </div>
                </div>

            </div>

            <div className={styles.gallerySection}>
                <img id={styles.bedroomImages1} src={Bedroom} alt="bedroom" />
                <div className={styles.secondImageSection}>
                    <div className={styles.secondImageSection1}>
                        <img id={styles.bedroomImages} src={B2} alt="bedroom2" />
                        <img id={styles.bedroomImages} src={B3} alt="bedroom3" />
                    </div>
                    <div className={styles.secondImageSection1}>
                        <img id={styles.bedroomImages} src={B2} alt="bedroom4" />
                        <div className={styles.overlay_container}>
                            <img id={styles.bedroomImages} src={B3} alt="bedroom5" />
                            <div className={styles.overlay}>

                                <span onClick={handleClick} className={styles.overlay_text}>Show all photos</span>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            <div class={styles.fullGallery} id="fullGallery">
                <button class="close" id="closeGallery">Close</button>
                <div class={styles.navigation_buttons}>
                    <button id="prevButton">Previous</button>
                    <button id="nextButton">Next</button>
                </div>
            </div>
        </>
    )
}

export default Banner
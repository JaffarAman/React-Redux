import React from 'react'
import NavbarApp from '../Components/DashBoardCmp/Navbar'
import styles from "./Dashboard.module.css"
const DashboardScreen = () => {
    return (
        <div>
            {/* <h1>Dashboard Screen</h1> */}
            <NavbarApp />

            <div className={styles.postSectionBox}>

                <div className={styles.postBox}>

                    <section className={styles.postCardHeading} >
                        <p>Create Post</p>
                    </section>
                    <section className={styles.postInputBox}>
                        <textarea name="" id="" cols="30" rows="3" placeholder="What's on your mind?"></textarea>
                    </section>
                    <section className={styles.postBtns}>
                        <button className={`btn btn-danger`}>Remove</button>
                        <button className={`btn btn-primary`}>POST</button>
                    </section>


                </div>

            </div>

        </div>
    )
}

export default DashboardScreen

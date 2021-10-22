import React , {useState} from 'react'
import NavbarApp from '../Components/DashBoardCmp/Navbar'
import styles from "./Dashboard.module.css"
const DashboardScreen = () => {
    const [postValue , setPostValue] = useState(null)
    console.log(postValue);
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
                        <textarea name="" id="" cols="30" rows="3" value={postValue} onChange={e=>setPostValue(e.target.value)} placeholder="What's on your mind?"></textarea>
                    </section>
                    <section className={styles.postBtns}>
                        <button className={`btn btn-danger`}>Remove</button>
                        <button className={`btn btn-primary`}>POST</button>
                    </section>


                </div>

            </div>

{/* 
            <section>

                <div>
                    <p>Jaffar Aman</p>
                </div>
                <div>
                    
                </div>
                <div></div>

            </section> */}



        </div>
    )
}

export default DashboardScreen

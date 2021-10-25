import React, { useState } from "react";
import styles from "./CardCmp.module.css";
import { FaUserCircle } from "react-icons/all";
import EditModal from "./EditModal";
const CardCmp = ({name , postCap , date,ind , editPostFun, deletePost}) => {
    
    return (
    <div className={styles.cardMainBox} >
      <section className={styles.cardHeader}>
        <div className={styles.iconBOx}>
          <FaUserCircle />
        </div>
        <div style={{borderLeft : "1px solid lightgrey" , padding : "5px"}}>
          <p>{name}</p>
          <p>{date}</p>
        </div>
      </section>
      <section className={styles.cardBody}>
       
        <p>
            {postCap}
        </p> 
        
      </section>
      <section className={styles.cardFooter}>
          {/* <button id={ind}  className="btn btn-primary">Edit</button> */}
          <EditModal editPostFun={editPostFun} indexNum={ind} placeHolder={postCap} />
          <button id={ind} onClick={(e)=>deletePost(e.target.id)} className="btn btn-danger">DELETE</button>
      </section>
    </div>
  );
};

export default CardCmp;

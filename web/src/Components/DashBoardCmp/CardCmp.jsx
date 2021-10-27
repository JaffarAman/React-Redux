import React, { useState } from "react";
import styles from "./CardCmp.module.css";
import { FaUserCircle  , MdPublic , RiGitRepositoryPrivateFill} from "react-icons/all";
import EditModal from "./EditModal";
const CardCmp = ({name , postCap , date,ind , editPostFun, deletePost , ownPost,privatePost}) => {
    
    return (
    <div className={styles.cardMainBox} >
      <section className={styles.cardHeader}>
        <div className={styles.iconBOx}>
          <FaUserCircle />
        </div>
        <div style={{borderLeft : "1px solid lightgrey" , padding : "5px"}}>
          <p>{name}</p>
          <p>{date} {privatePost ? <RiGitRepositoryPrivateFill /> : <MdPublic /> } </p>
        </div>
      </section>
      <section className={styles.cardBody}>
       
        <p>
            {postCap}
        </p> 
        
      </section>
      <section className={styles.cardFooter}>
          {/* <button id={ind}  className="btn btn-primary">Edit</button> */}

          {
              ownPost ? <>
                <EditModal editPostFun={editPostFun} indexNum={ind} placeHolder={postCap} />
                <button id={ind} onClick={(e)=>deletePost(e.target.id)} className="btn btn-outline-danger">DELETE</button>

              </> 
               : null
          }
      </section>
    </div>
  );
};

export default CardCmp;

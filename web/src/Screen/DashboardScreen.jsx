import React, { useState } from "react";
import CardCmp from "../Components/DashBoardCmp/CardCmp";
import NavbarApp from "../Components/DashBoardCmp/Navbar";
import styles from "./Dashboard.module.css";
const DashboardScreen = () => {
  const [inputValue, setInputValue] = useState("");
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("data")));
  const [indexNum, setIndexNum] = useState(null);
    console.log("index =>>" ,indexNum)
  console.log(user);
  const [post, setPost] = useState([
    {
      userName: "Jaff",
      postCapture:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis, culpa.",
      date: "1/11/2021",
      uid: "12345",
    },
    {
      userName: "Jaffar",
      postCapture:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis, culpa.",
      date: "10/11/2021",
      uid: "12345",
    },
  ]);
  console.log(post);
  const addPost = () => {
    setPost([
      ...post,
      {
        userName: user.firstName + user.lastName,
        postCapture: inputValue,
        date: new Date().toLocaleDateString(),
        uid: user._id,
      },
    ]);
  };
  const removeValue = () => {
    setInputValue("");
  };

  const editPost = (ind , editValue)=>{
        console.log("edit function" , ind)
        post[ind].postCapture = editValue
        post[ind].date = new Date().toLocaleDateString()
        setPost([...post])
    }

   const deletePost = (e)=>{
            console.log("deletePost" , e)
            post.splice(e , 1)
            setPost([...post])
   } 
  return (
    <div className="w-100">
      {/* <h1>Dashboard Screen</h1> */}
      <NavbarApp />

      <div className={styles.postSectionBox}>
        <div className={styles.postBox}>
          <section className={styles.postCardHeading}>
            <p>Create Post</p>
          </section>
          <section className={styles.postInputBox}>
            <textarea
              name=""
              id=""
              cols="30"
              rows="3"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="What's on your mind?"
            ></textarea>
          </section>
          <section className={styles.postBtns}>
            <button onClick={() => removeValue()} className={`btn btn-danger`}>
              Remove
            </button>
            <button onClick={() => addPost()} className={`btn btn-primary`}>
              POST
            </button>
          </section>
        </div>
      </div>

      <section className="row m-0">
        {post.map((val, ind) => {
          return (
            <div className="col-lg-3 col-md-6">
              <CardCmp
                name={val.userName}
                ind={ind}
                date={val.date}
                postCap={val.postCapture}
                indexNum={indexNum}
                setIndexNum={setIndexNum}
                editPostFun={editPost}
                deletePost={deletePost}
                    
              />
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default DashboardScreen;

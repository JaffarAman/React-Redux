import React, { useEffect, useState } from "react";
import CardCmp from "../Components/DashBoardCmp/CardCmp";
import NavbarApp from "../Components/DashBoardCmp/Navbar";
import styles from "./Dashboard.module.css";
import axios from "axios"
import {BASE_URI} from "../core"
import SwitchesSize from "../Components/Switch"

const DashboardScreen = () => {
  const [inputValue, setInputValue] = useState("");
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("data")));
  const [indexNum, setIndexNum] = useState(null);
  const [postSend ,setPostSend] = useState(false);
  const [checkHandle , setCheckHandle] = useState(false)
  const [icon , setIcon] = useState("fas fa-sun")
  const [darkTheme , setDarkTheme] = useState(false)

  console.log(checkHandle)
  console.log("index =>>" ,indexNum)
  console.log(user);
  
    useEffect(async ()=>{
        await axios.get(`${BASE_URI}/api/v1/post`)
        .then(res=>{
            console.log(res.data)
            setPost([...res.data])
        })
        .catch(err=>{
          console.log(err)
        })
    } , [postSend])
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

  // console.log(post);
  // console.log('post arhi hai , ' + )

  const addPost =async () => {
    const postObj = {
        userName: `${user.firstName} ${user.lastName}`,
        postCapture: inputValue,
        date: new Date().toLocaleDateString(),
        userId : user._id,
        privatePost : checkHandle
    }
    await axios.post(`${BASE_URI}/api/v1/post` , postObj )
    .then(res=>{
      console.log(res)
    })
    .catch(err=>{
      console.log(err)
    })
    setPostSend(!postSend)
    // setPost([
    //   ...post,
    //   {
    //     userName: user.firstName + user.lastName,
    //     postCapture: inputValue,
    //     date: new Date().toLocaleDateString(),
    //     uid: user._id,
    //   },
    // ]);
  };
  const removeValue = () => {
    setInputValue("");
  };

  const editPost = (ind , editValue)=>{
    const postKey = {
      uPostId : post[ind]._id
      }
    console.log(postKey)
    axios.put(`${BASE_URI}/api/v1/post` , {postCap : editValue , uPostId : postKey.uPostId})
    .then(res=>{
      console.log(res)
    })
    .catch(err=>{
      console.log(err)
    })
    setPostSend(!postSend)

    // console.log("edit function" , ind)
        // post[ind].postCapture = editValue
        // post[ind].date = new Date().toLocaleDateString()
        // setPost([...post])
    }

   const deletePost = async (e)=>{
    const postKey = {
      uPostId :   post[e]._id
    }   
    console.log(postKey)
    await axios.delete(`${BASE_URI}/api/v1/post/${postKey.uPostId}`   )
      .then(res=>console.log(res))
      .catch(err=>console.log(err))
    setPostSend(!postSend)
      
            // console.log("deletePost" , e)
            // post.splice(e , 1)
            // setPost([...post])
   } 
   const changeTheme = ()=>{
    if(!darkTheme){
      setIcon("fas fa-moon")
       setDarkTheme(true)

    }else{
      setIcon("fas fa-sun")
      setDarkTheme(false)

    }
   }
  return (
    <div className={`w-100 ${styles.dashBoardMainBox}`} style={{backgroundColor : darkTheme ? "#343a40" : '#E0EAFC' }} >
      {/* <h1>Dashboard Screen</h1> */}
      <NavbarApp icon={icon} changeTheme={changeTheme}/>

      <div className={`${styles.postSectionBox}`}>
        <div className={darkTheme? `${styles.postBox} ${styles.postBoxDark}` : styles.postBox }>
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
            <SwitchesSize  checkHandle={checkHandle} setCheckHandle={setCheckHandle}/>
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
            console.log(val.privatePost)
              
              return (
                  
                    user._id === val.userId ?
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
                    ownPost={true}
                    privatePost={val.privatePost}   
                  />
                </div> : 
                 !val.privatePost ?
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
                  ownPost={false}
                  privatePost={val.privatePost}   

                      
                />  </div> : null  
                  
                
              );  
            
          
        })}
      </section>
    </div>
  );
};

export default DashboardScreen;

import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import  "./EditModal.css"
const EditModal = ({placeHolder , editPostFun ,indexNum}) => {
    const [show, setShow] = useState(false);
    const [textValue , setTextValue] = useState("")
    const [errorBorder ,setErrorBorder] = useState(false)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const saveChange = ()=>{
        if(textValue.length > 3){
            handleClose();
            editPostFun(indexNum , textValue)
        }else{
                setErrorBorder(true)
        }
    }
    return (
        <div>
        <>
      <button className="btn btn-primary" onClick={handleShow}>
        Edit
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Post Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-0">
            <textarea name="" style={{border :errorBorder ? "1px solid red" : "none"}} placeholder={placeHolder} id=""
            onChange={e=>setTextValue(e.target.value)}
            className="w-100 h-100  modalTextArea"></textarea>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>saveChange()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>      
        </div>
    )
}

export default EditModal

// import logo from './logo.svg';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './add.css';

import { BsXDiamondFill } from 'react-icons/bs';
import { FaChevronDown } from 'react-icons/fa';
import { AiOutlineDelete, } from 'react-icons/ai';
import { InputGroup,FormControl,Button,Container,Col,Row,Form, NavLink } from 'react-bootstrap';


function App() {
  const [count, setCount] = useState([""]);
  const [check, setCheck] = useState(false);
  const [hideBtn, setHideBtn] = useState(false);
  const add =()=>{
    setCount([...count,""])
    }
    
    const deleteLine = (id)=>{
      id !==0 ?
      setCount(count.filter((t,index)=> index !==id)) && setHideBtn(!hideBtn)
      :
      console.log(id)
    }
    
    
    // const addId = (id)=>{
    //   setAddIds([...addIds,id])
    //   // console.log(addIds)
    // }
    const hideBtnFunction=(id)=>{
      setHideBtn(!hideBtn)
      
      // console.log(hideBtn)
    }

  return (
    <div className="main-container" >
      <h5 className="title"><BsXDiamondFill className="icon" />Media Owner List</h5>
      <div className="border-container">
   
       <Container fluid  className={ check  ? "input-container changeBorder" : "input-container"}   >
 
  <Row  className="justify-content-start row-1">
    <Col xl={10} lg={10} md={10} sm={10} xs={10} className="col-checkBox">
    <Form.Group  controlId="formBasicCheckbox">
    <Form.Check className="check-box" onChange={(e)=>setCheck(e.target.checked)} type="checkbox" label="Clear Channel" />
  </Form.Group>
    </Col>
    <Col xl={2} lg={2} md={2} sm={2} xs={2} >
      
    <Button onClick={()=>hideBtnFunction()}  className={hideBtn  ? "down" : "toggle-btn"}>
<FaChevronDown  />
</Button>


    </Col>
  </Row>
<div className={hideBtn  ? "row-2" :  "hide"}>
  {count.map((t,index)=>{
    return(
        <div key={index}>
            <Row>

  <Col  xl={4} lg={4} md={4} sm={6} xs={6} >
  <Form.Group>
  <Form.Control as="select">
    <option>LED Ekraan</option>
  </Form.Control>
  
</Form.Group>
  </Col>
  <Col xl={4} lg={4} md={4} sm={6} xs={6}>
  <Form.Group>
  <Form.Control as="select">
    <option>Mahoosudustus</option>
  </Form.Control>
  

</Form.Group>
  </Col>
  <Col className="changes" xl={3} lg={3} md={3} sm={10} xs={10}>
  <Form.Group>
  <InputGroup className="mb-2 mr-sm-2">
    <FormControl id="inlineFormInputGroupUsername2" placeholder="Allahindulus" />
    <InputGroup.Prepend>
      <InputGroup.Text>@</InputGroup.Text>
    </InputGroup.Prepend>
  </InputGroup>
</Form.Group>
  </Col>
  <Col className="changes" xl={1} lg={1} md={1} sm={2} xs={2} >
  <InputGroup onClick={(e)=>deleteLine(index)}  className="mb-2 mr-sm-2 delete">
    <InputGroup.Prepend>
      <InputGroup.Text> <AiOutlineDelete className="delete-icon" /></InputGroup.Text>
    </InputGroup.Prepend>
  </InputGroup>
</Col>
</Row>

        </div>
   
   ) 
   
})}
  <NavLink className="add-line" onClick={(e)=>add(e)}>Lisa Rohkem</NavLink>

</div>

</Container>
         </div>
       
     
    </div>
  );
}

export default App;

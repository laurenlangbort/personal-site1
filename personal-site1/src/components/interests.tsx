
import React from 'react';
import "./interests.css"; 
import yoga from '../assets/Yoga.png'; 
import drawing from '../assets/Drawing.png'; 
import writing from '../assets/Writing.png'; 
import dancing from '../assets/dance.png';


export default function Interest() {
  return (
    <div 
      id="interest" 
      className="pb-5"
      style={{
        backgroundColor: "#e7e7e7",
        marginTop: "0",
        // height: "100vh",
        fontFamily: "public-sans",
      }}
    > 
    <div className="pt-5"> 
        <p className="ps-md-3 ps-0 d-flex justify-content-center justify-content-md-start fw-semibold" style={{ fontSize: "30px", color: "#340545",  paddingTop: "10vh",}}>If I'm not coding, I'm ... </p>
    </div>
      <div className="d-flex flex-row py-5">
        <div className="container text-center">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4">
            <div className="col d-flex flex-row justify-content-center align-items-center">
                <p className="align-self-center l-space-extra">Writing</p> 
                <img src={writing} alt="" width="100" className="ps-2 align-self-center"/>

            </div>
            <div className="col d-flex flex-row justify-content-center align-items-center">
            <p className="align-self-center l-space-extra">Drawing</p> 
                <img src={drawing} alt="" width="100" className="ps-2 align-items-center"/>
            </div>
            <div className="col d-flex flex-row justify-content-center align-items-center">
            <p className="align-self-center l-space-extra">Yoga</p> 
                <img src={yoga} alt="" width="100" className="ps-2 align-items-center"/>
            </div> 
            <div className="col d-flex flex-row justify-content-center align-items-center">
            <p className="align-self-center l-space-extra">Dancing</p> 
                <img src={dancing} alt="" width="100" className="ps-2 align-items-center"/>
            </div>
          </div>
        </div>
      </div> 
      {/* <div> 
        <p>Read My Writings On The Tufts Observer</p>
      </div> */}
    </div>
  );
}

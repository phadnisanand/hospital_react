import React from 'react';
import '../styles/Home.css';

const Home = () => {
    return (
        <>
            <img height="400px" width="100%" src='https://media.istockphoto.com/id/482858629/photo/doctors-hospital-corridor-nurse-pushing-gurney-stretcher-bed.jpg?s=612x612&w=0&k=20&c=unfa1VMpYQGt3PyrkuvxN1JkX7FRk-w0knEFCqjTugg='></img>
            <div className="home-container">
            <h1 className="welcome-title">Welcome to Our Mapro Hospital</h1>
            <p className="welcome-message">
                We are dedicated to providing the best care for our patients. Schedule your appointment today!
            </p>
            <div className="animation-container">
                <div className="animated-box">Patient Registration</div>
                <div className="animated-box">Appointment Scheduling</div>
                <div className="animated-box">Consultation</div>
                <div className="animated-box">Medical Records</div>
            </div>
        </div>
   
        </>
     );
};

export default Home;

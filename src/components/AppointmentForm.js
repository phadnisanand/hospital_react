import React, { useState } from 'react';
import '../styles/Appointment.css';

const AppointmentForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        patientName: '',
        appointmentDate: '',
        time: '',
        doctor: '',
        reason: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Appointment Details:', formData);
        onSubmit(formData); // Pass data to parent component
        setFormData({
            patientName: '',
            appointmentDate: '',
            time: '',
            doctor: '',
            reason: ''
        });
    };

    return (
        <div className="appointment-form">
            <h2>Schedule an Appointment</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Patient Name:</label>
                    <input type="text" name="patientName" value={formData.patientName} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Appointment Date:</label>
                    <input type="date" name="appointmentDate" value={formData.appointmentDate} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Time:</label>
                    <input type="time" name="time" value={formData.time} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Doctor:</label>
                    <input type="text" name="doctor" value={formData.doctor} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Reason:</label>
                    <textarea name="reason" value={formData.reason} onChange={handleChange} required></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AppointmentForm;

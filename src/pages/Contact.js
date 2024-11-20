import React,{ useState } from 'react';
import AppointmentForm from '../components/AppointmentForm';

const Contact = () => {
    const [appointments, setAppointments] = useState([]);

    const handleAppointmentSubmit = (data) => {
        setAppointments([...appointments, data]);
    };

    return (
        <div>
            <h2>Contact Us</h2>
            <p>If you have any questions, feel free to reach out!</p>
            <AppointmentForm onSubmit={handleAppointmentSubmit} />

            {appointments.length > 0 && (
                        <div className="appointments-table">
                            <h2>Scheduled Appointments</h2>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Patient Name</th>
                                        <th>Date</th>
                                        <th>Time</th>
                                        <th>Doctor</th>
                                        <th>Reason</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {appointments.map((appointment, index) => (
                                        <tr key={index}>
                                            <td>{appointment.patientName}</td>
                                            <td>{appointment.appointmentDate}</td>
                                            <td>{appointment.time}</td>
                                            <td>{appointment.doctor}</td>
                                            <td>{appointment.reason}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
        </div>

        
    );
};

export default Contact;

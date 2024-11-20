import React, { useEffect, useState } from 'react';
import { fetchPatientById } from '../api/fakeApi';
import '../styles/PatientDetails.css';

const PatientDetails = ({ patientId }) => {
    const [patient, setPatient] = useState(null);

    useEffect(() => {
        const getPatient = async () => {
            const data = await fetchPatientById(patientId);
            setPatient(data);
        };
        getPatient();
    }, [patientId]);

    if (!patient) {
        return <div>Loading...</div>;
    }

    return (
        <div className="patient-details">
            <h2>Patient Details</h2>
            <p><strong>Name:</strong> {patient.name}</p>
            <p><strong>Age:</strong> {patient.age}</p>
            <p><strong>Disease:</strong> {patient.disease}</p>
            <p><strong>Contact:</strong> {patient.contact}</p>
            <p><strong>Address:</strong> {patient.address}</p>
            <p><strong>Admission Date:</strong> {patient.admissionDate}</p>
            <p><strong>Medical History:</strong> {patient.history}</p>
        </div>
    );
};

export default PatientDetails;

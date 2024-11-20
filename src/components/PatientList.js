import React, { useEffect, useState } from 'react';
import { fetchPatients } from '../api/fakeApi';
import '../styles/PatientList.css';

const PatientList = ({ onSelectPatient }) => {
    const [patients, setPatients] = useState([]);

    useEffect(() => {
        const getPatients = async () => {
            const data = await fetchPatients();
            setPatients(data);
        };
        getPatients();
    }, []);

    return (
        <div className="patient-list">
            <h2>Patients</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Disease</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {patients.map(patient => (
                        <tr key={patient.id}>
                            <td>{patient.name}</td>
                            <td>{patient.age}</td>
                            <td>{patient.disease}</td>
                            <td>
                                <button onClick={() => onSelectPatient(patient.id)}>View Details</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PatientList;

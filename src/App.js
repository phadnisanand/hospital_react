// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import PatientList from './components/PatientList';
import PatientDetails from './components/PatientDetails';
// import AppointmentForm from './components/AppointmentForm';
import Footer from './components/Footer';
// import About from './pages/About';
import Contact from './pages/Contact';
import './App.css';
import Home from './pages/Home';

const App = () => {
    const [selectedPatientId, setSelectedPatientId] = useState(null);
 
    return (
        <Router>
            <div className="App">
                <Header />
                <main>
                    <Routes>
                        <Route path="/about" element={
                            <div>
                                {selectedPatientId ? (
                                    <PatientDetails patientId={selectedPatientId} />
                                ) : (
                                    <PatientList onSelectPatient={setSelectedPatientId} />
                                )}
                                
                            </div>
                        } />
                        <Route path="/" element={<Home />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                    
                </main>
                <Footer />
            </div>
        </Router>
    );
};

export default App;

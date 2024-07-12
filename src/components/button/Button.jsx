import React, { useState } from 'react';
import './button.css';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const carCompanies = ["Toyota", "Honda", "Ford", "Chevrolet", "BMW", "Mercedes", "Audi", "Volkswagen", "Nissan", "Hyundai"];

const Button = (props) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <div>
            <button className="mybnt" onClick={openModal}>ENQUIRE NOW</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                className="modal"
                overlayClassName="overlay"
            >
                <button className="close-btn" onClick={closeModal}>X</button>
                <h2>Enquiry Form</h2>
                <form className="enquiry-form">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="mobile">Mobile Number</label>
                        <input type="tel" id="mobile" name="mobile" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <input type="text" id="address" name="address" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="company">Vehicle Company</label>
                        <select id="company" name="company" required>
                            {carCompanies.map((company, index) => (
                                <option key={index} value={company}>{company}</option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="vehicle">Vehicle Name</label>
                        <input type="text" id="vehicle" name="vehicle" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="year">Model Year</label>
                        <input type="number" id="year" name="year" min="1900" max="2024" step="1" required />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </Modal>
        </div>
    );
}

export default Button;

import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './EditInvitationForm.css';


const EditInvitationForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        groomName: '',
        brideName: '',
        date: '',
        time: '',
        location: '',
        description: '',
        music: null,
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Здесь может быть API вызов для сохранения данных
        navigate(`/confirmation`, { state: { formData } });
    };

    return (
        <div className="edit-form-container">
            <h2>Создать новое пригласительное</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Имя жениха:
                    <input type="text" name="groomName" value={formData.groomName} onChange={handleChange} required />
                </label>
                <label>
                    Имя невесты:
                    <input type="text" name="brideName" value={formData.brideName} onChange={handleChange} required />
                </label>
                <label>
                    Дата:
                    <input type="date" name="date" value={formData.date} onChange={handleChange} required />
                </label>
                <label>
                    Время:
                    <input type="time" name="time" value={formData.time} onChange={handleChange} required />
                </label>
                <label>
                    Место:
                    <input type="text" name="location" value={formData.location} onChange={handleChange} required />
                </label>
                <label>
                    Описание:
                    <textarea name="description" value={formData.description} onChange={handleChange} required />
                </label>
                <label>
                    Музыка:
                    <input type="file" name="music" accept="audio/*" onChange={handleChange} required />
                </label>
                <button type="submit">Сохранить</button>
            </form>
        </div>
    );
};

export default EditInvitationForm;

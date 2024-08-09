import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const EditInvitation = () => {
  const { id } = useParams();
  const [invitation, setInvitation] = useState(null);

  useEffect(() => {
    const fetchInvitation = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/invitations/${id}`);
        setInvitation(response.data);
      } catch (error) {
        console.error('Error fetching invitation:', error);
      }
    };

    fetchInvitation();
  }, [id]);

  if (!invitation) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Редактировать Пригласительное</h1>
      <p>Имя жениха: {invitation.details.title}</p>
      <p>Дата: {invitation.details.date}</p>
      <p>Время: {invitation.details.time}</p>
      <p>Место: {invitation.details.location}</p>
      <p>Описание: {invitation.details.description}</p>
      <div className="container mx-auto p-4">
                    <header className="flex flex-col md:flex-row justify-between items-center py-4 border-b">
                        <div className="text-2xl font-bold">СЕГОДНЯ</div>
                        <nav className="space-x-4 mt-4 md:mt-0">
                            <a href="#" className="text-gray-600">Мобильное приглашение</a>
                            <a href="#" className="text-gray-600">Предварительное видео</a>
                            <a href="#" className="text-gray-600">Благодарственное видео</a>
                            <a href="#" className="text-gray-600">Предложение</a>
                            <a href="#" className="text-gray-600">История создания</a>
                            <a href="#" className="text-gray-600">Событие</a>
                            <a href="#" className="text-gray-600">Отзывы клиентов</a>
                        </nav>
                        <div className="space-x-4 mt-4 md:mt-0">
                            <span className="text-gray-600">ac2720706</span>
                            <a href="#" className="text-gray-600">Выйти</a>
                        </div>
                    </header>
                    <main className="flex flex-col md:flex-row mt-8">
                        <div className="w-full md:w-2/3 bg-white p-8 shadow-md">
                            <div className="text-center">
                                <div className="text-xl font-bold">24 | 07 | 18</div>
                                <div className="text-gray-500">ЧЕТВЕРГ</div>
                                <div className="mt-8 bg-gray-200 h-64 flex items-center justify-center">
                                    <i className="fas fa-image text-4xl text-gray-400"></i>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 pl-0 md:pl-8 mt-8 md:mt-0">
                            <div className="bg-white p-4 shadow-md mb-8">
                                <div className="flex justify-between items-center">
                                    <div className="font-bold">Тема</div>
                                    <i className="fas fa-chevron-down"></i>
                                </div>
                                <div className="mt-4">
                                    <div className="flex items-center space-x-2">
                                        <span>Тема</span>
                                        <select className="border p-1">
                                            <option>Современная НОВАЯ</option>
                                        </select>
                                    </div>
                                    <div className="flex items-center space-x-2 mt-4">
                                        <span>Шрифт</span>
                                        <select className="border p-1">
                                            <option>Гоунготи</option>
                                        </select>
                                        <select className="border p-1">
                                            <option>Обычный</option>
                                        </select>
                                    </div>
                                    <div className="mt-4">
                                        <div className="flex items-center space-x-2">
                                            <input type="checkbox" checked className="form-checkbox" />
                                            <span>Запретить увеличение приглашения</span>
                                        </div>
                                        <div className="flex items-center space-x-2 mt-2">
                                            <input type="checkbox" checked className="form-checkbox" />
                                            <span>Эффект появления при прокрутке</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white p-4 shadow-md">
                                <div className="flex justify-between items-center">
                                    <div className="font-bold">Введение</div>
                                    <i className="fas fa-chevron-down"></i>
                                </div>
                                <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4">
                                    <div className="bg-gray-200 h-32 flex items-center justify-center">
                                        <i className="fas fa-image text-2xl text-gray-400"></i>
                                    </div>
                                    <div className="bg-gray-200 h-32 flex items-center justify-center">
                                        <i className="fas fa-image text-2xl text-gray-400"></i>
                                    </div>
                                    <div className="bg-gray-200 h-32 flex items-center justify-center">
                                        <i className="fas fa-image text-2xl text-gray-400"></i>
                                    </div>
                                    <div className="bg-gray-200 h-32 flex items-center justify-center">
                                        <i className="fas fa-image text-2xl text-gray-400"></i>
                                    </div>
                                    <div className="bg-gray-200 h-32 flex items-center justify-center">
                                        <i className="fas fa-image text-2xl text-gray-400"></i>
                                    </div>
                                    <div className="bg-gray-200 h-32 flex items-center justify-center">
                                        <i className="fas fa-image text-2xl text-gray-400"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
    </div>
  );
};

export default EditInvitation;

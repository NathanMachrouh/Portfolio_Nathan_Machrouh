import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Accueil from '../pages/Accueil';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Modal from '../components/Modal';
import Documents from '../components/Documents';
import Contact from '../components/Contact';
import '../styles/__Styles.scss';
import "xp.css/dist/XP.css";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState("");
  const [modalId, setModalId] = useState("");

  const openModal = (title, content, id) => {
    setModalTitle(title);
    setModalContent(content);
    setModalId(id);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Header openModal={openModal} />
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={modalTitle}
        content={modalContent}
        id={modalId}
      />
      <Footer />
    </Router>
  );
}

export default App;

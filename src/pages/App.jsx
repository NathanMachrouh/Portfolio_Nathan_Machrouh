import { BrowserRouter as Router, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Modal from '../components/Modal';
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

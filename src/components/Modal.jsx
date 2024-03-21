import Modal from 'react-modal';
import React, { useRef, useState, useEffect } from 'react';

const CustomModal = ({ isOpen, onClose, title, content, id }) => {
  const [isDragging, setIsDragging] = useState(false);
  const modalRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [modalStartPos, setModalStartPos] = useState({ x: 0, y: 0 });
  const footerRef = useRef(null);

  useEffect(() => {
    if (isOpen && modalRef.current) {
    }
  }, [isOpen]);

  useEffect(() => {
    const savedPosition = localStorage.getItem(`modalPosition_${id}`);
    if (savedPosition) {
      setPosition(JSON.parse(savedPosition));
    }
  }, [id]);

  const handleMouseDown = (e) => {
    if (!isDragging) {
      setIsDragging(true);
      const modalRect = modalRef.current.getBoundingClientRect();
      setModalStartPos({
        x: e.clientX - modalRect.left,
        y: e.clientY - modalRect.top,
      });
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const x = e.clientX - modalStartPos.x;
      let y = e.clientY - modalStartPos.y;
      const maxX = window.innerWidth - modalRef.current.offsetWidth;
      const maxY = window.innerHeight - modalRef.current.offsetHeight;

      const footerHeight = 315; 
      const maxBottom = window.innerHeight - modalRef.current.offsetHeight - footerHeight;

      y = Math.min(maxBottom, Math.max(0, y));

      setPosition({
        x: Math.max(0, Math.min(x, maxX)),
        y: y,
      });
    }
  };

  const handleMouseUp = () => {
    if (isDragging) {
      setIsDragging(false);
      localStorage.setItem(`modalPosition_${id}`, JSON.stringify(position));
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="window modal"
      overlayClassName="Overlay"
      id={id}
      appElement={document.getElementById("root")}
      style={{
        content: {
          top: `${position.y}px`,
          left: `${position.x}px`,
        }
      }}
    >
      <div
        className="title-bar title-bar-controls"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        ref={modalRef}
        style={{ cursor: isDragging ? "grabbing" : "grab" }}
      >
        <p className="title-bar-text">{title}</p>
        <div className="title-bar-controls">
          <button aria-label="Minimize"></button>
          <button aria-label="Restore"></button>
          <button aria-label="Close" onClick={onClose}></button>
        </div>
      </div>
      <div className="modal-content">{content}</div>
      <div ref={footerRef}></div>
    </Modal >
  );
}

export default CustomModal;

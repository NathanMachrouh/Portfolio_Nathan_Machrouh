import Modal from 'react-modal';
import React, { useRef, useState, useEffect } from 'react';

const CustomModal = ({ isOpen, onClose, title, content, id }) => {
  const [isDragging, setIsDragging] = useState(false);
  const modalRef = useRef(null);
  const [modalStartPos, setModalStartPos] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState({ x: 700, y: 300 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isDragging) {
        const x = e.clientX - modalStartPos.x;
        let y = e.clientY - modalStartPos.y;
        const maxX = window.innerWidth - modalRef.current.offsetWidth;
        const maxY = window.innerHeight - modalRef.current.offsetHeight;

        y = Math.max(0, Math.min(y, maxY));

        setPosition({
          x: Math.max(0, Math.min(x, maxX)),
          y: y,
        });
      }
    };

    const handleMouseUp = () => {
      if (isDragging) {
        setIsDragging(false);
      }
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    } else {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, modalStartPos]);

  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    const modalRect = modalRef.current.getBoundingClientRect();
    setModalStartPos({
      x: e.clientX - modalRect.left,
      y: e.clientY - modalRect.top,
    });
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
          position: "absolute",
          top: `${position.y}px`,
          left: `${position.x}px`,
          ...(window.innerWidth <= 1024 && window.innerWidth >= 425
            ? {
                top: "300px",
                left: "80px",
              }
            : {}),
          ...(window.innerWidth <= 425
            ? {
                top: "0",
                left: "0",
              }
            : {})
        }
      }}
    >
      <div
        className="title-bar title-bar-controls"
        onMouseDown={handleMouseDown}
        ref={modalRef}
      >
        <p className="title-bar-text">{title}</p>
        <div className="title-bar-controls">
          <button aria-label="Minimize"></button>
          <button aria-label="Restore"></button>
          <button aria-label="Close" onClick={onClose}></button>
        </div>
      </div>
      <div className="modal-content">{content}</div>
    </Modal >
  );
}

export default CustomModal;

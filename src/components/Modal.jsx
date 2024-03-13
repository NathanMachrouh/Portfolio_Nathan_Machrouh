import Modal from 'react-modal';

const CustomModal = ({ isOpen, onClose, title, content, id }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="window modal"
      overlayClassName="Overlay"
      id={id}
      appElement={document.getElementById("root")}>
      <div className="title-bar title-bar-controls">
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

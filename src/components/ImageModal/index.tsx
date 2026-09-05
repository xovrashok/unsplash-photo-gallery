import Modal from "react-modal";

Modal.setAppElement("#root");

type Props = {
  modalIsOpen: boolean;
  closeModal: () => void;
  src: string;
  alt: string;
};

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    zIndex: 1000,
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    background: "#3d3d3d91",
    border: "none",
  },
};

const ImageModal = ({ modalIsOpen, closeModal, src, alt }: Props) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <img src={src} alt={alt} className="max-w-[700px]" />
    </Modal>
  );
};

export default ImageModal;

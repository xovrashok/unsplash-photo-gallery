import Modal from "react-modal";
import { IoCloseOutline } from "react-icons/io5";

Modal.setAppElement("#root");

type Props = {
  modalIsOpen: boolean;
  closeModal: () => void;
  src: string;
  alt: string;
};

const ImageModal = ({ modalIsOpen, closeModal, src, alt }: Props) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      className="relative max-w-6xl w-auto max-h-[90vh] outline-none flex flex-col items-center justify-center p-2"
      overlayClassName="fixed inset-0 z-[100] bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 transition-all duration-300"
    >
      <button
        type="button"
        onClick={closeModal}
        aria-label="Close modal"
        className="fixed top-6 right-6 z-[101] flex items-center justify-center w-11 h-11 rounded-full bg-white/90 text-slate-700 hover:text-slate-900 hover:bg-white transition-all duration-200 cursor-pointer border border-slate-200 shadow-lg backdrop-blur-md"
      >
        <IoCloseOutline size={26} />
      </button>

      <div className="relative flex flex-col items-center justify-center max-h-[85vh]">
        <img
          src={src}
          alt={alt || "Full screen view"}
          className="max-h-[80vh] max-w-[90vw] object-contain rounded-2xl shadow-2xl border border-white/20"
        />
        {alt && (
          <p className="mt-4 text-center text-sm md:text-base font-normal text-white max-w-2xl px-4 drop-shadow-md">
            {alt}
          </p>
        )}
      </div>
    </Modal>
  );
};

export default ImageModal;

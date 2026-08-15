import ImageCard from "../ImageCard";
import ImageModal from "../ImageModal";

const ImageGallery = ({ images, openModal, closeModal, selectedImage }) => {
  return (
    <>
      <ul className="grid grid-cols-3 gap-[15px] m-3 pt-20">
        {images.map((image) => (
          <li key={image.id}>
            <ImageCard
              src={image.urls.small}
              alt={image.alt_description}
              openModal={() => openModal(image)}
            />
          </li>
        ))}
      </ul>
      <ImageModal
        modalIsOpen={Boolean(selectedImage)}
        closeModal={closeModal}
        src={selectedImage?.urls.regular}
        alt={selectedImage?.alt_description}
      />
    </>
  );
};

export default ImageGallery;

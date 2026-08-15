const ImageCard = ({ src, alt, openModal }) => {
  return (
    <div className="h-full" onClick={openModal}>
      <img className="h-full object-cover" src={src} alt={alt} />
    </div>
  );
};

export default ImageCard;

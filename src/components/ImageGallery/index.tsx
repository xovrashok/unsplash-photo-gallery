import { ImageType } from "../../api/images-api";
import ImageCard from "../ImageCard";

type Props = {
  images: ImageType[];
  openModal: (image: ImageType) => void;
};

const ImageGallery = ({ images, openModal }: Props) => {
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
    </>
  );
};

export default ImageGallery;

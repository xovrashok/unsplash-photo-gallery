import { ImageType } from "../../api/images-api";
import ImageCard from "../ImageCard";

type Props = {
  images: ImageType[];
  openModal: (image: ImageType) => void;
};

const ImageGallery = ({ images, openModal }: Props) => {
  return (
    <main className="max-w-7xl mx-auto px-4 pt-24 pb-12">
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((image) => (
          <li key={image.id} className="flex justify-center">
            <ImageCard
              src={image.urls.small}
              alt={image.alt_description}
              openModal={() => openModal(image)}
            />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default ImageGallery;

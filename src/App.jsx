import { useState } from "react";
import SearchBar from "./components/SerachBar";
import LoadMoreBtn from "./components/LoadMoreBtn";
import { fetchPhotos } from "./api/images-api";
import ImageGallery from "./components/ImageGallery";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const [images, setImages] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  const initialValues = {
    searchValue: "",
  };

  const handleSubmit = async (values, actions) => {
    try {
      setPage(1);
      setSearchQuery(values.searchValue);
      setImages([]);
      setError(false);
      setLoading(true);

      const data = await fetchPhotos(values.searchValue);

      if (data.results.length === 0) {
        toast.error("No images found for your query!");
        actions.resetForm();
        return;
      }

      setImages(data.results);
      setTotalPage(data.total_pages);
      actions.resetForm();
    } catch (error) {
      console.log("Error: ", error);
      setError(true);
      toast.error("Something went wrong. Please try again!");
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = async () => {
    try {
      setLoading(true);

      const nextPage = page + 1;
      const data = await fetchPhotos(searchQuery, nextPage);

      setImages((prevImages) => [...prevImages, ...data.results]);
      setPage(nextPage);
      setTotalPage(data.total_pages);
    } catch (error) {
      console.log("Error: ", error);
      toast.error("Something went wrong. Please try again!");
    } finally {
      setLoading(false);
    }
  };

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <Toaster position="top-right" />
      <SearchBar initialValues={initialValues} onSubmit={handleSubmit} />

      {error && <ErrorMessage />}

      <ImageGallery
        images={images}
        openModal={openModal}
        closeModal={closeModal}
        selectedImage={selectedImage}
      />
      {loading && <Loader loading={loading} />}
      {images.length > 0 && !loading && page < totalPage && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
    </>
  );
}

export default App;

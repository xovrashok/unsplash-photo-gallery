import { ClipLoader } from "react-spinners";

const Loader = ({ loading }) => {
  return (
    <ClipLoader
      loading={loading}
      className="block my-[90px] mx-auto border-red-50"
      size={80}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

export default Loader;

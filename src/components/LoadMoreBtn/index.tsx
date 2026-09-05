type Props = {
  onClick: () => void;
};

const LoadMoreBtn = ({ onClick }: Props) => {
  return (
    <div>
      <button
        type="button"
        className="m-5 px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-700 transition-colors cursor-pointer"
        onClick={onClick}
      >
        Load More
      </button>
    </div>
  );
};

export default LoadMoreBtn;

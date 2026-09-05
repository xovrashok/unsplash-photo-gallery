type Props = {
  onClick: () => void;
};

const LoadMoreBtn = ({ onClick }: Props) => {
  return (
    <div className="flex justify-center pb-12 pt-4">
      <button
        type="button"
        onClick={onClick}
        className="px-6 py-2.5 rounded-full bg-white text-slate-700 font-medium text-sm border border-slate-200/80 shadow-xs hover:bg-slate-50 hover:border-slate-300 hover:text-slate-900 hover:shadow-md transition-all duration-200 active:scale-95 cursor-pointer"
      >
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;

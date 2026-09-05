import { ClipLoader } from "react-spinners";

type Props = {
  loading: boolean;
};

const Loader = ({ loading }: Props) => {
  if (!loading) return null;

  return (
    <div className="flex flex-col items-center justify-center py-8 gap-3">
      <ClipLoader
        color="#64748b"
        loading={loading}
        size={36}
        speedMultiplier={0.8}
      />
      <span className="text-xs font-medium text-slate-400 tracking-wider uppercase">
        Loading images...
      </span>
    </div>
  );
};

export default Loader;

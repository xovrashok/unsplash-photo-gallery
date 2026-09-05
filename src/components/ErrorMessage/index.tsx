import { BiErrorCircle } from "react-icons/bi";

type Props = {
  message?: string;
};

const ErrorMessage = ({
  message = "No images found. Try searching for something else!",
}: Props) => {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-400 mb-3 border border-slate-200/60">
        <BiErrorCircle size={24} />
      </div>
      <p className="text-sm font-medium text-slate-600 max-w-sm">{message}</p>
    </div>
  );
};

export default ErrorMessage;

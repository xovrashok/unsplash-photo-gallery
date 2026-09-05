import { HiOutlineEye } from "react-icons/hi2";

type Props = {
  src: string;
  alt: string;
  openModal: () => void;
};

const ImageCard = ({ src, alt, openModal }: Props) => {
  return (
    <div
      onClick={openModal}
      className="group relative overflow-hidden rounded-2xl bg-white border border-slate-200/80 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-300/40 hover:border-slate-300 cursor-pointer aspect-[4/3]"
    >
      <img
        src={src}
        alt={alt || "Unsplash photo"}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-4 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <p className="line-clamp-1 text-sm font-medium text-white drop-shadow-sm pr-2">
          {alt || "Untitled photo"}
        </p>

        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/30 backdrop-blur-md text-white transition-transform duration-200 hover:scale-110 hover:bg-white/50 border border-white/20">
          <HiOutlineEye size={18} />
        </span>
      </div>
    </div>
  );
};

export default ImageCard;

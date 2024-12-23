import { memo } from "react";
import Image from "next/image";

interface PosterModalProps {
  onCloseModal: () => void;
  posterSrc: string;
}

const PosterModal = ({ onCloseModal, posterSrc }: PosterModalProps) => {
  return (
    <div className="poster-overlay" onClick={onCloseModal}>
      <div
        className="relative bg-white w-full max-w-[500px] rounded-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={posterSrc}
          alt="Event Poster"
          width={800}
          height={600}
          className="w-full rounded-lg"
        />
        <button
          className="absolute -top-4 -right-4 bg-black rounded-[50%] p-2"
          onClick={onCloseModal}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#fff"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="size-5 fill-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default memo(PosterModal);

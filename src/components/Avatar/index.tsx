type Props = {
  alt: string;
  imgSrc: string;
  notification?: any;
};

export default function Avatar({ alt, imgSrc }: Props) {
  return (
    <div className="relative w-14 h-14">
      <img
        className="rounded-full  border-gray-100 shadow-sm"
        src={imgSrc}
        alt={alt}
      />
      <div className="absolute top-0 right-0 h-4 w-4 my-1 rounded-full bg-primary-light z-2"></div>
    </div>
  );
}

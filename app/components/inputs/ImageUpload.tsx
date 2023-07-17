import Image from "next/image";
import { useCallback } from "react";
import { TbPhotoPlus } from "react-icons/tb";

interface ImageUploadProps {
  onChange: (value: string) => void;
  value: string;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onChange, value = "" }) => {
  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange(event.target.value);
    },
    [onChange]
  );

  return (
    <div className="relative cursor-pointer hover:opacity-70 transition border-dashed border-2 p-20 border-neutral-300 flex flex-col justify-center items-center gap-4 text-neutral-600">
      <TbPhotoPlus size={50} />
      {value && (
        <div className="absolute inset-0 w-full h-full">
          <Image fill style={{ objectFit: "cover" }} src={value} alt="House" />
        </div>
      )}
      <input
        type="text"
        value={value}
        onChange={handleInputChange}
        placeholder="Paste image URL here"
        className="mt-2 p-2 border border-neutral-300 rounded-lg"
      />
    </div>
  );
};

export default ImageUpload;

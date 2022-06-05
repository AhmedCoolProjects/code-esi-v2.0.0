import Image from "next/image";
import { NoPartDataProps } from "../../types";

export function NoPartData(props: NoPartDataProps) {
  const { message, image, title } = props;
  return (
    <div className="w-full">
      <div className="mt-10 mb-3 flex flex-row space-x-2 items-center">
        <h1 className="text-xl font-semibold">CODE</h1>
        <h1 className="text-xl font-semibold opacity-70">{title}</h1>
      </div>
      <div className="w-full py-8 flex flex-col items-center justify-center">
        <Image src={image} alt="No projects" width={200} height={200} />
        <h1 className="text-xl mt-4 text-center font-light">{message}</h1>
      </div>
    </div>
  );
}

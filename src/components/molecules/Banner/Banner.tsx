import Image from "next/image";
import { FC } from "react";

interface Props {
  width?: number;
  height?: number;
  bannerSrc: string;
}

export const Banner: FC<Props> = ({
  width = 1928,
  height = 1094,
  bannerSrc,
}) => {
  return (
    <Image
      width={width}
      height={height}
      alt=""
      layout="responsive"
      src={bannerSrc}
      style={{
        aspectRatio: `${width} / ${height}`,
      }}
    />
  );
};

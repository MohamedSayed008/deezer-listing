import React, { useMemo } from 'react';
import Image from 'next/image';
import { ImageProps } from 'next/dist/client/image';

export interface BaseImageProps extends ImageProps {}

export function BaseImage(props: BaseImageProps) {
  const { src = '/assets/svg/no-image-available.svg', alt = '', ...rest } = props;

  const isSupportedBlur = useMemo(() => {
    return ['.jpg', '.png', '.webp', '.avif'].some((format) => {
      if (typeof src === 'string') return false;
      return (src as StaticImageData)?.src.includes(format);
    });
  }, [src]);

  return <Image placeholder={isSupportedBlur ? 'blur' : 'empty'} src={src} alt={alt} {...rest} />;
}

"use client";

import React, { useState } from 'react';
import Image, { ImageProps } from 'next/image';

type SafeImageProps = Omit<ImageProps, 'onError'> & {
  fallbackSrc?: string;
};

export default function SafeImage({ 
  src, 
  alt,
  fallbackSrc = '/images/placeholder.jpg',
  ...rest
}: SafeImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  
  return (
    <Image
      {...rest}
      src={imgSrc || fallbackSrc}
      alt={alt}
      onError={() => {
        setImgSrc(fallbackSrc);
      }}
    />
  );
}

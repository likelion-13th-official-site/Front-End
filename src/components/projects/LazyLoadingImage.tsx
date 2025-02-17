import { useEffect, useState } from 'react';

export default function LazyLoadingImage({
  src,
  alt
}: {
  src: string;
  alt: string;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const image = new Image();
    if (!isLoading) return;
    image.src = src;
    image.onload = () => {
      setIsLoading(false);
    };
    image.onerror = () => {
      setIsLoading(true);
    };

    return () => {
      image.onload = null;
      image.onerror = null;
    };
  }, [src, isLoading]);

  return (
    <>
      {isLoading ? (
        <img className="blur-[5px] object-cover w-full" src={src} alt="" />
      ) : (
        <img className="blur-[0px] object-cover w-full" src={src} alt={alt} />
      )}
    </>
  );
}

//   const LazyImage = styled.img`
//       display: block;
//       width: 100%;
//       height: 100%;
//       transition: all 0.5s;

//     &.loading {
//       filter: blur(10px);
//       clip-path: inset(0);
//     }
//     &.loaded {
//       filter: blur(0px);
//     }

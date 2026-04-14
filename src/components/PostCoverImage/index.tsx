import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { shouldUseUnoptimizedImage } from '@/utils/should-use-unoptimized-image';

type PostCoverImageProps = {
  imageProps: React.ComponentProps<typeof Image>;
  linkProps: React.ComponentProps<typeof Link>;
};

export function PostCoverImage({ imageProps, linkProps }: PostCoverImageProps) {
  const unoptimized =
    typeof imageProps.src === 'string' &&
    shouldUseUnoptimizedImage(imageProps.src);

  return (
    <Link
      {...linkProps}
      className={clsx(
        'w-full',
        'h-full',
        'overflow-hidden',
        'rounded-xl',
        linkProps.className,
      )}
    >
      <Image
        {...imageProps}
        unoptimized={imageProps.unoptimized ?? unoptimized}
        className={clsx(
          'w-full',
          'h-full',
          'object-cover',
          'object-center',
          'group-hover:scale-105',
          'transition',
          imageProps.className,
        )}
        alt={imageProps.alt}
      />
    </Link>
  );
}

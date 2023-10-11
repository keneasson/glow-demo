import React from 'react'
import { Image, isWeb } from '@my/ui'
import { useMedia } from 'tamagui'

export type PictureCardProps = {
  imageLg: any
  imageSm: any
  alt?: string
  title?: string
  width?: string
}

export const PictureCard: React.FC<PictureCardProps> = ({
  imageLg,
  imageSm,
  alt,
  title,
  width,
}) => {
  const imgTitle = title || 'High-resolution Image'
  const imgAlt = alt || 'Image related to the content'

  const media = useMedia()
  const imgWidth = media.gtMd ? 611 : '100%'

  if (!isWeb) {
    return (
      <Image source={imageSm} width={'100%'} height={231} alt={imgTitle} aria-label={imgTitle} />
    )
  }
  return (
    <div>
      <picture>
        <source srcSet={imageLg.src} media="(min-resolution: 192dpi)" />
        {/* Default image for devices with a pixel density of 1x */}
        <img
          src={imageLg.src}
          alt={imgAlt}
          width={imgWidth}
          style={{ display: 'block', minWidth: 272 }}
        />
      </picture>
    </div>
  )
}

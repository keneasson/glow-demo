import React, { memo } from 'react'
import { G, Path, Svg } from 'react-native-svg'
import { View } from '@my/ui'
import { IconProps, themed } from '@tamagui/helpers-icon'

const Lips = (props: any) => {
  const { color = 'black', size = 24, ...otherProps } = props

  return (
    <View>
      <Svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...otherProps}
      >
        <G id="Lips">
          <Path
            id="Vector"
            d="M21.8246 10.8324C20.6721 9.32341 15.6816 6.25149 14.6436 6.51605C13.6758 6.76592 12.527 7.73601 11.4964 7.73601C10.4658 7.73601 9.31694 6.76592 8.34912 6.51605C7.31482 6.25149 2.32799 9.32341 1.17178 10.8324C0.0857634 12.2533 4.47787 15.5555 5.15016 16.0307C7.12643 17.4417 8.95862 18.3334 11.5296 18.5C14.0969 18.3334 15.87 17.4417 17.85 16.0307C18.5186 15.5555 22.9144 12.2484 21.8283 10.8324H21.8246Z"
            stroke={color}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <Path
            id="Vector_2"
            d="M14.0327 10.6344C13.2089 10.2299 12.3399 10.875 11.5032 10.7982C10.6633 10.875 9.79756 10.2299 8.9738 10.6344C8.29218 10.9672 7.71393 11.6226 7 11.8581C7.14537 11.812 7.69777 12.3804 7.87222 12.493C9.03841 13.2355 10.2724 13.558 11.5 13.4915C12.7276 13.5529 13.9616 13.2355 15.1278 12.493C15.3022 12.3804 15.8579 11.812 16 11.8581C15.2893 11.6226 14.7111 10.9672 14.0262 10.6344H14.0327Z"
            stroke={color}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </G>
      </Svg>
    </View>
  )
}
export const LipsIcon = memo<IconProps>(themed(Lips))

import React, { memo } from 'react'
import { ClipPath, Defs, Path, Rect, Svg } from 'react-native-svg'
import { View } from '@my/ui'
import { IconProps, themed } from '@tamagui/helpers-icon'

const Face = (props: any) => {
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
        <Path
          id="Vector"
          d="M12 22.5C8.71286 22.5 5.85106 17.3643 5.24541 15.0077C4.56117 12.3331 4.81545 7.39771 7.15482 5.47235C8.49094 4.37464 10.0998 3.83014 12 3.83014V1.51274C11.6579 1.44304 2.41597 1.32979 4.23754 10.9653C4.82932 11.0176 4.82932 12.063 4.82932 12.063"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          id="Vector_2"
          d="M12 22.5C15.2871 22.5 18.1489 17.3643 18.7546 15.0077C19.4388 12.3331 19.1846 7.39771 16.8452 5.47235C15.5091 4.37464 13.9002 3.83014 12 3.83014V1.51274C12.3421 1.44304 21.584 1.32979 19.7625 10.9653C19.1707 11.0176 19.1707 12.063 19.1707 12.063"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          id="Vector_3"
          d="M3.65134 10.5726C3.65134 10.5726 1.76771 10.0427 2.02396 11.846C2.2802 13.6493 4.28072 15.0057 5 15.5"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          id="Vector_4"
          d="M20.3487 10.5726C20.3487 10.5726 22.2323 10.0427 21.976 11.846C21.7198 13.6493 19.7193 15.0057 19 15.5"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          id="Vector_5"
          d="M3.65134 10.5726C3.65134 10.5726 1.76771 10.0427 2.02396 11.846C2.2802 13.6493 4.28072 15.0057 5 15.5"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          id="Vector_6"
          d="M20.3487 10.5726C20.3487 10.5726 22.2323 10.0427 21.976 11.846C21.7198 13.6493 19.7193 15.0057 19 15.5"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Defs>
          <ClipPath id="clip0_111_195">
            <Rect width={size} height={size} fill="white" transform="translate(0 0.5)" />
          </ClipPath>
        </Defs>
      </Svg>
    </View>
  )
}

export const FaceIcon = memo<IconProps>(themed(Face))

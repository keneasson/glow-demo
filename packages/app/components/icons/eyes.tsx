import React, { memo } from 'react'
import { Path, Svg } from 'react-native-svg'
import { View } from '@my/ui'
import { IconProps, themed } from '@tamagui/helpers-icon'

const Eyes = (props: any) => {
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
          d="M20 16.0807C15.7883 12.1231 11.7103 11.7692 7.68583 13.4539C6.31758 14.0271 5.01619 14.8645 4.02233 16.0807C3.72818 16.4396 6.43346 17.8851 6.68304 18.0146C8.46131 18.9517 10.4134 19.4502 12.3744 19.5"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M16.6109 13.9954C16.8627 14.4963 17 15.0578 17 15.6523C17 17.7771 15.2089 19.5 13 19.5C10.7911 19.5 9 17.7771 9 15.6523C9 14.8541 9.25179 14.1165 9.68097 13.5"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M21.9951 12.5C20.3439 11.3189 18.5315 10.3426 16.7142 9.49742C14.0176 8.24809 11.062 6.96727 8.0723 7.15099C5.75672 7.29273 3.73913 8.80976 2 10.3635C2 10.3635 4.06644 7.76516 4.62335 7.14575C7.72057 3.71272 11.3991 4.10642 15.317 5.60246C17.2956 6.35836 19.2741 7.24023 20.9595 8.58405C22.2345 9.6024 21.9463 11.3819 22 12.5H21.9951Z"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M14 19.5C18.4881 19.5 20 16.5 20 16.5"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </Svg>
    </View>
  )
}

export const EyesIcon = memo<IconProps>(themed(Eyes))

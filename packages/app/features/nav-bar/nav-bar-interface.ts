import { ScrollView } from 'react-native'
import { ScrollPoints } from 'app/features/home/screen'

export type NavBarInterface = {
  pageId?: string
  scrollViewRef?: ScrollView | null
  scrollPoints?: ScrollPoints
}

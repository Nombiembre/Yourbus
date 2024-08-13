import { View, Text } from 'react-native'

export default function UCS({children}) {
  return (
    <View style={{backgroundColor: '#000', flexGrow: 1}}>
      {children}
    </View>
  )
}

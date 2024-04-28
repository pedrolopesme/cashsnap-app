import { View, Text } from 'react-native'
import React from 'react'

type Props = {
    prompt: any
}

const SingInScreen = (props: Props) => {
  return (
    <View>
      <Text onPress={() => props.prompt()}>Sign in with Google</Text>
    </View>
  )
}

export default SingInScreen
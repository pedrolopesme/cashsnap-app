import { View, Text } from "react-native";
import React from "react";

type Props = {};

const Heading = ({ children }: any) => {
  return (
    <View>
      <Text>{children}</Text>
    </View>
  );
};

export default Heading;

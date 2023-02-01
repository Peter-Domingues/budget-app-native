import React from "react";
import { ActivityIndicator, View } from "react-native";
import Colors from "../../themes/colors";
import LoadingComponentStyles from "./styles";

interface LoadingComponentProps {
  isLoading: boolean;
  children: any;
}

const LoadingComponent: React.FC<LoadingComponentProps> = ({
  isLoading,
  children,
}) => {
  return isLoading ? (
    <View style={LoadingComponentStyles.loadingCenter}>
      <ActivityIndicator size="large" color={Colors.green100} />
    </View>
  ) : (
    <>{children}</>
  );
};

export default LoadingComponent;

import React, { useState, useCallback } from "react";
import { View, ScrollView, RefreshControl } from "react-native";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import Colors from "../../themes/colors";
import { StatusBar } from "expo-status-bar";
import { useDispatch, useSelector } from "react-redux";
import SafeAreaCustomizedSlice from "../../store/reducers/SafeAreaCustomizedReducer";
import LoadingComponent from "../../components/LoadingComponent";

interface SafeAreaCustomizedProps {
  children: any;
  isLoading: boolean;
  canRefresh?: boolean;
}

const SafeAreaCustomized: React.FC<SafeAreaCustomizedProps> = ({
  children,
  isLoading,
  canRefresh = false,
}) => {
  const dispatch = useDispatch();
  const safeArea = useSafeAreaInsets();
  const safeAreaCustomizedReducers = useSelector(
    (state: any) => state.safeAreaCustomizedReducers
  );

  const onRefresh = useCallback(() => {
    dispatch(SafeAreaCustomizedSlice.actions.IS_REFRESHING(true));
  }, []);

  return (
    <LoadingComponent isLoading={isLoading}>
      <SafeAreaProvider
        style={{
          backgroundColor: Colors.green50,
        }}
      >
        <View
          style={{
            paddingTop: safeArea.top,
            paddingBottom: safeArea.bottom,
            backgroundColor: Colors.green50,
            marginLeft: 15,
            marginRight: 15,
            flex: 1,
          }}
        >
          <>
            <StatusBar backgroundColor={Colors.green100} />
            {canRefresh ? (
              <ScrollView
                scrollEnabled={false}
                refreshControl={
                  <RefreshControl
                    refreshing={safeAreaCustomizedReducers.refreshing}
                    onRefresh={onRefresh}
                  />
                }
              >
                {children}
              </ScrollView>
            ) : (
              children
            )}
          </>
        </View>
      </SafeAreaProvider>
    </LoadingComponent>
  );
};

export default SafeAreaCustomized;

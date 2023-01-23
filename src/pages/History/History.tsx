import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import SafeAreaCustomized from "../../components/SafeAreaCustomized";
import AnimatedCard from "../../components/AnimatedCard";
import HistoryStyles from "./styles";
import { List } from "react-native-paper";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Colors from "../../themes/colors";

const History = () => {
  const [expanded, setExpanded] = React.useState(true);
  const [isExpanded, setIsExpanded] = React.useState(true);

  const left = (props: any) => <List.Icon {...props} icon="folder" />;

  const handlePress = () => setExpanded(!expanded);

  return (
    <SafeAreaCustomized>
      <View style={HistoryStyles.container}>
        <Text style={HistoryStyles.title}>Histórico</Text>
        <View
          style={{
            backgroundColor: Colors.green100,
            borderTopRightRadius: 10,
            borderBottomLeftRadius: 10,
            marginTop: 20,
          }}
        >
          <TouchableOpacity
            onPress={handlePress}
            accessibilityRole="button"
            accessibilityState={{ expanded }}
          >
            <View style={HistoryStyles.row}>
              <View
                style={{
                  backgroundColor: Colors.green100,
                  borderBottomLeftRadius: 10,
                }}
              >
                <Text
                  selectable={false}
                  style={[
                    HistoryStyles.whiteTitle,
                    {
                      color: "white",
                      margin: 8,
                    },
                  ]}
                >
                  2022
                </Text>
              </View>

              <View
                style={{
                  backgroundColor: "white",
                  flex: 1,
                  borderBottomLeftRadius: 10,
                  padding: 10,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Text
                  selectable={false}
                  style={[
                    HistoryStyles.greenTitle,
                    {
                      color: "green",
                    },
                  ]}
                >
                  R$1000
                </Text>
              </View>

              <View style={[HistoryStyles.item]}>
                <MaterialIcons
                  name={expanded ? "keyboard-arrow-up" : "keyboard-arrow-down"}
                  color={Colors.white}
                  size={24}
                />
              </View>
            </View>
          </TouchableOpacity>
        </View>

        {expanded ? (
          <View>
            <AnimatedCard
              cardTitle="Janeiro"
              cardValue="14000"
              goTo="Renda"
              marginTop={5}
              isMoney
            />
            <AnimatedCard
              marginTop={5}
              cardTitle="Fevereiro"
              cardValue="14000"
              goTo="Renda"
              isMoney
            />
          </View>
        ) : null}
      </View>
    </SafeAreaCustomized>
  );
};

export default History;

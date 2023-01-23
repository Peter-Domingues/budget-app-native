import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import AnimatedCard from "../../components/AnimatedCard";
import AccordionCardStyles from "./styles";
import { List } from "react-native-paper";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Colors from "../../themes/colors";

interface item {
  title: string;
  value: string;
  goTo: string;
  isMoney: boolean;
  isNegative: boolean;
}

interface AccordionCardProps {
  title: string;
  items: item[];
  subtitle: string;
}

const AccordionCard: React.FC<AccordionCardProps> = ({
  title,
  items,
  subtitle,
}) => {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  return (
    <>
      <View style={AccordionCardStyles.container}>
        <TouchableOpacity
          onPress={handlePress}
          accessibilityRole="button"
          accessibilityState={{ expanded }}
        >
          <View style={AccordionCardStyles.row}>
            <Text selectable={false} style={AccordionCardStyles.whiteTitle}>
              {title}
            </Text>

            <View style={AccordionCardStyles.whiteBox}>
              <Text selectable={false} style={AccordionCardStyles.greenTitle}>
                R${subtitle}
              </Text>
            </View>

            <View style={AccordionCardStyles.item}>
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
          {items.map((item: item) => (
            <AnimatedCard
              cardTitle={item.title}
              cardValue={item.value}
              goTo={item.goTo}
              marginTop={5}
              isMoney={item.isMoney}
              isNegative={item.isNegative}
            />
          ))}
        </View>
      ) : null}
    </>
  );
};

export default AccordionCard;

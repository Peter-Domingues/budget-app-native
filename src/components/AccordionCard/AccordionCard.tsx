import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import AnimatedCard from "../../components/AnimatedCard";
import AccordionCardStyles from "./styles";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Colors from "../../themes/colors";

interface item {
  title: string | undefined;
  value: number;
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
  const [expanded, setExpanded] = React.useState(false);

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
              <Text
                selectable={false}
                style={
                  parseInt(subtitle) < 0
                    ? AccordionCardStyles.redTitle
                    : AccordionCardStyles.greenTitle
                }
              >
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
          {items.map((item: item, index: number) => (
            <AnimatedCard
              key={index}
              cardYear={title}
              cardTitle={item.title || ""}
              cardValue={item.value.toString()}
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

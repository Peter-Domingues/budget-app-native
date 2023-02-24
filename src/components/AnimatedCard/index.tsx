import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Animated, {
  SlideInRight,
  FadeIn,
  StretchOutX,
  runOnJS,
} from "react-native-reanimated";
import AnimatedCardStyles from "./styles";

interface AnimatedCardProps {
  cardTitle: string;
  cardValue: string;
  goTo: string;
  isNegative?: boolean;
  isMoney?: boolean;
  marginTop?: number;
  cardYear?: string;
}

interface AnimatedBlockProps {
  titleGreen: string;
  titleWhite: string;
  animatedStyle: Record<string, any>;
  defaultShow?: boolean;
  afterCallback?: any;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({
  cardTitle,
  cardValue,
  goTo,
  isNegative,
  isMoney,
  marginTop,
  cardYear,
}) => {
  const navigation = useNavigation();
  const [show, setShow] = useState(false);
  const [finishedEffect, setFinishedEffect] = useState(false);

  const AnimatedBlock: React.FC<AnimatedBlockProps> = ({
    titleGreen,
    titleWhite,
    animatedStyle,
  }) => {
    return (
      <View
        style={[
          AnimatedCardStyles.animatedBox,
          marginTop ? { marginTop: marginTop } : { marginTop: 20 },
        ]}
      >
        {show ? (
          <>
            <Animated.View
              style={AnimatedCardStyles.greenBoxAfter}
              entering={StretchOutX.delay(1500)}
            >
              <Text />
            </Animated.View>
            <TouchableWithoutFeedback onPress={() => setShow(!show)}>
              <Animated.View
                style={AnimatedCardStyles.whiteBoxAfter}
                {...animatedStyle}
              >
                <Text
                  style={
                    isNegative
                      ? AnimatedCardStyles.redText
                      : AnimatedCardStyles.greenText
                  }
                />
              </Animated.View>
            </TouchableWithoutFeedback>
          </>
        ) : (
          <>
            <View style={AnimatedCardStyles.greenBox}>
              <Text style={AnimatedCardStyles.whiteText}>{titleGreen}</Text>
            </View>
            <Animated.View
              entering={
                "entering" in animatedStyle ? undefined : FadeIn.delay(350)
              }
            >
              <TouchableOpacity
                style={AnimatedCardStyles.whiteBox}
                onPress={() => setShow(!show)}
              >
                <Text
                  style={
                    isNegative
                      ? AnimatedCardStyles.redText
                      : AnimatedCardStyles.greenText
                  }
                >
                  {isMoney && "R$ "}
                  {isNegative && isMoney}
                  {titleWhite}
                </Text>
              </TouchableOpacity>
            </Animated.View>
          </>
        )}
      </View>
    );
  };

  useEffect(() => {
    if (finishedEffect) {
      navigation.navigate(
        goTo as never,
        { year: cardYear, month: cardTitle } as never
      );
      setFinishedEffect(false);
      setShow(false);
    }
  }, [finishedEffect]);

  return (
    <>
      <AnimatedBlock
        titleGreen={cardTitle}
        titleWhite={cardValue}
        animatedStyle={{
          entering: SlideInRight.withCallback(() => {
            "worklet";
            runOnJS(setFinishedEffect)(true);
          }),
        }}
      />
    </>
  );
};

export default AnimatedCard;

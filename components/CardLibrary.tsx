import * as React from "react";
import { Dimensions, View, Text, StyleSheet } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolate,
  Extrapolate,
} from "react-native-reanimated";
import Carousel, {
  ICarouselInstance,
  Pagination,
} from "react-native-reanimated-carousel";
import { LongPressGestureHandler } from "react-native-gesture-handler";

import { cardFrontItems, cardBackItems } from "@/utils/items";

const PAGE_WIDTH = Dimensions.get("window").width;
const PAGE_HEIGHT = PAGE_WIDTH / 1.2;

const CardLibrary = () => {
  const progress = useSharedValue<number>(0);
  const baseOptions = {
    vertical: false,
    width: PAGE_WIDTH,
    height: PAGE_WIDTH * 0.5,
  };

  const ref = React.useRef<ICarouselInstance>(null);
  const flipValues = cardFrontItems.map(() => useSharedValue(0));

  const onPressPagination = (index: number) => {
    ref.current?.scrollTo({
      count: index - progress.value,
      animated: true,
    });
  };

  const handleCardFlip = (index: number) => {
    const currentValue = flipValues[index].value;
    flipValues[index].value = withTiming(currentValue === 0 ? 180 : 0, {
      duration: 500,
    });
  };

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 16,
          zIndex: 999,
        }}
      >
        <Text style={styles.headerText}>Cards</Text>
        <Entypo name="plus" size={24} color="#242324" />
      </View>

      <View style={styles.carouselContainer}>
        <Carousel
          ref={ref}
          {...baseOptions}
          style={styles.carousel}
          loop
          onProgressChange={progress}
          mode="parallax"
          modeConfig={{
            parallaxScrollingScale: 0.9,
            parallaxScrollingOffset: 50,
          }}
          data={cardFrontItems}
          renderItem={({ index }) => {
            const frontFlipStyle = useAnimatedStyle(() => {
              const rotateY = interpolate(
                flipValues[index].value,
                [0, 180],
                [0, 180],
                Extrapolate.CLAMP
              );
              return {
                transform: [{ rotateY: `${rotateY}deg` }],
              };
            });

            const backFlipStyle = useAnimatedStyle(() => {
              const rotateY = interpolate(
                flipValues[index].value,
                [0, 180],
                [180, 360],
                Extrapolate.CLAMP
              );
              return {
                transform: [{ rotateY: `${rotateY}deg` }],
              };
            });

            return (
              <LongPressGestureHandler
                onHandlerStateChange={() => handleCardFlip(index)}
                minDurationMs={500}
              >
                <View style={styles.flipContainer}>
                  {/* Front Card Side */}
                  <Animated.View
                    style={[
                      styles.card,
                      frontFlipStyle,
                      { backfaceVisibility: "hidden" },
                    ]}
                  >
                    <Animated.Image
                      source={cardFrontItems[index]}
                      style={styles.carouselImage}
                      resizeMode={"contain"}
                    />
                  </Animated.View>

                  {/* Back Card Side */}
                  <Animated.View
                    style={[
                      styles.card,
                      backFlipStyle,
                      {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        backfaceVisibility: "hidden",
                      },
                    ]}
                  >
                    <Animated.Image
                      source={cardBackItems[index]}
                      style={styles.carouselImage}
                      resizeMode={"contain"}
                    />
                  </Animated.View>
                </View>
              </LongPressGestureHandler>
            );
          }}
        />

        <Pagination.Basic
          progress={progress}
          data={cardFrontItems}
          dotStyle={{ backgroundColor: "rgba(0,0,0,0.2)", borderRadius: 16 }}
          containerStyle={{ gap: 5, bottom: -275 }}
          onPress={onPressPagination}
        />
      </View>
    </View>
  );
};

export default CardLibrary;

const styles = StyleSheet.create({
  headerText: {
    fontSize: 32,
    fontFamily: "WorkSans_SemiBold",
    color: "#242324",
  },
  carouselContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  carousel: {
    width: PAGE_WIDTH,
    height: PAGE_HEIGHT,
  },
  flipContainer: {
    width: PAGE_WIDTH,
    height: PAGE_HEIGHT,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: PAGE_WIDTH,
    height: PAGE_HEIGHT,
    backfaceVisibility: "hidden",
  },
  carouselImage: {
    width: PAGE_WIDTH,
    height: PAGE_HEIGHT,
  },
});

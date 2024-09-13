import { View, Text, StyleSheet } from "react-native";

const CurrentDate = () => {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const date = new Date().getDate();
  const formatter = new Intl.DateTimeFormat("en", { month: "short" });
  const month = formatter.format(new Date());
  const day = weekday[new Date().getDay()];
  const dateToday = month + " " + date + "," + " " + day;

  return (
    <View>
      <Text style={styles.date}>{dateToday}</Text>
    </View>
  );
};

export default CurrentDate;

const styles = StyleSheet.create({
  date: {
    fontFamily: "WorkSans_Regular",
    fontSize: 24,
    marginHorizontal: 12,
    marginVertical: 20,
    color: "#a83250",
  },
});

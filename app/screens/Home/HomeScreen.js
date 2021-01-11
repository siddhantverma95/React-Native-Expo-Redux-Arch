import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet, Image } from "react-native";
import configureStore from "../../store/configureStore";
import { loadCovidData } from "./Home";
import colors from "../../styles/colors";
import AppScreen from "../../components/AppScreen";

function HomeScreen(props) {
  const [data, setData] = useState([]);

  const store = configureStore();
  useEffect(() => {
    store.dispatch(loadCovidData());
  }, []);

  const CovidList = () => (
    <FlatList
      data={data}
      keyExtractor={(index) => index.toString()}
      renderItem={({ item }) => <CovidListItem item={item}></CovidListItem>}
    ></FlatList>
  );
  //data.map((e) => CovidListItem({ item: e }));

  const CovidListItem = ({ item }) => (
    <View style={styles.card}>
      <Image style={styles.logo} source={require("../../assets/logo.png")} />
      <View style={styles.listItemCard}>
        <Text style={styles.dateContainer}> {item.dateymd} </Text>
        <Text> Daily Cases: {item.dailyconfirmed} </Text>
      </View>
    </View>
  );

  const unsubscribe = store.subscribe(() => {
    const covidDataStore = store.getState().list;
    if (data !== covidDataStore)
      setData(
        covidDataStore.slice(
          covidDataStore.length - 100,
          covidDataStore.length - 1
        )
      );
  });
  return (
    <AppScreen>
      <View>
        <CovidList></CovidList>
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  dateContainer: {
    marginBottom: 8,
    fontWeight: "600",
  },
  card: { flex: 1, flexDirection: "row" },
  listItemCard: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: 8,
    marginHorizontal: 8,
    marginVertical: 8,
    padding: 16,
    shadowColor: colors.medium,
    shadowOffset: { height: 3, width: 3 },
    shadowRadius: 4,
    shadowOpacity: 0.4,
    elevation: 8,
    left: -16,
  },
  logo: {
    width: 60,
    height: 60,
    marginLeft: 12,
    alignSelf: "center",
    zIndex: 1,
  },
});

export default HomeScreen;

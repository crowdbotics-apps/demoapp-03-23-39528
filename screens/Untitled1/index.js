import { rest_auth_user_retrieve } from "./../../store/demoappAPI/userDetails.slice.js";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled1 = ({
  route
}) => {
  const {} = route.params || {};
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(rest_auth_user_retrieve());
  }, []);
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'absolute',
      flex: 1
    }}></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%',
    backgroundColor: "#ffffff"
  }
});
export default Untitled1;
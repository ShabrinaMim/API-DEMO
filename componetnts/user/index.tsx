import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
type props = {
  userId: number;
  name: string;
  email: string;
};
const User = ({userId, name, email}: props) => {
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.itemStyle}>User ID : {userId}</Text>
      <Text style={styles.itemStyle}>Name : {name}</Text>
      <Text style={styles.itemStyle}>Email : {email}</Text>
    </View>
  );
};

export default User;

const styles = StyleSheet.create({
  containerStyle: {
    marginBottom: 16,
    backgroundColor: 'wheat',
    padding: 16,
    alignItems: 'center',
  },
  itemStyle: {fontSize: 20},
});

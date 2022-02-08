import {StyleSheet, View, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import User from '../user';

const Data = () => {
  const [users, setUsers] = useState({data: []});

  async function apiCall() {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users',
      );
      setUsers({data: response.data});
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(function () {
    apiCall();
  }, []);

  return (
    <View>
      {users.data.length != 0 ? (
        <FlatList
          data={users.data}
          renderItem={({item}) => (
            <User userId={item.id} name={item.name} email={item.email} />
          )}
        />
      ) : null}
    </View>
  );
};

export default Data;

const styles = StyleSheet.create({});

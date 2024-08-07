// components/UserAccount.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function UserAccount() {
  return (
    <View style={styles.container}>
      <Text>User Account Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
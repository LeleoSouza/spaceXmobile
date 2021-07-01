import React, {FC} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {gql, useQuery} from '@apollo/client';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../navigation/screenType';

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_year
      launch_date_local
      launch_success
    }
  }
`;
type homeScreenProp = StackNavigationProp<RootStackParamList, 'Launches'>;

const Launches: FC = () => {
  const navigation = useNavigation<homeScreenProp>();
  const {loading, error, data} = useQuery(LAUNCHES_QUERY);
  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text> {console.log({error: error})}</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>LAUNCHES </Text>
      <Button title="Go Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  title: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    color: 'gray',
  },
});

export default Launches;

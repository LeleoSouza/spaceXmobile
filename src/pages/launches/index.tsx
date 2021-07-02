import React, {FC} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {gql, useQuery} from '@apollo/client';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../navigation/screenType';
import LauncheCard from '../../components/LauncheCard';
const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_year
      launch_date_local
      launch_success
      details
      rocket {
        rocket_id
        rocket_name
        rocket_type
      }
      links {
        mission_patch_small
        video_link
      }
    }
  }
`;
type homeScreenProp = StackNavigationProp<RootStackParamList, 'Launches'>;

const Launches: FC = () => {
  const navigation = useNavigation<homeScreenProp>();
  const {loading, error, data} = useQuery(LAUNCHES_QUERY);
  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text> {console.log({error: error})}</Text>;

  let launchMap = data.launches.map((launch: any) => {
    return (
      <LauncheCard
        key={launch.flight_number + launch.mission_name}
        launch={launch}
      />
    );
  });
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>LAUNCHES </Text>
          {launchMap}
          <Button title="Go Home" onPress={() => navigation.navigate('Home')} />
        </View>
      </ScrollView>
    </SafeAreaView>
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

import React, {FC} from 'react';
import {View, Text, Button, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../navigation/screenType';

type homeScreenProp = StackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen: FC = () => {
  const navigation = useNavigation<homeScreenProp>();

  return (
    <View style={{marginTop: 50}}>
      <Button
        title="Go to Launches"
        onPress={() => navigation.navigate('Launches')}
      />
    </View>
  );
};
export default HomeScreen;

import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';
import {LaunchType} from '../customTypes/index';
interface LaunchProps {
  launch: LaunchType;
}
const LauncheCard: FC<LaunchProps> = ({launch}: LaunchProps) => {
  return (
    <Card>
      <Card.Title
        title={launch.mission_name}
        subtitle="Card Subtitle"
        // left={LeftContent}
      />
      <Card.Content>
        {/* <Title>Card title</Title>
        <Paragraph>Card content</Paragraph> */}
      </Card.Content>
      {/* <Card.Cover source={{uri: 'https://picsum.photos/700'}} /> */}
      <Card.Actions>
        <Button>Cancel</Button>
        <Button>Ok</Button>
      </Card.Actions>
    </Card>
  );
};

export default LauncheCard;

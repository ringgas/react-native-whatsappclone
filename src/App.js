import React, {Component} from 'react';
import {
  Container,
  Header,
  Title,
  Button,
  Right,
  Body,
  Icon,
  Text,
  Tabs,
  Tab,
  ScrollableTab,
  TabHeading,
  Badge,
} from 'native-base';

import Chats from './pages/chats';
import Status from './pages/status';
import Calls from './pages/calls';
import {StatusBar} from 'react-native';
import appStyles from './appStyles';

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    setTimeout(() => {
      StatusBar.setBackgroundColor('#372554');
    }, 100);
  }
  render() {
    return (
      <Container>
        <Header noLeft style={appStyles.headerBackgroundColor}>
          <Body>
            <Title style={appStyles.appTitle}>WhatsApp</Title>
          </Body>
          <Right>
            <Button icon transparent>
              <Icon type="MaterialIcons" name="search" />
            </Button>
            <Button icon transparent>
              <Icon type="MaterialIcons" name="more-vert" />
            </Button>

            
          </Right>
        
        </Header>
        <Tabs
          tabContainerStyle={{
            elevation: 0,
          }}
          renderTabBar={() => <ScrollableTab />}
          tabBarUnderlineStyle={appStyles.tabBarUnderLine}
          tabBarActiveTextColor="red"
          initialPage={3}
          tabBarBackgroundColor="#372554">
          <Tab
            heading={
              <TabHeading style={{backgroundColor: '#372554'}}>
                <Icon type='MaterialIcons' name='photo-camera' />
              </TabHeading>
            }>
            <Text
              style={{
                textAlign: 'center',
                textAlignVertical: 'center',
                flex: 1,
              }}>
              Ini Camera
            </Text>
          </Tab>
          <Tab
            heading={
              <TabHeading style={{backgroundColor: '#372554'}}>
                <Text style={appStyles.tabsText}>CHAT</Text>
                <Badge style={appStyles.badge}>
                  <Text style={appStyles.badgeText}>3</Text>
                </Badge>
              </TabHeading>
            }>
            <Chats />
          </Tab>
          <Tab
            heading={
              <TabHeading style={{backgroundColor: '#372554'}}>
                <Text style={appStyles.tabsText}>STATUS</Text>
              </TabHeading>
            }>
            <Status />
          </Tab>
          <Tab
            heading={
              <TabHeading style={{backgroundColor: '#372554'}}>
                <Text style={appStyles.tabsText}>PANGGILAN</Text>
                <Badge style={appStyles.badge}>
                  <Text style={appStyles.badgeText}>1</Text>
                </Badge>
              </TabHeading>
            }>
            <Calls />
          </Tab>
         
        </Tabs>
      </Container>
    );
  }
}



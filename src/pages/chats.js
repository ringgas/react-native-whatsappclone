import React, {Component} from 'react';
import {
  ListItem,
  Left,
  Thumbnail,
  Body,
  Right,
  Content,
  Text,
  Badge,
  Container,
  Fab,
  Icon,
} from 'native-base';

import appStyles from '../appStyles';

export default class ChatScreen extends Component {
  render() {
    return (
      <Container>
        <Content>
          <ListItem avatar>
            <Left>
              <Thumbnail
            source={require('../assets/2133482969.png')}
              
              />
            </Left>
            <Body>
              <Text>Rose</Text>
              <Text note>I don't know</Text>
            </Body>
            <Right>
              <Text note style={{color: '#372554'}}>
                Kemarin
              </Text>
              <Badge style={appStyles.badgeChats}>
                <Text style={appStyles.badgeTextChats}>3</Text>
              </Badge>
            </Right>
          </ListItem>
          <ListItem avatar>
            <Left>
              <Thumbnail
               source={require('../assets/2212111952.png')}
              />
            </Left>
            <Body>
              <Text>Jennie</Text>
              <Text note>please reply</Text>
            </Body>
            <Right>
              <Text note>
                08.30
              </Text>
            
            </Right>
          </ListItem>
          
        </Content>
        <Fab style={appStyles.fabColor} position="bottomRight">
          <Icon type="MaterialIcons" name="chat" />
        </Fab>
      </Container>
    );
  }
}
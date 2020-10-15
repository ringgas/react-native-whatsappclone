import React, {Component} from 'react';
import {
  ListItem,
  Left,
  Thumbnail,
  Body,
  Content,
  Text,
  Container,
  Fab,
  Icon,
  Button,
} from 'native-base';
import appStyles from '../appStyles';
export default class StatusScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }
  render() {
    return (
      <Container>
        <Content>
          <ListItem avatar noBorder>
            <Left>
              <Thumbnail
               source={require('../assets/DSC_0021_tdk.jpg')}
              />
              <Icon
                type="MaterialIcons"
                name="add-circle"
                style={appStyles.addStatusIcon}
              />
            </Left>
            <Body>
              <Text>Status saya</Text>
              <Text note>Ketuk untuk menambahkan pembaruan</Text>
            </Body>
          </ListItem>
          <ListItem itemDivider style={appStyles.listItemDivider}>
            <Text note style={{fontSize: 12}}>
              Pembaruan terkini
            </Text>
          </ListItem>
          <ListItem avatar>
            <Left>
              <Thumbnail
               source={require('../assets/2133482969.png')}
              />
            </Left>
            <Body>
              <Text>Rose</Text>
              <Text note>9 menit yang lalu</Text>
            </Body>
          </ListItem>
          <ListItem avatar>
            <Left>
              <Thumbnail
              source={require('../assets/2212111952.png')}
              />
            </Left>
            <Body>
              <Text>Jennie</Text>
              <Text note>Hari ini 08.30</Text>
            </Body>
          </ListItem>
        
        
        </Content>
        <Fab
          style={appStyles.fabColor}
          active={true}
          direction="up"
          position="bottomRight">
          <Icon type="MaterialIcons" name="photo-camera" />
          <Button style={{backgroundColor: '#F5F5F5'}}>
            <Icon type="MaterialIcons" name="edit" style={{color: '#372554'}} />
          </Button>
        </Fab>
      </Container>
    );
  }
}
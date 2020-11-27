import React, { Component } from "react";
import { StyleSheet } from "react-native";
import Map from "./Map";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Body,
  Button,
} from "native-base";
import { Actions } from "react-native-router-flux";

export default function Detail({ job }) {
  return (
    <Container>
      <Header>
        <Left>
          <Button
            transparent
            onPress={() => {
              Actions.pop();
            }}
          >
            <Icon name="arrow-back" />
            <Text>List</Text>
          </Button>
        </Left>
      </Header>
      <Content>
        <Card>
          <CardItem header>
            <Text>{job.CMPNY_NM}</Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text>{job.DTY_CN}</Text>
              <Text style={styles.text}>{job.HOPE_WAGE}</Text>
              <Text style={styles.text}>{job.BASS_ADRES_CN}</Text>
            </Body>
          </CardItem>
          <CardItem footer>
            <Text>위치보기</Text>
          </CardItem>
        </Card>
        <Map />
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  text: {
    marginTop: 15,
    marginBottom: 15,
  },
});

import React from "react";
import { Container, Header, Tab, Tabs, Body, Title } from "native-base";
import Tab1 from "./Tabs/tabOne";
import Tab2 from "./Tabs/tabTwo";
import Tab3 from "./Tabs/tabThree";

export default function TabScreen() {
  return (
    <Container>
      <Header hasTabs>
        <Body>
          <Title>News</Title>
        </Body>
      </Header>
      <Tabs>
        <Tab heading="스포츠">
          <Tab1 />
        </Tab>
        <Tab heading="건강">
          <Tab2 />
        </Tab>
        <Tab heading="엔터테이먼트">
          <Tab3 />
        </Tab>
      </Tabs>
    </Container>
  );
}

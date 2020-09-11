import React from "react";
import { Container, Header, Tab, Tabs, Body, Title } from "native-base";
import TabOne from "./Tabs/tabOne";
import Tab2 from "./Tabs/tabTwo";
import Tab3 from "./Tabs/tabThree";

function TabScreen() {
  return (
    <Container>
      <Header hasTabs>
        <Body>
          <Title>Hello</Title>
        </Body>
      </Header>
      <Tabs>
        <Tab heading="Tab1">
          <TabOne />
        </Tab>
        <Tab heading="Tab2">
          <Tab2 />
        </Tab>
        <Tab heading="Tab3">
          <Tab3 />
        </Tab>
      </Tabs>
    </Container>
  );
}

export default TabScreen;

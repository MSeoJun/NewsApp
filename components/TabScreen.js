import React from "react";
import {
  Container,
  Header,
  Content,
  Tab,
  Tabs,
  Body,
  Title,
} from "native-base";
import Tab1 from "./Tabs/tabOne";
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
          <Tab1 />
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

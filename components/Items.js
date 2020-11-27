import React from "react";
import { ListItem, Left, Text, Right, Icon, Body, Button } from "native-base";
import { Actions } from "react-native-router-flux";

function Items({ job }) {
  const goDetail = () => {
    Actions.detail({ job });
  };

  return (
    <ListItem>
      <Left>
        <Body>
          <Text>{job.CMPNY_NM}</Text>
          <Text note numberOfLines={2} style={{ marginTop: 15 }}>
            {job.HOPE_WAGE}
          </Text>
        </Body>
      </Left>
      <Right>
        <Button transparent onPress={goDetail}>
          <Icon name="arrow-forward" />
        </Button>
      </Right>
    </ListItem>
  );
}

export default Items;

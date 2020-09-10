import React from "react";
// import * as Font from "expo-font";
// import { Ionicons } from "@expo/vector-icons";
import {
  ListItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Right,
  Button,
} from "native-base";

function DataItem({ article }) {
  //   useEffect(() => {
  //     const loadFont = async () => {
  //       await Font.loadAsync({
  //         Roboto: require("native-base/Fonts/Roboto.ttf"),
  //         Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
  //         ...Ionicons.font,
  //       });
  //     };

  //     loadFont();
  //   }, []);

  return (
    <ListItem thumbnail>
      <Left>
        <Thumbnail
          square
          source={{
            uri:
              article.urlToImage ||
              "https://upload.wikimedia.org/wikipedia/commons/0/0a/No-image-available.png",
          }}
        />
      </Left>
      <Body>
        <Text>제목</Text>
        <Text numberOfLines={2}>{article.title}</Text>
        <Text note numberOfLines={2}>
          {article.description}
        </Text>
      </Body>
      <Right>
        <Button transparent>
          <Text>보기</Text>
        </Button>
      </Right>
    </ListItem>
  );
}

export default DataItem;

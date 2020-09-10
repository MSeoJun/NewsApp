import React, { useState, useEffect } from "react";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { getArticles } from "../../api/news";
import DataItem from "../DataItem";
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Right,
  Button,
  View,
  ActivityIndicator,
} from "native-base";

function tabOne() {
  useEffect(() => {
    const loadFont = async () => {
      await Font.loadAsync({
        Roboto: require("native-base/Fonts/Roboto.ttf"),
        Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
        ...Ionicons.font,
      });
    };

    loadFont();
  }, []);

  const [isLoading, setIsLoading] = useState(true);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function get_articles() {
      setArticles(await getArticles());
      setIsLoading(false);
    }

    get_articles();
  }, []);

  // const pageView = isLoading ? (
  //   <View>
  //     <ActivityIndicator animating={isLoading} size="large" />
  //     <Text style={{ marginTop: 10 }}>로딩중...</Text>
  //   </View>
  // ) : (
  //   <List
  //     dataArray={articles}
  //     renderRow={(article) => {
  //       return <DataItem article={article} />;
  //     }}
  //   />
  // );

  return (
    <Container>
      <Content>
        {/* {pageView} */}
        <List
          dataArray={articles}
          renderRow={(article) => {
            return <DataItem article={article} />;
          }}
        />
        {/* <List>
          <ListItem thumbnail>
            <Left>
              <Thumbnail square source={{ uri: "Image URL" }} />
            </Left>
            <Body>
              <Text>Sankhadeep</Text>
              <Text note numberOfLines={1}>
                Its time to build a difference . .
              </Text>
            </Body>
            <Right>
              <Button transparent>
                <Text>보기</Text>
              </Button>
            </Right>
          </ListItem>
        </List> */}
      </Content>
    </Container>
  );
}

export default tabOne;

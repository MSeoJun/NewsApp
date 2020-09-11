import React, { useState, useEffect } from "react";
import { getArticles } from "../../api/news";
import DataItem from "../DataItem";
// 안쓰는 모듈은 삭제.
import {
  Container,
  Content,
  List
} from "native-base";
// ActivityIndicator 이건 native-base 가 아니라 react-native 요 기능이여.
import { View, Text, ActivityIndicator } from 'react-native';

function tabOne() {

  const [isLoading, setIsLoading] = useState(true);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function get_articles() {
      setArticles(await getArticles());
      setIsLoading(false);
    }

    get_articles();
  }, []);

  const pageView = isLoading ? (
    <View>
      <ActivityIndicator animating={isLoading} size="large" />
      <Text style={{ marginTop: 10 }}>로딩중...</Text>
    </View>
  ) : (
    <List
      dataArray={articles}
      renderRow={(article) => {
        return <DataItem article={article} />;
      }}
    />
  );

  return (
    <Container>
      <Content>
        {pageView}
      </Content>
    </Container>
  );
}

export default tabOne;

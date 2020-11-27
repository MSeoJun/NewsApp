import React, { useState, useEffect } from "react";
import * as API from "../api/Works";
import Items from "../components/Items";
import { Container, Header, Content, List, Body, Title } from "native-base";
export default function Jobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const getList = async () => {
      const res = await API.getWorks();
      setJobs(res.GetJobInfo.row);
    };
    getList();
  }, []);

  return (
    <Container>
      <Header>
        <Body>
          <Title>Find your Job!</Title>
        </Body>
      </Header>
      <Content>
        <List
          dataArray={jobs}
          renderRow={(job) => {
            return <Items job={job} />;
          }}
        />
      </Content>
    </Container>
  );
}

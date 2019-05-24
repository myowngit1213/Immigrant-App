import React, { Component } from "react";
import TopBar from "../../components/TopBar";
import { Container, Table } from "./styles";
import SearchBanner from "../../components/SearchBanner";
// import { Card } from "react-bootstrap";

export default class Search extends Component {
  render() {
    return (
        <Container>
          <TopBar />
          <SearchBanner />
          <Table />
        </Container>
    );
  }
}

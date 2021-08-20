import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Container from "../../component/general/Container";
import MainLayout from "../../layout/main";
import MovieDetailBody from "./Body";
import MovieDetailHeader from "./Header";
import RelatedMovie from "./RelatedMovie";

const MovieDetails = () => {
  return (
    <MainLayout>
      <ScrollView style={{ flex: 1, backgroundColor: "#000" }}>
        <Container style={{ flex: 1, backgroundColor: "#000" }}>
          <MovieDetailHeader />
          <MovieDetailBody />
          <RelatedMovie />
        </Container>
      </ScrollView>
    </MainLayout>
  );
};

export default MovieDetails;

const styles = StyleSheet.create({});

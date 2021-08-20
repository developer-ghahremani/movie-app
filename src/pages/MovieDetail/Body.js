import { useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Container from "../../component/general/Container";
import IText from "../../component/general/IText";
import Row from "../../component/general/Row";
import ClockIcon from "../../component/icons/Clock";
import colors from "../../style/colors";

const MovieDetailBody = () => {
  const {
    params: { movie },
  } = useRoute();
  const {
    title,
    rated,
    released,
    runtime,
    genres,
    Director,
    writer,
    actors,
    plot,
    language,
    country,
    type,
    imdb_rating,
    production,
    awards,
    ratings,
  } = movie;

  return (
    <Container pX={10} pY={10}>
      <IText size={18} color={colors.grayLight1} bold>
        {title}
      </IText>
      <Row align="center">
        <IText
          color={
            colors.grayLight1
          }>{`IMDB ${imdb_rating}, Released at: ${released}, `}</IText>
        <Row align="center" pX={5}>
          <ClockIcon color={colors.grayLight1} />
          <IText color={colors.grayLight1}>{` ${runtime}`}</IText>
        </Row>
      </Row>
      <IText size={16} color={colors.gray}>
        {plot}
      </IText>
      <Row align="center" pY={10}>
        <View style={styles.ratedContainer}>
          <IText>{rated}</IText>
        </View>
        <IText
          style={{ marginLeft: 5 }}
          color={colors.grayLight}>{`Suitable for : ${rated}`}</IText>
      </Row>
      {[
        { label: "Genres", values: genres },
        { label: "Actors", values: actors },
        { label: "Director", values: Director },
        { label: "Writers", values: writer },
        { label: "Countries", values: country },
        { label: "Languages", values: language },
      ].map((item) => (
        <IText color={colors.grayLight} key={item.label}>
          {`${item.label}: ${item.values.join(", ")}`}
        </IText>
      ))}
      <IText color={colors.grayLight}>{`Production: ${production}`}</IText>
      <IText color={colors.grayLight}>{`Awards: ${awards}`}</IText>
      <IText color={colors.grayLight}>Ratings:</IText>
      {ratings.map((item) => (
        <Row justify="space-between" key={item.source}>
          <IText color={colors.grayLight}>{item.source}</IText>
          <IText color={colors.grayLight}>{item.value}</IText>
        </Row>
      ))}
    </Container>
  );
};

export default MovieDetailBody;

const styles = StyleSheet.create({
  ratedContainer: {
    backgroundColor: colors.primaryColor,
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
});

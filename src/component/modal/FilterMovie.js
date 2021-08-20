import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { filterLanguages } from "../../../constant";
import ExpandableRow from "../ExpandableRow";
import Container from "../general/Container";
import IBottomSheetModal from "../general/IBottomSheetModal";
import IFlatlist from "../general/IFlatlist";
import IInput from "../general/IInput";
import IText from "../general/IText";
import Row from "../general/Row";
import CloseIcon from "../icons/Close";
import FilterItem from "../items/Filter";

const FilterMovie = ({
  genre = [],
  searchText = "",
  onSearchTextChange,
  onGenreSelected,
  totalMovie,
  languages = [],
  onLanguageSelected,
  ...prp
}) => {
  const [state, setState] = useState({ showGenre: false, showLanguage: false });
  const { genres } = useSelector((state) => state);
  const handleGenreSelected = (genre) => {
    onGenreSelected(genre);
  };

  const toggleShowGenre = () => {
    setState((s) => ({ ...s, showGenre: !s.showGenre }));
  };

  const toggleShowLanguage = () => {
    setState((s) => ({ ...s, showLanguage: !s.showLanguage }));
  };

  return (
    <IBottomSheetModal {...prp}>
      <Container
        style={{
          flex: 1,
          backgroundColor: "white",
          padding: 10,
          justifyContent: "space-between",
        }}>
        <Container style={{ flex: 1 }}>
          <Row align="center">
            <IInput
              value={searchText}
              onChangeText={onSearchTextChange}
              containerStyle={{ flex: 1 }}
              placeholder="Search"
            />
            <CloseIcon
              size={18}
              style={{ marginHorizontal: 10 }}
              onPress={prp.onClose}
            />
          </Row>
          <ExpandableRow
            onPress={toggleShowGenre}
            isExpand={state.showGenre}
            title="Genre"
            extra={<IText size={18}>{genre.length}</IText>}
          />

          {state.showGenre && (
            <IFlatlist
              data={genres}
              renderItem={({ item }) => (
                <FilterItem
                  selected={!!genre.find((g) => g.id === item.id)}
                  onPress={() => handleGenreSelected(item)}
                  title={item.name}
                />
              )}
            />
          )}
          <ExpandableRow
            onPress={toggleShowLanguage}
            isExpand={state.showLanguage}
            title="Languages"
            extra={<IText size={18}>{languages.length}</IText>}
          />
          {state.showLanguage && (
            <IFlatlist
              data={filterLanguages}
              renderItem={({ item }) => (
                <FilterItem
                  selected={!!languages.find((l) => l === item)}
                  onPress={() => onLanguageSelected(item)}
                  title={item}
                />
              )}
            />
          )}
        </Container>

        <IText size={20}>{`Found ${totalMovie} Movies`}</IText>
      </Container>
    </IBottomSheetModal>
  );
};

export default FilterMovie;

const styles = StyleSheet.create({});

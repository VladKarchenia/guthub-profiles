import React from "react";
import { Provider } from "react-redux";
import SearchForm from "../components/SearchForm/SearchForm";
import renderer from "react-test-renderer";
import configureStore from "../index";

describe("Search form component", () => {
  it("matches the snapshot", () => {
    const tree = renderer
      .create(
        <Provider store={configureStore()}>
          <SearchForm />
        </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

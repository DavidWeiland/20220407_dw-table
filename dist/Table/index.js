import React, { useState } from 'react';
import SearchComponent from './SearchComponent';
import { Tableau } from './Tableau';
import styled from 'styled-components';
import colors from './Utils/styles/colors';
export const Table = ({
  data,
  model
}) => {
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [searchText, setSearchText] = useState('');
  return /*#__PURE__*/React.createElement(MainContainer, null, /*#__PURE__*/React.createElement(TableOptionsContainer, null, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(SpanSelect, null, "Show "), /*#__PURE__*/React.createElement(Select, {
    value: entriesPerPage,
    onChange: e => setEntriesPerPage(Number(e.target.value))
  }, /*#__PURE__*/React.createElement("option", {
    value: 10
  }, "10"), /*#__PURE__*/React.createElement("option", {
    value: 25
  }, "25"), /*#__PURE__*/React.createElement("option", {
    value: 50
  }, "50"), /*#__PURE__*/React.createElement("option", {
    value: 100
  }, "100")), /*#__PURE__*/React.createElement(SpanSelect, null, " entries")), /*#__PURE__*/React.createElement(SearchComponent, {
    type: "text",
    id: "search",
    label: "Search : ",
    value: searchText,
    onChange: e => setSearchText(e.target.value)
  })), /*#__PURE__*/React.createElement(Tableau, {
    sourceData: data,
    searchText: searchText,
    entriesPerPage: entriesPerPage,
    model: model
  }));
};
const MainContainer = styled.div`
  width:100%
`;
const TableOptionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin:20px;
`;
const Container = styled.div`
  width: 30%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
`;
const SpanSelect = styled.span`
  font-size: 15px;
  font-weight: 400;
`;
const Select = styled.select`
  margin: 5px;
  padding: 1%;
  border-radius: 5px;
  border: 1px;
  box-shadow: ${colors.boxShadow};
  font-size: 12px;
  font-weight: 400;
`;
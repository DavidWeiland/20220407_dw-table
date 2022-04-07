import React, { useState } from 'react';
import { Row } from './Body';
import { Header } from './Header';
import { Footer } from './Footer';
export const Tableau = ({
  sourceData,
  entriesPerPage,
  searchText,
  model
}) => {
  const [data, setData] = useState(sourceData);
  const [indexMin, setIndexMin] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const indexMax = indexMin + entriesPerPage - 1;
  const rows = [];
  data.forEach(item => {
    const {
      firstName,
      lastName,
      startDate,
      department,
      dateOfBirth,
      street,
      city,
      state,
      zipCode
    } = item;

    if (firstName.toLowerCase().includes(searchText.toLowerCase()) || lastName.toLowerCase().includes(searchText.toLowerCase()) || startDate.includes(searchText) || department.toLowerCase().includes(searchText.toLowerCase()) || dateOfBirth.includes(searchText) || street.toLowerCase().includes(searchText.toLowerCase()) || city.toLowerCase().includes(searchText.toLowerCase()) || state.toLowerCase().includes(searchText.toLowerCase()) || zipCode.includes(searchText)) {
      rows.push(item);
    }
  });
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Header, {
    data: data,
    model: model,
    onClick: e => setData(e),
    i: true
  }), rows.map((row, index) => index >= indexMin - 1 && index < indexMax ? /*#__PURE__*/React.createElement(Row, {
    key: `${index}-${row}`,
    entry: index,
    row: row,
    model: model
  }) : null), /*#__PURE__*/React.createElement(Footer, {
    indexMin: indexMin,
    currentLength: rows.length,
    currentPage: currentPage,
    entriesPerPage: entriesPerPage,
    setIndexMin: setIndexMin,
    setCurrentPage: setCurrentPage
  }));
};
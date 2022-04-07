import React from 'react';
import styled from 'styled-components';
import colors from './../../Utils/styles/colors';
export const Footer = ({
  indexMin,
  currentLength,
  currentPage,
  entriesPerPage,
  setIndexMin,
  setCurrentPage
}) => {
  const indexMax = indexMin + entriesPerPage - 1 < currentLength ? indexMin + entriesPerPage - 1 : currentLength;

  const previousFunction = () => {
    if (currentPage > 1) {
      setCurrentPage(c => c - 1);
      setIndexMin(indexMin - entriesPerPage);
    }

    return;
  };

  const nextFunction = () => {
    const nbPagesMax = Math.ceil(currentLength / entriesPerPage);

    if (currentPage < nbPagesMax) {
      return setCurrentPage(c => c + 1), setIndexMin(indexMin + entriesPerPage);
    }

    return;
  };

  return /*#__PURE__*/React.createElement(MainContainer, null, /*#__PURE__*/React.createElement(TableInfoContainer, null, /*#__PURE__*/React.createElement("span", null, "Showing ", indexMin, " to", ' ', currentLength < entriesPerPage ? currentLength : indexMax, " of", ' ', currentLength, " entries")), /*#__PURE__*/React.createElement(TableInfoContainer, null, /*#__PURE__*/React.createElement("div", {
    onClick: () => previousFunction()
  }, "Previous"), /*#__PURE__*/React.createElement(NumberPage, null, currentPage), /*#__PURE__*/React.createElement("div", {
    onClick: () => nextFunction()
  }, "Next")));
};
const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-top: -1px;
  border-top: 1px ${colors.fontDark} solid
`;
const TableInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const NumberPage = styled.div`
  display: flex;
  width: 30px;
  height: 30px;
  border: 1px solid ${colors.grey};
  justify-content: center;
  align-items: center;
  margin: 0 10px;
  background: linear-gradient(${colors.greyLight}, ${colors.greyMedium});
`;
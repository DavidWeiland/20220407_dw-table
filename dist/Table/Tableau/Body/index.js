import React from 'react';
import styled from 'styled-components';
import colors from './../../Utils/styles/colors';
import { formatDate } from '../../Utils/FormatDateFunction';
export const Row = ({
  entry,
  row,
  model
}) => {
  // change the background once in two
  const bgColor = entry % 2 === 1 ? `${colors.defaultBg}` : `${colors.BgRow}`; // build lines of table

  const lines = [];
  model.forEach((elmt, index) => {
    // retrieves the information from the model and applies the corresponding values
    const flexValue = elmt.flex;
    const rowValue = row[elmt.value];
    lines.push( /*#__PURE__*/React.createElement(StyledCell, {
      key: `${index}-${elmt}—${row}`,
      style: {
        flex: flexValue
      }
    }, elmt.type === 'date' ? formatDate(rowValue) : rowValue));
  });
  return /*#__PURE__*/React.createElement(StyledContainer, {
    style: {
      backgroundColor: `${bgColor}`
    }
  }, lines);
};
const StyledContainer = styled.div`
  border-bottom: 1px ${colors.greyMedium} solid;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: normal;
  height: 35px;
`;
const StyledCell = styled.div`
  display: flex;
  justify-content : flex-start;
  align-items: center;
  margin-left: 10px;
  font-size:14px
`;
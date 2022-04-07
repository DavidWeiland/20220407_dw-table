import React from 'react';
import styled from 'styled-components';
import colors from './../../Utils/styles/colors';
export const Cell = ({
  dataKey,
  value,
  flexValue,
  data,
  onClick
}) => {
  const triAZ = () => {
    return onClick(Array.from(data).sort((a, b) => a[value] > b[value] ? 1 : -1));
  };

  const triZA = () => {
    return onClick(Array.from(data).sort((a, b) => a[value] < b[value] ? 1 : -1));
  };

  return /*#__PURE__*/React.createElement(StyledCell, {
    style: {
      flex: flexValue
    }
  }, dataKey, /*#__PURE__*/React.createElement(StyledIconWrapper, null, /*#__PURE__*/React.createElement(StyledIconTriAZ, {
    onClick: triAZ
  }), /*#__PURE__*/React.createElement(StyledIconTriZA, {
    onClick: triZA
  })));
};
const StyledCell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledIconWrapper = styled.div`
  display:flex;
  margin-left:10px;
`;
const StyledIconTriZA = styled.div`
  width: 8px;
  height: 8px;
  border: 4px solid ${colors.defaultBg};
  border-top: 0px solid ${colors.defaultBg};
  border-bottom: 8px solid ${colors.greyMedium};
  box-sizing: border-box;
  margin-left: -8px;
`;
const StyledIconTriAZ = styled.div`
  width: 8px;
  height: 8px;
  border: 4px solid ${colors.defaultBg};
  border-bottom: 0px solid ${colors.defaultBg};
  border-top: 8px solid ${colors.greyMedium};
  box-sizing: border-box;
  margin-top: 10px;
`;
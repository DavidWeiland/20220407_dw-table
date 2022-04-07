import React from 'react'
import styled from 'styled-components'
import colors from './../../Utils/styles/colors'
import { Cell } from './cell'

export const Header = ({ data, onClick, model }) => {

  return (
    <StyledContainer>
      {model.map(({title, value, flex}, index) =>
        <Cell
          key={`${index}-${title}`}
          dataKey={title}
          value={value}
          flexValue={flex}
          data={data}
          onClick={onClick}
        />
      )}
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  border-bottom: 1px ${colors.fontDark} solid;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  height: 35px;
  background-color: ${colors.defaultBg};
  font-size:15px
`
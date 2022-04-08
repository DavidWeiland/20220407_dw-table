import React, { useState } from 'react'
import { Row } from './Body'
import { Header } from './Header'
import { Footer } from './Footer'

export const Tableau = ({ sourceData, entriesPerPage, searchText, model }) => {
  const [data, setData] = useState(sourceData)
  const [indexMin, setIndexMin] = useState(1)
  const [currentPage, setCurrentPage] = useState(1)
  const indexMax = indexMin + entriesPerPage - 1

  // builds entries to display
  const rows = []
  data.forEach((item) => {
    model.forEach(elmt => {
      const value=elmt.value
      if (item[value].toLowerCase().includes(searchText.toLowerCase())) {
        if (!rows.includes(item)) {
          rows.push(item)
        }
      }
    })
  })
  
  return (
    <div>
      <Header
        data={data}
        model={model}
        onClick={(e) => setData(e)}
        i
      />

      {rows.map((row, index) =>
        index >= indexMin - 1 && index < indexMax ? (
          <Row
            key={`${index}-${row}`}
            entry={index}
            row={row}
            model = {model}
          />
        ) : null
      )}

      <Footer
        indexMin={indexMin}
        currentLength={rows.length}
        currentPage={currentPage}
        entriesPerPage={entriesPerPage}
        setIndexMin={setIndexMin}
        setCurrentPage={setCurrentPage}
      />
    </div>
  )
}

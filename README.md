![shields](https://img.shields.io/badge/version-v1.1.0-blue)
![shields](https://img.shields.io/badge/make_with-React_in_create--react--app-red)
![shields](https://img.shields.io/badge/author-David_Weiland-green)

# @DAVID_WEILAND/DW-TABLE

## Personal React Component

This component must work in react app ans it was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Install notice
In your own react project :

install with npm :
```
npm install --save @david_weiland/dw-table
```
or, with yarn :
```
yarn add dw-table
```

Here th tlink to [@david_weiland/dw-table](https://www.npmjs.com/package/@david_weiland/dw-table) published on npmjs.

## How to use @david_weiland/dw-table component : 

1. First, import Table from "@david_weiland/dw-table"
2. In the render, add where you want the module
3. You need precise options : data, model

For example : 
```
export const YourApp = ()=> {
  return (
    <Table
      data={
        [
          {
            "firstName": "Aaaa",
            "lastName": "Bbbb",
            "dateOfBirth": "yyyy-mm-dd",
          },
          {
            "firstName": "Cccc",
            "lastName": "Dddd",
            "dateOfBirth": "yyyy-mm-dd",
          }
        ]
      }
      model={
        [
          { "title": "First Name", "value": "firstName", "type":"string", "flex": 2 },
          { "title": "Last Name", "value": "lastName", "type":"string", "flex": 3 },
          { "title": "Date of Birth", "value": "dateOfBirth", "type":"date", "flex": 2 }
        ]
      }
    />
  )
}
```

## Props
#### Required props
- `data={}`: this is the source of your table (array)
- `model={}`: (all of this options are required)
  - title : header entry of the table,
  - value : the link to the data,
  - type : precise the type of value,
  - flex : define width of each categories


## Supports
Homepage of the module : [https://github.com/DavidWeiland/20220407_dw-table](https://github.com/DavidWeiland/20220407_dw-table)

Please report bugs in : [https://github.com/DavidWeiland/20220407_dw-table/issues](https://github.com/DavidWeiland/20220407_dw-table/issues)

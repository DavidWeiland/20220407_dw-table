import React from 'react';
import {createRoot} from 'react-dom/client';
import { mockEmployees } from './mock_data';
import {Table} from './lib';

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <Table data={mockEmployees} model={[
    { "title": "First Name", "value": "firstName", "type":"string", "flex": 2 },
    { "title": "Last Name", "value": "lastName", "type":"string", "flex": 3 },
    { "title": "Start Date", "value": "startDate", "type":"date", "flex": 2 },
    { "title": "Department", "value": "department", "type":"string", "flex": 3 },
    { "title": "Date of Birth", "value": "dateOfBirth","type":"date", "flex": 2 },
    { "title": "Street", "value": "street", "type":"string", "flex": 3 },
    { "title": "City", "value": "city","type":"string", "flex": 3 },
    { "title": "State", "value": "state", "type":"string", "flex": 1 },
    { "title": "Zip Code", "value": "zipCode", "type":"number", "flex": 2 }
  ]} />
  </React.StrictMode>
);
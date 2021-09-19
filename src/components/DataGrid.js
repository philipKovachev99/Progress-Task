
import { Grid, GridColumn } from '@progress/kendo-react-grid';
import { process } from "@progress/kendo-data-query";
import React from 'react';
import flightData from '../data/flightData.json';

 export default function DataGrid() {
  const [dataState, setDataState] = React.useState({ skip: 0, take: 5 });
  const [result, setResult] = React.useState(process(flightData, dataState));

  const onDataStateChange = (event) => {
    setDataState(event.dataState);
    setResult(process(flightData, event.dataState));
  }
  
    return (
      <div className="App">
   <Grid
      data={result}
      filterable={true}
      resizable={true}
      onDataStateChange={onDataStateChange}
      pageable={true}
      sortable={true}
      reorderable={true}
      total={flightData.length}
      {...dataState}
      className="data-grid"
    >
     <GridColumn field='code' title='Code'/>
     <GridColumn field='lat' title='Lat'/>
     <GridColumn field='lon' title='Lon'/>
     <GridColumn field='name' title='Name'/>
     <GridColumn field='city' title='City'/>
     <GridColumn field='state' title='State'/>
     <GridColumn field='country' title='Country'/>
     <GridColumn field='woeid' title='Woeid'/>
     <GridColumn field='tz' title='TZ'/>
     <GridColumn field='type' title='Type'/>
     <GridColumn field='runway_length' title='RL'/>
     <GridColumn field='elev' title='Elevation'/>
     <GridColumn field='icao' title='Icao'/>
     <GridColumn field='direct_flights' title='Direct Flights'/>
     <GridColumn field='carriers' title='Carriers'/>
    </Grid>
      </div>
    );
  }


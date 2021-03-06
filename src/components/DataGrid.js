import { Grid, GridColumn } from '@progress/kendo-react-grid';
import { process } from '@progress/kendo-data-query';
import React from 'react';
import flightData from '../data/flightData.json';

const allInEdit = flightData.map((item) =>
  Object.assign(
    {
      inEdit: true,
    },
    item
  )
);


 export default function DataGrid() {
  const [dataState, setDataState] = React.useState({ skip: 0, take: 5 });
  const [result, setResult] = React.useState(process(allInEdit, dataState));
  const [data, setData] = React.useState(allInEdit);

  const onDataStateChange = (event) => {
    setDataState(event.dataState);
    setResult(process(allInEdit, event.dataState));
  }


  const itemChange = (e) => {
    let newData = data.map((item) => {
      if (item.id=== e.dataItem.id) {
        item[e.field || ""] = e.value;
      }

      return item;
    });
    setData(newData);
  };


  const cellWithBackGround = (props) => {
        const examplePrice = props.dataItem.direct_flights < 2;
        const style = {
          backgroundColor: examplePrice
            ? "rgb(243, 23, 0, 0.32)"
            : "rgb(55, 180, 0,0.32)",
        };
        const field = props.field || "";
        return (
          <td style={style}>
            {props.dataItem[field]} 
          </td>
        );
      };
  
    return (
      <div>
   <Grid
      data={result}
      editField="inEdit"
      onItemChange={itemChange}
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
     <GridColumn field='direct_flights' title='Direct Flights' cell={cellWithBackGround}/>
     <GridColumn field='carriers' title='Carriers'/>
    </Grid>
      </div>
    );
  }
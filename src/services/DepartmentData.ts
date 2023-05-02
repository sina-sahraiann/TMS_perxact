import DepartmentModel from "../models/Department";

export const DepartmentInfo: DepartmentModel[] = [
  {
    id: "pjaoncoan",
    name: "CAE",
    state: [{name:'Running',color:'black'},{name:'Running',color:'red'}],
    type: [{name:'Meshing',color:'red'},{name:'Meshing',color:'blue'}],
    tag: [{name:'Running',color:'blue'},{name:'Running',color:'green'}],
    tickets: [{name:'Running',color:'green'},{name:'Running',color:'gold'}],

  },
  {
    id: "subfousbsfd",
    name: "IT",
    state: [{name:'Running',color:'red'},{name:'Running',color:'green'}],
    type: [{name:'Debugging',color:'green'},{name:'Debugging',color:'gray'}],
    tag: [{name:'Running',color:'gray'},{name:'Running',color:'green'}],
    tickets: [{name:'Running',color:'black'},{name:'Running',color:'black'}],
  },
];

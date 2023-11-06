
export const EqColumns = [
  {
    Header: "Operator",
    accessor: "operatorName",
  },
  {
    Header: "Plate",
    accessor: "plateNumber",
  },
  {
    Header: "Operator Type",
    accessor: "operatorType",
  },
  {
    Header: "Remark",
    accessor: "remark",
  },
  {
    Header: "Inspected by",
    accessor: "inspectorConfirmedId.userName",
  },
  {
    Header: "Fixed by",
    accessor: "mechanicConfirmedId.userName",
  },
  {
    Header: "Status",
    accessor: "status", 
  },
  {
    Header: "Date",
    accessor: "createdAt",
  }
  
] 

//Users
export const UsersColumn = [
  
  {
    Header: "Username",
    accessor: "userName",
  },
  {
    Header: "Email",
    accessor: "email",
  },
  {
    Header: "Role",
    accessor: "role",
  },
  {
    Header: "Created at",
    accessor: "createdAt",
  }
] 

export const WOFColumn = [
  
  // {
  //   Header: "Operator",
  //   accessor: "operatorName",
  // },
  // {
  //   Header: "Operator",
  //   accessor: "operatorName",
  // },
  {
    Header: "Mechanic",
    accessor: "mechanicName",
  },
  {
    Header: "Plate",
    accessor: "plateNumber",
  },
  // {
  //   Header: "Operator Type",
  //   accessor: "operatorType",
  // },
  {
    Header: "Remark",
    accessor: "remark",
  },
  {
    Header: "Activity description",
    accessor: "activityDescription",
  },
  // {
  //   Header: "Inspacted by",
  //   accessor: "inspectorConfirmedId.userName",
  // },
  {
    Header: "Fixed by",
    accessor: "emfId.mechanicConfirmedId.userName",
  },
  {
    Header: "Registered at",
    accessor: "createdAt",
  },
  {
    Header: "Exit date",
    accessor: "exitDate", 
  },
  
] 
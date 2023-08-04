import React from "react";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";

import {useSelector} from "react-redux";

export function EmployeesList() {
    const allEmployees = useSelector(state => state.allEmployees)

    /*const [filterText, setFilterText] = React.useState('');
    const [resetPaginationToggle, setResetPaginationToggle] = React.useState(false);

    const subHeaderComponentMemo = React.useMemo(() => {
        const handleClear = () => {
            if (filterText) {
                setResetPaginationToggle(!resetPaginationToggle);
                setFilterText('');
            }
        };

        return (
            <GridToolbarQuickFilter onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />
        );
    }, [filterText, resetPaginationToggle]);*/



    const columns = [
        {
            name: 'First Name',
            selector: row => row.firstname,
            sortable: true,
        },
        {
            name: 'Last Name',
            selector: row => row.lastname,
            sortable: true,
        },
        {
            name: 'Start Date',
            selector: row => row.startdate,
            sortable: true,
        },
        {
            name: 'Department',
            selector: row => row.department,
        },
        {
            name: 'Date of Birth',
            selector: row => row.dateofbirth,
        },
        {
            name: 'Street',
            selector: row => row.street,
        },
        {
            name: 'City',
            selector: row => row.city,
        },
        {
            name: 'State',
            selector: row => row.state,
        },
        {
            name: 'Zip Code',
            selector: row => row.zipcode,
        },
    ];

    return (
        <div id="employee-div" className="container">
            <h1>Current Employees</h1>
            <DataTableExtensions {...allEmployees}>
                <DataTable
                    columns={columns}
                    data={allEmployees || []}
                    pagination
                    defaultSortField="id"
                    dense
                    highlightOnHover
                />
            </DataTableExtensions>
        </div>
    )
}
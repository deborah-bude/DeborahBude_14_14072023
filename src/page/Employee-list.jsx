import React from "react";
import MUIDataTable from "mui-datatables";
import "react-data-table-component-extensions/dist/index.css";

import {useSelector} from "react-redux";

export function EmployeesList() {
    const allEmployees = useSelector(state => state.allEmployees)

    const columns = [
        {
            label: 'First Name',
            name: "firstname",
            options: {
                filter: true,
                sort: true,
            }

        },
        {
            label: 'Last Name',
            name: "lastname",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            label: 'Start Date',
            name: "startdate",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            label: 'Department',
            name: "department",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            label: 'Date of Birth',
            name: "dateofbirth",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            label: 'Street',
            name: "street",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            label: 'City',
            name: "city",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            label: 'State',
            name: "state",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            label: 'Zip Code',
            name: "zipcode",
            options: {
                filter: true,
                sort: true,
            }
        },
    ];

    const options = {
        filterType: 'checkbox',
    };

    return (
        <div id="employee-div" className="container">
            <h1>Current Employees</h1>
                <MUIDataTable
                    data={allEmployees}
                    columns={columns}
                    options={options}
                />
        </div>
    )
}
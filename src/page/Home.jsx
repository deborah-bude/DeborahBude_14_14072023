import React, {useState} from "react";
import DatePicker from 'react-date-picker'
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import {useDispatch, useSelector} from "react-redux";
import {addEmployee} from "../redux";
import {Modal} from "react-responsive-modal";
import 'react-responsive-modal/styles.css';
import { Dropdown } from "react-library-dropdown"
import "react-library-dropdown/dist/style.css"

export default function Home() {
    const dispatch = useDispatch()
    const [valueBirth, onChangeBirth] = useState(new Date());
    const [valueStart, onChangeStart] = useState(new Date());
    const [open, setOpen] = useState(false);
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);
    const allEmployees = useSelector(state => state.allEmployees)

    const optionsState = [
        {
            "name": "Alabama",
            "value": "AL"
        },
        {
            "name": "Alaska",
            "value": "AK"
        },
        {
            "name": "American Samoa",
            "value": "AS"
        },
        {
            "name": "Arizona",
            "value": "AZ"
        },
        {
            "name": "Arkansas",
            "value": "AR"
        },
        {
            "name": "California",
            "value": "CA"
        },
        {
            "name": "Colorado",
            "value": "CO"
        },
        {
            "name": "Connecticut",
            "value": "CT"
        },
        {
            "name": "Delaware",
            "value": "DE"
        },
        {
            "name": "District Of Columbia",
            "value": "DC"
        },
        {
            "name": "Federated States Of Micronesia",
            "value": "FM"
        },
        {
            "name": "Florida",
            "value": "FL"
        },
        {
            "name": "Georgia",
            "value": "GA"
        },
        {
            "name": "Guam",
            "value": "GU"
        },
        {
            "name": "Hawaii",
            "value": "HI"
        },
        {
            "name": "Idaho",
            "value": "ID"
        },
        {
            "name": "Illinois",
            "value": "IL"
        },
        {
            "name": "Indiana",
            "value": "IN"
        },
        {
            "name": "Iowa",
            "value": "IA"
        },
        {
            "name": "Kansas",
            "value": "KS"
        },
        {
            "name": "Kentucky",
            "value": "KY"
        },
        {
            "name": "Louisiana",
            "value": "LA"
        },
        {
            "name": "Maine",
            "value": "ME"
        },
        {
            "name": "Marshall Islands",
            "value": "MH"
        },
        {
            "name": "Maryland",
            "value": "MD"
        },
        {
            "name": "Massachusetts",
            "value": "MA"
        },
        {
            "name": "Michigan",
            "value": "MI"
        },
        {
            "name": "Minnesota",
            "value": "MN"
        },
        {
            "name": "Mississippi",
            "value": "MS"
        },
        {
            "name": "Missouri",
            "value": "MO"
        },
        {
            "name": "Montana",
            "value": "MT"
        },
        {
            "name": "Nebraska",
            "value": "NE"
        },
        {
            "name": "Nevada",
            "value": "NV"
        },
        {
            "name": "New Hampshire",
            "value": "NH"
        },
        {
            "name": "New Jersey",
            "value": "NJ"
        },
        {
            "name": "New Mexico",
            "value": "NM"
        },
        {
            "name": "New York",
            "value": "NY"
        },
        {
            "name": "North Carolina",
            "value": "NC"
        },
        {
            "name": "North Dakota",
            "value": "ND"
        },
        {
            "name": "Northern Mariana Islands",
            "value": "MP"
        },
        {
            "name": "Ohio",
            "value": "OH"
        },
        {
            "name": "Oklahoma",
            "value": "OK"
        },
        {
            "name": "Oregon",
            "value": "OR"
        },
        {
            "name": "Palau",
            "value": "PW"
        },
        {
            "name": "Pennsylvania",
            "value": "PA"
        },
        {
            "name": "Puerto Rico",
            "value": "PR"
        },
        {
            "name": "Rhode Island",
            "value": "RI"
        },
        {
            "name": "South Carolina",
            "value": "SC"
        },
        {
            "name": "South Dakota",
            "value": "SD"
        },
        {
            "name": "Tennessee",
            "value": "TN"
        },
        {
            "name": "Texas",
            "value": "TX"
        },
        {
            "name": "Utah",
            "value": "UT"
        },
        {
            "name": "Vermont",
            "value": "VT"
        },
        {
            "name": "Virgin Islands",
            "value": "VI"
        },
        {
            "name": "Virginia",
            "value": "VA"
        },
        {
            "name": "Washington",
            "value": "WA"
        },
        {
            "name": "West Virginia",
            "value": "WV"
        },
        {
            "name": "Wisconsin",
            "value": "WI"
        },
        {
            "name": "Wyoming",
            "value": "WY"
        }
    ];

    const optionsDepartement = [
        {
            "name": "Sales",
            "value": "Sales"
        },{
            "name": "Marketing",
            "value": "Marketing"
        },{
            "name": "Engineering",
            "value": "Engineering"
        },{
            "name": "Human Resources",
            "value": "Human Resources"
        },{
            "name": "Legal",
            "value": "Legal"
        }
    ]

    function handleSubmit(event) {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());

        const newEmployee =
                {
                    id: allEmployees ? allEmployees.length : 0,
                    firstname: formJson.firstname,
                    lastname: formJson.lastname,
                    startdate: formJson.startdate,
                    department: formJson.department,
                    dateofbirth: formJson.dateofbirth,
                    street: formJson.street,
                    city: formJson.city,
                    state: formJson.state,
                    zipcode: formJson.zipcode,
                }
        dispatch(addEmployee(newEmployee))
        onOpenModal()
    }

    return (
    <div>
        <h1>Create Employee</h1>
        <form action="#" id="create-employee" onSubmit={handleSubmit}>
            <div className="form_input-container half-input">
                <label htmlFor="first-name">First Name</label>
                <input type="text" id="first-name" name="firstname" placeholder="Firstname"/>
            </div>
            <div className="form_input-container half-input">
                <label htmlFor="last-name">Last Name</label>
                <input type="text" id="last-name" name="lastname" placeholder="Lastname"/>
            </div>
            <div className="form_input-container half-input">
                <label htmlFor="date-of-birth">Date of Birth</label>
                <DatePicker onChange={onChangeBirth} value={valueBirth} closeCalendar={false} format="dd/M/yyyy" name="dateofbirth" required/>
            </div>
            <div className="form_input-container half-input">
                <label htmlFor="start-date">Start Date</label>
                <DatePicker onChange={onChangeStart} value={valueStart} closeCalendar={false} format="dd/M/yyyy" name="startdate" required/>
            </div>
            <div className="form_input-container">
                <fieldset className="address-container">
                    <legend>Address</legend>
                    <div className="form_input-container">
                        <label htmlFor="street">Street</label>
                        <input id="street" type="text" name="street" placeholder="Street"/>
                    </div>
                    <div className="form_input-container">
                        <label htmlFor="city">City</label>
                        <input id="city" type="text" name="city" placeholder="City" />
                    </div>
                    <div className="form_input-container half-input">
                        <Dropdown title="State" options={optionsState} search={true} />
                    </div>
                    <div className="form_input-container half-input">
                        <label htmlFor="zip-code">Zip Code</label>
                        <input id="zip-code" type="number" name="zipcode" placeholder="Zipcode" />
                    </div>
                </fieldset>
            </div>
            <div className="form_input-container">
                <Dropdown title="Department" options={optionsDepartement} search={false} />
            </div>
            <button type="submit">Save</button>
        </form>

        <Modal open={open} onClose={onCloseModal} center>
            <h2>Employee Created !</h2>
        </Modal>
    </div>
    )
}
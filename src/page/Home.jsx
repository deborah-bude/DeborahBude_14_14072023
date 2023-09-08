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
        "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut",
        "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas",
        "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota",
        "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey",
        "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon",
        "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah",
        "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"]

    const optionsDepartement = [
        "Sales", "Marketing", "Engineering", "Human Resources", "Legal"
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
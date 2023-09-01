import React, {useState} from "react";
import DatePicker from 'react-date-picker'
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import {useDispatch, useSelector} from "react-redux";
import {addEmployee} from "../redux";
import {Modal} from "react-responsive-modal";
import 'react-responsive-modal/styles.css';
import { Dropdown } from "react-library-dropdown"
//import "react-library-dropdown/dist/style.css"

export function Home() {
    const dispatch = useDispatch()
    const [valueBirth, onChangeBirth] = useState(new Date());
    const [valueStart, onChangeStart] = useState(new Date());
    const [open, setOpen] = useState(false);
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);
    const allEmployees = useSelector(state => state.allEmployees)

    const options = [
        {value: "AF", content: "Afghanistan", group: "Asia"},
        {value: "AL", content: "Albania", group: "Europa"},
        {value: "DZ", content: "Algeria", group: "Africa"},
        {value: "AS", content: "American Samoa", group: "Oceania"},
        {value: "AD", content: "Andorra", group: "Europa"},
        {value: "AO", content: "Angola", group: "Africa"},
        {value: "AI", content: "Anguilla", group: "American"},
        {value: "AQ", content: "Antarctica", group: "Antarctica"},
        {value: "AG", content: "Antigua and Barbuda", group: "American"},
        {value: "AR", content: "Argentina", group: "American"},
        {value: "AM", content: "Armenia", group: "Asia"},
        {value: "AW", content: "Aruba", group: "American"},
        {value: "AU", content: "Australia", group: "Oceania"},
        {value: "AT", content: "Austria", group: "Europa"},
        {value: "AZ", content: "Azerbaijan", group: "Asia"},
        {value: "BS", content: "Bahamas (the)", group: "American"},
        {value: "BH", content: "Bahrain", group: "Asia"},
        {value: "BD", content: "Bangladesh", group: "Asia"},
        {value: "BB", content: "Barbados", group: "American"},
        {value: "BY", content: "Belarus", group: "Europa"},
        {value: "BE", content: "Belgium", group: "Europa"},
        {value: "BZ", content: "Belize", group: "Bahrain"},
        {value: "BJ", content: "Benin", group: "Africa"},
        {value: "BM", content: "Bermuda", group: "American"},
        {value: "BT", content: "Bhutan", group: "Asia"},
        {value: "BO", content: "Bolivia (Plurinational State of)", group: "Europa"},
        {value: "BQ", content: "Bonaire, Sint Eustatius and Saba", group: "American"},
        {value: "BA", content: "Bosnia and Herzegovina", group: "Europa"},
        {value: "BW", content: "Botswana", group: "Africa"},
        {value: "BV", content: "Bouvet Island", group: "Antarctica"},
        {value: "BR", content: "Brazil", group: "American"},
        {value: "IO", content: "British Indian Ocean Territory (the)", group: "Asia"},
        {value: "BN", content: "Brunei Darussalam", group: "Oceania"},
        {value: "BG", content: "Bulgaria", group: "Europa"},
        {value: "BF", content: "Burkina Faso", group: "Africa"},
        {value: "BI", content: "Burundi", group: "Africa"},
        {value: "CV", content: "Cabo Verde", group: "Africa"},
        {value: "KH", content: "Cambodia", group: "Asia"},
        {value: "CM", content: "Cameroon", group: "Africa"},
        {value: "CA", content: "Canada", group: "America"},
        {value: "KY", content: "Cayman Islands (the)", group: "Oceania"},
        {value: "CF", content: "Central African Republic (the)", group: ""},
        {value: "TD", content: "Chad", group: ""},
        {value: "CL", content: "Chile", group: ""},
        {value: "CN", content: "China", group: ""},
        {value: "CX", content: "Christmas Island", group: ""},
        {value: "CC", content: "Cocos (Keeling) Islands (the)", group: ""},
        {value: "CO", content: "Colombia", group: ""},
        {value: "KM", content: "Comoros (the)", group: ""},
        {value: "CD", content: "Congo (the Democratic Republic of the)", group: ""},
        {value: "CG", content: "Congo (the)", group: ""},
        {value: "CK", content: "Cook Islands (the)", group: ""},
        {value: "CR", content: "Costa Rica", group: ""},
        {value: "HR", content: "Croatia", group: ""},
        {value: "CU", content: "Cuba", group: ""},
        {value: "CW", content: "Curaçao", group: ""},
        {value: "CY", content: "Cyprus", group: ""},
        {value: "CZ", content: "Czechia", group: ""},
        {value: "CI", content: "Côte d'Ivoire", group: ""},
        {value: "DK", content: "Denmark", group: ""},
        {value: "DJ", content: "Djibouti", group: ""},
        {value: "DM", content: "Dominica", group: ""},
        {value: "DO", content: "Dominican Republic (the)", group: ""},
        {value: "EC", content: "Ecuador", group: ""},
        {value: "EG", content: "Egypt", group: ""},
        {value: "SV", content: "El Salvador", group: ""},
        {value: "GQ", content: "Equatorial Guinea", group: ""},
        {value: "ER", content: "Eritrea", group: ""},
        {value: "EE", content: "Estonia", group: ""},
        {value: "SZ", content: "Eswatini", group: ""},
        {value: "ET", content: "Ethiopia", group: ""},
        {value: "FK", content: "Falkland Islands (the) [Malvinas]", group: ""},
        {value: "FO", content: "Faroe Islands (the)", group: ""},
        {value: "FJ", content: "Fiji", group: ""},
        {value: "FI", content: "Finland", group: ""},
        {value: "FR", content: "France", group: ""},
        {value: "GF", content: "French Guiana", group: ""},
        {value: "PF", content: "French Polynesia", group: ""},
        {value: "TF", content: "French Southern Territories (the)", group: ""},
        {value: "GA", content: "Gabon", group: ""},
        {value: "GM", content: "Gambia (the)", group: ""},
        {value: "GE", content: "Georgia", group: ""},
        {value: "DE", content: "Germany", group: ""},
        {value: "GH", content: "Ghana", group: ""},
        {value: "GI", content: "Gibraltar", group: ""},
        {value: "GR", content: "Greece", group: ""},
        {value: "GL", content: "Greenland", group: ""},
        {value: "GD", content: "Grenada", group: ""},
        {value: "GP", content: "Guadeloupe", group: ""},
        {value: "GU", content: "Guam", group: ""},
        {value: "GT", content: "Guatemala", group: ""},
        {value: "GG", content: "Guernsey", group: ""},
        {value: "GN", content: "Guinea", group: ""},
        {value: "GW", content: "Guinea-Bissau", group: ""},
        {value: "GY", content: "Guyana", group: ""},
        {value: "HT", content: "Haiti", group: ""},
        {value: "HM", content: "Heard Island and McDonald Islands", group: ""},
        {value: "VA", content: "Holy See (the)", group: ""},
        {value: "HN", content: "Honduras", group: ""},
        {value: "HK", content: "Hong Kong", group: ""},
        {value: "HU", content: "Hungary", group: ""},
        {value: "IS", content: "Iceland", group: ""},
        {value: "IN", content: "India", group: ""},
        {value: "ID", content: "Indonesia", group: ""},
        {value: "IR", content: "Iran (Islamic Republic of)", group: ""},
        {value: "IQ", content: "Iraq", group: ""},
        {value: "IE", content: "Ireland", group: ""},
        {value: "IM", content: "Isle of Man", group: ""},
        {value: "IL", content: "Israel", group: ""},
        {value: "IT", content: "Italy", group: ""},
        {value: "JM", content: "Jamaica", group: ""},
        {value: "JP", content: "Japan", group: ""},
        {value: "JE", content: "Jersey", group: ""},
        {value: "JO", content: "Jordan", group: ""},
        {value: "KZ", content: "Kazakhstan", group: ""},
        {value: "KE", content: "Kenya", group: ""},
        {value: "KI", content: "Kiribati", group: ""},
        {value: "KP", content: "Korea (the Democratic People's Republic of)", group: ""},
        {value: "KR", content: "Korea (the Republic of)", group: ""},
        {value: "KW", content: "Kuwait", group: ""},
        {value: "KG", content: "Kyrgyzstan", group: ""},
        {value: "LA", content: "Lao People's Democratic Republic (the)", group: ""},
        {value: "LV", content: "Latvia", group: ""},
        {value: "LB", content: "Lebanon", group: ""},
        {value: "LS", content: "Lesotho", group: ""},
        {value: "LR", content: "Liberia", group: ""},
        {value: "LY", content: "Libya", group: ""},
        {value: "LI", content: "Liechtenstein", group: ""},
        {value: "LT", content: "Lithuania", group: ""},
        {value: "LU", content: "Luxembourg", group: ""},
        {value: "MO", content: "Macao", group: ""},
        {value: "MG", content: "Madagascar", group: ""},
        {value: "MW", content: "Malawi", group: ""},
        {value: "MY", content: "Malaysia", group: ""},
        {value: "MV", content: "Maldives", group: ""},
        {value: "ML", content: "Mali", group: ""},
        {value: "MT", content: "Malta", group: ""},
        {value: "MH", content: "Marshall Islands (the)", group: ""},
        {value: "MQ", content: "Martinique", group: ""},
        {value: "MR", content: "Mauritania", group: ""},
        {value: "MU", content: "Mauritius", group: ""},
        {value: "YT", content: "Mayotte", group: ""},
        {value: "MX", content: "Mexico", group: ""},
        {value: "FM", content: "Micronesia (Federated States of)", group: ""},
        {value: "MD", content: "Moldova (the Republic of)", group: ""},
        {value: "MC", content: "Monaco", group: ""},
        {value: "MN", content: "Mongolia", group: ""},
        {value: "ME", content: "Montenegro", group: ""},
        {value: "MS", content: "Montserrat", group: ""},
        {value: "MA", content: "Morocco", group: ""},
        {value: "MZ", content: "Mozambique", group: ""},
        {value: "MM", content: "Myanmar", group: ""},
        {value: "NA", content: "Namibia", group: ""},
        {value: "NR", content: "Nauru", group: ""},
        {value: "NP", content: "Nepal", group: ""},
        {value: "NL", content: "Netherlands (the)", group: ""},
        {value: "NC", content: "New Caledonia", group: ""},
        {value: "NZ", content: "New Zealand", group: ""},
        {value: "NI", content: "Nicaragua", group: ""},
        {value: "NE", content: "Niger (the)", group: ""},
        {value: "NG", content: "Nigeria", group: ""},
        {value: "NU", content: "Niue", group: ""},
        {value: "NF", content: "Norfolk Island", group: ""},
        {value: "MP", content: "Northern Mariana Islands (the)", group: ""},
        {value: "NO", content: "Norway", group: ""},
        {value: "OM", content: "Oman", group: ""},
        {value: "PK", content: "Pakistan", group: ""},
        {value: "PW", content: "Palau", group: ""},
        {value: "PS", content: "Palestine, State of", group: ""},
        {value: "PA", content: "Panama", group: ""},
        {value: "PG", content: "Papua New Guinea", group: ""},
        {value: "PY", content: "Paraguay", group: ""},
        {value: "PE", content: "Peru", group: ""},
        {value: "PH", content: "Philippines (the)", group: ""},
        {value: "PN", content: "Pitcairn", group: ""},
        {value: "PL", content: "Poland", group: ""},
        {value: "PT", content: "Portugal", group: ""},
        {value: "PR", content: "Puerto Rico", group: ""},
        {value: "QA", content: "Qatar", group: ""},
        {value: "MK", content: "Republic of North Macedonia", group: ""},
        {value: "RO", content: "Romania", group: ""},
        {value: "RU", content: "Russian Federation (the)", group: ""},
        {value: "RW", content: "Rwanda", group: ""},
        {value: "RE", content: "Réunion", group: ""},
        {value: "BL", content: "Saint Barthélemy", group: ""},
        {value: "SH", content: "Saint Helena, Ascension and Tristan da Cunha", group: ""},
        {value: "KN", content: "Saint Kitts and Nevis", group: ""},
        {value: "LC", content: "Saint Lucia", group: ""},
        {value: "MF", content: "Saint Martin (French part)", group: ""},
        {value: "PM", content: "Saint Pierre and Miquelon", group: ""},
        {value: "VC", content: "Saint Vincent and the Grenadines", group: ""},
        {value: "WS", content: "Samoa", group: ""},
        {value: "SM", content: "San Marino", group: ""},
        {value: "ST", content: "Sao Tome and Principe", group: ""},
        {value: "SA", content: "Saudi Arabia", group: ""},
        {value: "SN", content: "Senegal", group: ""},
        {value: "RS", content: "Serbia", group: ""},
        {value: "SC", content: "Seychelles", group: ""},
        {value: "SL", content: "Sierra Leone", group: ""},
        {value: "SG", content: "Singapore", group: ""},
        {value: "SX", content: "Sint Maarten (Dutch part)", group: ""},
        {value: "SK", content: "Slovakia", group: ""},
        {value: "SI", content: "Slovenia", group: ""},
        {value: "SB", content: "Solomon Islands", group: ""},
        {value: "SO", content: "Somalia", group: ""},
        {value: "ZA", content: "South Africa", group: ""},
        {value: "GS", content: "South Georgia and the South Sandwich Islands", group: ""},
        {value: "SS", content: "South Sudan", group: ""},
        {value: "ES", content: "Spain", group: ""},
        {value: "LK", content: "Sri Lanka", group: ""},
        {value: "SD", content: "Sudan (the)", group: ""},
        {value: "SR", content: "Suriname", group: ""},
        {value: "SJ", content: "Svalbard and Jan Mayen", group: ""},
        {value: "SE", content: "Sweden", group: ""},
        {value: "CH", content: "Switzerland", group: ""},
        {value: "SY", content: "Syrian Arab Republic", group: ""},
        {value: "TW", content: "Taiwan", group: ""},
        {value: "TJ", content: "Tajikistan", group: ""},
        {value: "TZ", content: "Tanzania, United Republic of", group: ""},
        {value: "TH", content: "Thailand", group: ""},
        {value: "TL", content: "Timor-Leste", group: ""},
        {value: "TG", content: "Togo", group: ""},
        {value: "TK", content: "Tokelau", group: ""},
        {value: "TO", content: "Tonga", group: ""},
        {value: "TT", content: "Trinidad and Tobago", group: ""},
        {value: "TN", content: "Tunisia", group: ""},
        {value: "TR", content: "Turkey", group: ""},
        {value: "TM", content: "Turkmenistan", group: ""},
        {value: "TC", content: "Turks and Caicos Islands (the)", group: ""},
        {value: "TV", content: "Tuvalu", group: ""},
        {value: "UG", content: "Uganda", group: ""},
        {value: "UA", content: "Ukraine", group: ""},
        {value: "AE", content: "United Arab Emirates (the)", group: ""},
        {value: "GB", content: "United Kingdom of Great Britain and Northern Ireland (the)", group: ""},
        {value: "UM", content: "United States Minor Outlying Islands (the)", group: ""},
        {value: "US", content: "United States of America (the)", group: ""},
        {value: "UY", content: "Uruguay", group: ""},
        {value: "UZ", content: "Uzbekistan", group: ""},
        {value: "VU", content: "Vanuatu", group: ""},
        {value: "VE", content: "Venezuela (Bolivarian Republic of)", group: ""},
        {value: "VN", content: "Viet Nam", group: ""},
        {value: "VG", content: "Virgin Islands (British)", group: ""},
        {value: "VI", content: "Virgin Islands (U.S.)", group: ""},
        {value: "WF", content: "Wallis and Futuna", group: ""},
        {value: "EH", content: "Western Sahara", group: ""},
        {value: "YE", content: "Yemen", group: ""},
        {value: "ZM", content: "Zambia", group: ""},
        {value: "ZW", content: "Zimbabwe", group: ""},
        {value: "AX", content: "Åland Islands", group: ""}]

    const optionGroup = [
        { content: 'one', value: 'One' },
        { content: 'two', value: 'Two' },
        {
            type: 'group', name: 'Europa', items: [
                {value: "AL", content: "Albania"},
                {value: "AD", content: "Andorra"},
                {value: "AT", content: "Austria"},
                {value: "BY", content: "Belarus"},
                {value: "BE", content: "Belgium"},
                {value: "BA", content: "Bosnia and Herzegovina"},
                {value: "BO", content: "Bolivia (Plurinational State of)"},
                {value: "BG", content: "Bulgaria"},
                {value: "HR", content: "Croatia"},
                {value: "CY", content: "Cyprus"},
                {value: "CZ", content: "Czechia"},
                {value: "DK", content: "Denmark"},
                {value: "EE", content: "Estonia"},
                {value: "FO", content: "Faroe Islands (the)"},
                {value: "FI", content: "Finland"},
                {value: "FR", content: "France"},
                {value: "GE", content: "Georgia"},
                {value: "DE", content: "Germany"},
                {value: "GI", content: "Gibraltar"},
                {value: "GR", content: "Greece"},
                {value: "GG", content: "Guernsey"},
                {value: "VA", content: "Holy See (the)"},
                {value: "HU", content: "Hungary"},
                {value: "IS", content: "Iceland"},
                {value: "IE", content: "Ireland"},
                {value: "IM", content: "Isle of Man"},
                {value: "IT", content: "Italy"},
                {value: "JE", content: "Jersey"},
                {value: "LV", content: "Latvia"},
                {value: "LI", content: "Liechtenstein"},
                {value: "LT", content: "Lithuania"},
                {value: "LU", content: "Luxembourg"},
                {value: "MT", content: "Malta"},
                {value: "MD", content: "Moldova (the Republic of)"},
                {value: "MC", content: "Monaco"},
                {value: "ME", content: "Montenegro"},
                {value: "NL", content: "Netherlands (the)"},
                {value: "NO", content: "Norway"},
                {value: "PL", content: "Poland"},
                {value: "PT", content: "Portugal"},
                {value: "MK", content: "Republic of North Macedonia"},
                {value: "RO", content: "Romania"},
                {value: "SM", content: "San Marino"},
                {value: "RS", content: "Serbia"},
                {value: "SK", content: "Slovakia"},
                {value: "SI", content: "Slovenia"},
                {value: "ES", content: "Spain"},
                {value: "SJ", content: "Svalbard and Jan Mayen"},
                {value: "SE", content: "Sweden"},
                {value: "CH", content: "Switzerland"},
                {value: "TR", content: "Turkey"},
                {value: "UA", content: "Ukraine"},
                {value: "GB", content: "United Kingdom of Great Britain and Northern Ireland (the)"},
                {value: "AX", content: "Åland Islands"}
            ]
        },
        {
            type: 'group', name: 'America', items: [
                {value: "AI", content: "Anguilla"},
                {value: "AG", content: "Antigua and Barbuda"},
                {value: "AR", content: "Argentina"},
                {value: "AW", content: "Aruba"},
                {value: "BS", content: "Bahamas (the)"},
                {value: "BB", content: "Barbados"},
                {value: "BZ", content: "Belize"},
                {value: "BM", content: "Bermuda"},
                {value: "BQ", content: "Bonaire, Sint Eustatius and Saba"},
                {value: "BR", content: "Brazil"},
                {value: "CA", content: "Canada"},
                {value: "TD", content: "Chad"},
                {value: "CL", content: "Chile"},
                {value: "CO", content: "Colombia"},
                {value: "CR", content: "Costa Rica"},
                {value: "CU", content: "Cuba"},
                {value: "CW", content: "Curaçao"},
                {value: "DM", content: "Dominica"},
                {value: "DO", content: "Dominican Republic (the)"},
                {value: "SV", content: "El Salvador"},
                {value: "FK", content: "Falkland Islands (the) [Malvinas]"},
                {value: "GF", content: "French Guiana"},
                {value: "GL", content: "Greenland"},
                {value: "GD", content: "Grenada"},
                {value: "GP", content: "Guadeloupe"},
                {value: "GT", content: "Guatemala"},
                {value: "GY", content: "Guyana"},
                {value: "HT", content: "Haiti"},
                {value: "HN", content: "Honduras"},
                {value: "JM", content: "Jamaica"},
                {value: "MQ", content: "Martinique"},
                {value: "MX", content: "Mexico"},
                {value: "MS", content: "Montserrat"},
                {value: "NI", content: "Nicaragua"},
                {value: "PA", content: "Panama"},
                {value: "PY", content: "Paraguay"},
                {value: "PE", content: "Peru"},
                {value: "PR", content: "Puerto Rico"},
                {value: "BL", content: "Saint Barthélemy"},
                {value: "SH", content: "Saint Helena, Ascension and Tristan da Cunha"},
                {value: "KN", content: "Saint Kitts and Nevis"},
                {value: "LC", content: "Saint Lucia"},
                {value: "MF", content: "Saint Martin (French part)"},
                {value: "PM", content: "Saint Pierre and Miquelon"},
                {value: "VC", content: "Saint Vincent and the Grenadines"},
                {value: "SX", content: "Sint Maarten (Dutch part)"},
                {value: "SR", content: "Suriname"},
                {value: "TT", content: "Trinidad and Tobago"},
                {value: "TC", content: "Turks and Caicos Islands (the)"},
                {value: "UM", content: "United States Minor Outlying Islands (the)"},
                {value: "US", content: "United States of America (the)"},
                {value: "UY", content: "Uruguay"},
                {value: "VE", content: "Venezuela (Bolivarian Republic of)"},
                {value: "VG", content: "Virgin Islands (British)"},
                {value: "VI", content: "Virgin Islands (U.S.)"},
            ]
        },
        {
            type: 'group', name: 'Asia', items: [
                {value: "AF", content: "Afghanistan"},
                {value: "AM", content: "Armenia"},
                {value: "AZ", content: "Azerbaijan"},
                {value: "BH", content: "Bahrain"},
                {value: "BD", content: "Bangladesh"},
                {value: "BT", content: "Bhutan"},
                {value: "KH", content: "Cambodia"},
                {value: "IO", content: "British Indian Ocean Territory (the)"},
                {value: "CN", content: "China"},
                {value: "CX", content: "Christmas Island"},
                {value: "HK", content: "Hong Kong"},
                {value: "IN", content: "India"},
                {value: "ID", content: "Indonesia"},
                {value: "IR", content: "Iran (Islamic Republic of)"},
                {value: "IQ", content: "Iraq"},
                {value: "IL", content: "Israel"},
                {value: "JP", content: "Japan"},
                {value: "JO", content: "Jordan"},
                {value: "KZ", content: "Kazakhstan"},
                {value: "KI", content: "Kiribati"},
                {value: "KP", content: "Korea (the Democratic People's Republic of)"},
                {value: "KR", content: "Korea (the Republic of)"},
                {value: "KW", content: "Kuwait"},
                {value: "KG", content: "Kyrgyzstan"},
                {value: "LA", content: "Lao People's Democratic Republic (the)"},
                {value: "LB", content: "Lebanon"},
                {value: "MO", content: "Macao"},
                {value: "MY", content: "Malaysia"},
                {value: "MV", content: "Maldives"},
                {value: "MN", content: "Mongolia"},
                {value: "MM", content: "Myanmar"},
                {value: "NP", content: "Nepal"},
                {value: "OM", content: "Oman"},
                {value: "PK", content: "Pakistan"},
                {value: "PS", content: "Palestine, State of"},
                {value: "QA", content: "Qatar"},
                {value: "RU", content: "Russian Federation (the)"},
                {value: "SA", content: "Saudi Arabia"},
                {value: "SG", content: "Singapore"},
                {value: "LK", content: "Sri Lanka"},
                {value: "SY", content: "Syrian Arab Republic"},
                {value: "TW", content: "Taiwan"},
                {value: "TJ", content: "Tajikistan"},
                {value: "TH", content: "Thailand"},
                {value: "TM", content: "Turkmenistan"},
                {value: "AE", content: "United Arab Emirates (the)"},
                {value: "UZ", content: "Uzbekistan"},
                {value: "VN", content: "Viet Nam"},
                {value: "YE", content: "Yemen"}
            ]
        },
        {
            type: 'group', name: 'Africa', items: [
                {value: "DZ", content: "Algeria"},
                {value: "AO", content: "Angola"},
                {value: "BJ", content: "Benin"},
                {value: "BW", content: "Botswana"},
                {value: "BF", content: "Burkina Faso"},
                {value: "BI", content: "Burundi"},
                {value: "CV", content: "Cabo Verde"},
                {value: "CM", content: "Cameroon"},
                {value: "CF", content: "Central African Republic (the)"},
                {value: "KM", content: "Comoros (the)"},
                {value: "CD", content: "Congo (the Democratic Republic of the)"},
                {value: "CG", content: "Congo (the)"},
                {value: "CI", content: "Côte d'Ivoire"},
                {value: "DJ", content: "Djibouti"},
                {value: "EC", content: "Ecuador"},
                {value: "EG", content: "Egypt"},
                {value: "GQ", content: "Equatorial Guinea"},
                {value: "ER", content: "Eritrea"},
                {value: "SZ", content: "Eswatini"},
                {value: "ET", content: "Ethiopia"},
                {value: "GA", content: "Gabon"},
                {value: "GM", content: "Gambia (the)"},
                {value: "GH", content: "Ghana"},
                {value: "GN", content: "Guinea"},
                {value: "GW", content: "Guinea-Bissau"},
                {value: "KE", content: "Kenya"},
                {value: "LS", content: "Lesotho"},
                {value: "LR", content: "Liberia"},
                {value: "LY", content: "Libya"},
                {value: "MG", content: "Madagascar"},
                {value: "MW", content: "Malawi"},
                {value: "ML", content: "Mali"},
                {value: "MR", content: "Mauritania"},
                {value: "MU", content: "Mauritius"},
                {value: "YT", content: "Mayotte"},
                {value: "MA", content: "Morocco"},
                {value: "MZ", content: "Mozambique"},
                {value: "NA", content: "Namibia"},
                {value: "NE", content: "Niger (the)"},
                {value: "NG", content: "Nigeria"},
                {value: "NU", content: "Niue"},
                {value: "RW", content: "Rwanda"},
                {value: "RE", content: "Réunion"},
                {value: "ST", content: "Sao Tome and Principe"},
                {value: "SN", content: "Senegal"},
                {value: "SC", content: "Seychelles"},
                {value: "SL", content: "Sierra Leone"},
                {value: "SO", content: "Somalia"},
                {value: "ZA", content: "South Africa"},
                {value: "SS", content: "South Sudan"},
                {value: "SD", content: "Sudan (the)"},
                {value: "TZ", content: "Tanzania, United Republic of"},
                {value: "TG", content: "Togo"},
                {value: "TN", content: "Tunisia"},
                {value: "UG", content: "Uganda"},
                {value: "EH", content: "Western Sahara"},
                {value: "ZM", content: "Zambia"},
                {value: "ZW", content: "Zimbabwe"}
            ]
        },
        {
            type: 'group', name: 'Oceania', items: [
                {value: "AS", content: "American Samoa"},
                {value: "AU", content: "Australia"},
                {value: "BN", content: "Brunei Darussalam"},
                {value: "KY", content: "Cayman Islands (the)"},
                {value: "CC", content: "Cocos (Keeling) Islands (the)"},
                {value: "CK", content: "Cook Islands (the)"},
                {value: "FJ", content: "Fiji"},
                {value: "PF", content: "French Polynesia"},
                {value: "GU", content: "Guam"},
                {value: "HM", content: "Heard Island and McDonald Islands"},
                {value: "MH", content: "Marshall Islands (the)"},
                {value: "FM", content: "Micronesia (Federated States of)"},
                {value: "NR", content: "Nauru"},
                {value: "NC", content: "New Caledonia"},
                {value: "NZ", content: "New Zealand"},
                {value: "NF", content: "Norfolk Island"},
                {value: "MP", content: "Northern Mariana Islands (the)"},
                {value: "PW", content: "Palau"},
                {value: "PG", content: "Papua New Guinea"},
                {value: "PH", content: "Philippines (the)"},
                {value: "PN", content: "Pitcairn"},
                {value: "WS", content: "Samoa"},
                {value: "SB", content: "Solomon Islands"},
                {value: "TL", content: "Timor-Leste"},
                {value: "TK", content: "Tokelau"},
                {value: "TO", content: "Tonga"},
                {value: "TV", content: "Tuvalu"},
                {value: "VU", content: "Vanuatu"},
                {value: "WF", content: "Wallis and Futuna"}
            ]
        },
        {
            type: 'group', name: 'Antartica', items: [
                {value: "AQ", content: "Antarctica"},
                {value: "BV", content: "Bouvet Island"},
                {value: "TF", content: "French Southern Territories (the)"},
                {value: "GS", content: "South Georgia and the South Sandwich Islands"},
            ]
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
                <input type="text" id="first-name" name="firstname"/>
            </div>
            <div className="form_input-container half-input">
                <label htmlFor="last-name">Last Name</label>
                <input type="text" id="last-name" name="lastname"/>
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
                <fieldset className="address">
                    <legend>Address</legend>
                    <div className="form_input-container">
                        <label htmlFor="street">Street</label>
                        <input id="street" type="text" name="street" />
                    </div>
                    <div className="form_input-container">
                        <label htmlFor="city">City</label>
                        <input id="city" type="text" name="city" />
                    </div>
                    <div className="form_input-container half-input">
                        <Dropdown title="State" options={optionGroup} />
                        <Dropdown title="State" options={options} />
                    </div>
                    <div className="form_input-container half-input">
                        <label htmlFor="zip-code">Zip Code</label>
                        <input id="zip-code" type="number" name="zipcode" />
                    </div>
                </fieldset>
            </div>
            <div className="form_input-container">
                <label htmlFor="department">Department</label>
                <select name="department" id="department">
                    <option>Sales</option>
                    <option>Marketing</option>
                    <option>Engineering</option>
                    <option>Human Resources</option>
                    <option>Legal</option>
                </select>
            </div>
            <button type="submit">Save</button>
        </form>

        <Modal open={open} onClose={onCloseModal} center>
            <h2>Employee Created !</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
                hendrerit risus, sed porttitor quam.
            </p>
        </Modal>
    </div>
    )
}
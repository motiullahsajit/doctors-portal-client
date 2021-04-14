import React from 'react';
import Calendar from 'react-calendar';
import AppointmentsByDate from '../AppointmentsByDate/AppointmentsByDate';
import Sidebar from '../Sidebar/Sidebar';
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import Navbar from '../../Shared/Navbar/Navbar';
import AllPatients from '../AllPatients/AllPatients';
import AddDoctor from '../AddDoctor/AddDoctor';
import AppointmentDash from '../AppointmentDash/AppointmentDash';
import Settings from '../Settings/Settings';

const containerStyle = {
    backgroundColor: '#F4FDFB',
    height: '100%'
}

const DashBoard = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())
    const handleDateChange = date => {
        setSelectedDate(date)
    };
    let { path } = useRouteMatch();
    return (
        <section>
            <div style={containerStyle} className="row">
                <div className="col-md-2">
                    <Sidebar />
                </div>
                <div className="col-md-10">
                    <Navbar />
                    <Switch>
                        <Route exact path={path}>
                            <AppointmentDash selectedDate={selectedDate} />
                        </Route>
                        <Route path={`${path}/appointments`}>
                            <div className="row">
                                <div className="col-md-3 d-flex justify-content-center">
                                    <Calendar
                                        onChange={handleDateChange}
                                        value={new Date()}
                                    />
                                </div>
                                <div className="col-md-8 d-flex justify-content-center">
                                    <AppointmentsByDate selectedDate={selectedDate} />
                                </div>
                            </div>
                        </Route>
                        <Route path={`${path}/patients`}>
                            <AllPatients />
                        </Route>
                        <Route path={`${path}/addDoctor`}>
                            <AddDoctor />
                        </Route>
                        <Route path={`${path}/settings`}>
                            <Settings />
                        </Route>
                    </Switch>
                </div>
            </div>
        </section>
    );
};

export default DashBoard;




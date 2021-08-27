import React, { useState } from 'react'

import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import Navbar from '../ui/Navbar.js'
import "react-big-calendar/lib/css/react-big-calendar.css";
import 'moment/locale/es'

import { messages } from '../../helpers/calendar-messages-es.js';
import { CalendarEvent } from './CalendarEvent.js';
import { CalendarModal } from './CalendarModal.js';

moment.locale('es')

const localizer = momentLocalizer(moment)

const events = [{
    title: "Ejemplo",
    start: moment().toDate(), //new Date()
    end: moment().add(2,'hours').toDate(),
    user: {
        _id: '123',
        name: 'Rodolfo'
    }
}]



const CalendarScreen = () => {


    const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month' )

    const onDoubleClick = ( e ) => {
        console.log( e )
    }
    
    const onSelectEvent = ( e )  => {
        console.log( e )
    }
    
    const onViewChange = ( e ) => {
        setLastView(e)
        localStorage.setItem('lastView', e)
    }

    return (
        <div className="calendar-screen">
            <Navbar />
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                messages={messages}
                components={{
                    event: CalendarEvent
                }}
                onDoubleClickEvent={ onDoubleClick }
                onSelectEvent= { onSelectEvent }
                onView= { onViewChange }
                view={ lastView }
            />

            <CalendarModal />
        </div>
    )
}

export default CalendarScreen

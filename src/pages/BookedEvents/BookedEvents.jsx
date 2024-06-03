import React from 'react'
import Navbar from '../../components/BookedEvents/NavBar/Navbar'
import BookedEventsMain from '../../components/BookedEvents/BookedEventsMain/BookedEventsMain';
import style from './styles.module.css';
function BookedEvents() {
    return (
        <>
            <Navbar/>
            <BookedEventsMain />
        </>
    )
}

export default BookedEvents

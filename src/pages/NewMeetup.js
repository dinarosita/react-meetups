import React from 'react'
import NewMeetupForm from '../components/meetups/NewMeetupForm'

export default function NewMeetupPage() {
    function addMeetupHandler(meetupData) {
        fetch ('https://react-meetup-6b19e-default-rtdb.firebaseio.com/meetups.json',
        {
            method: 'POST',
            body: JSON.stringify(meetupData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
  return (
    <section>
      <h1>New Meetup Page</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  )
}

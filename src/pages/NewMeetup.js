import React from 'react'
import NewMeetupForm from '../components/meetups/NewMeetupForm'

export default function NewMeetupPage() {
    function addMeetupHandler(meetupData) {}
  return (
    <section>
      <h1>New Meetup Page</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  )
}

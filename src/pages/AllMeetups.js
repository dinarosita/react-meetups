import React from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_DATA = [
  {
    id: "m1",
    title: "Jodhpur Blue City",
    image:
      "https://duaransel.com/wp-content/uploads/2013/08/India-Jodhpur-Blue-City-3-4-1600-2R1.jpg",
    address: "Jodhpur, India",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "m2",
    title: "El Nido",
    image:
      "https://duaransel.com/wp-content/uploads/2013/08/Philippines-El-Nido-Matinloc-view-near-shrine-Twitter-2R-2.jpg",
    address: "El Nido, Philippines",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
];

export default function AllMeetupsPage() {
  return (
    <section>
      <h1>All Meetups Page</h1>
      <MeetupList meetups={DUMMY_DATA} />
    </section>
  );
}

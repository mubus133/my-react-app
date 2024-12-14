import { useNavigate } from 'react-router-dom';

import NewMeetupForm from "../Meetups/NewMeetupForm";

function NewMeetupPage() {
    const navigate = useNavigate();

  function addMeetupHandler(meetupData) {
    fetch(
      "https://reactmeetups-320d7-default-rtdb.firebaseio.com/meetups.json",
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        header: {
            'Content-Type': 'application/json'
        }
      }
    ).then(() => {
        navigate('/')
    });
  }
  return (
    <section>
      <h1>Add New meetups </h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;

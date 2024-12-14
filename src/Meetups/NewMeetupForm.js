import { useRef } from 'react';

import Card from '../ui/Card';
import classes from './NewMeetupForm.module.css';

function NewMeetupForm(props) {
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();



  function submitHandler(event) {
    event.preventDefault();


    const enteteredTitle = titleInputRef.current.value;
    const enteteredImage = imageInputRef.current.value;
    const enteteredAddress = addressInputRef.current.value;
    const enteteredDesciption = descriptionInputRef.current.value;


    const meetupData = {
        title: enteteredTitle,
        image: enteteredImage,
        address: enteteredAddress,
        description: enteteredDesciption,
    }

    props.onAddMeetup(meetupData);

    
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='title'>Meetup Title</label>
          <input type='text' required id='title' ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>Meetup Image</label>
          <input type='url' required id='image' ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='address'>Address</label>
          <input type='text' required id='address' ref={addressInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>Description</label>
          <textarea id='description' required rows='5' ref={descriptionInputRef} ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
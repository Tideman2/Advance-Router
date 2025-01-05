import EventForm from "../components/EventForm"
import { redirect } from 'react-router-dom'

 //gh GH ||''
function NewEventPage() {
    return (
       <EventForm />
    )
}

export default NewEventPage

export async function action({request, params}) {
 let data = await request.formData();

 let eventData = {
    title: data.get('title'),
    image: data.get('image'),
    date: data.get('date'),
    description: data.get('description'),
 }

 let response = await fetch('http://localhost:8080/events', {
    method: 'POST',
    headers: {
     'Content-Type': 'application/json',
    },
    body: JSON.stringify(eventData),
  });

  if(!response.ok) {
    console.log(response)
    throw new Response(JSON.stringify({message: `failed to send new event to backend`}), {
        status:500
    })
  }

  return redirect('/events')
}
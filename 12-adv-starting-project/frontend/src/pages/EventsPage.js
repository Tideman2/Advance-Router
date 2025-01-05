import { useLoaderData } from 'react-router-dom';
import EventsList from '../components/EventsList';

 //gh GH ||''
function EventsPage() {
  let data = useLoaderData();

  // if(data.isError) {
  //   return <p>{data.message}</p>
  // }

  let events = data.events;

  return (
    <>
       <EventsList events={events}/>
    </>
  );
}

export default EventsPage;

export async function loader() {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
   // return {isError: true, message: `Could not fetch data`}
   throw new Response(JSON.stringify({message: `could not fetch events`}), {
    status: 500,
   })
  } else {
    return response
  }
}
 //gh GH ||''

 import { Link, redirect, useRouteLoaderData } from 'react-router-dom';
 import EventItem from '../components/EventItem';

function EventDetailsPage() {
    let data = useRouteLoaderData(`event-detail`);

    return (
        
        <>
         <EventItem event ={data.event} />   
         <Link to='..' relative='path'>Back</Link>
        </>
    )
}

export default EventDetailsPage;

export async function loader({request, params}) {
const id = params.eventId;
 let response = await fetch('http://localhost:8080/events/' + id);

 if(!response.ok) {
  throw new Response(JSON.stringify({message: `could not fetch events`}), {
    status: 500,
   })
 }else {
  return response
 }
  
}

export async function action({params, request}) {
 const id = params.eventId;
 let response = await fetch('http://localhost:8080/events/' + id, {
  method: request.method,
 });

 if(!response.ok) {
  throw new Response(JSON.stringify({message: `could not delete event`}), {
    status: 500,
   })
 }

 return redirect(`/events`)
}
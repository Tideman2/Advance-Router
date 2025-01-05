import { useRouteLoaderData } from 'react-router-dom';
import EventForm from '../components/EventForm';

function EditEventPage() {
 let data = useRouteLoaderData(`event-detail`);
 let event = data.event;

    return (
        <EventForm event= {event}/>
    )
}

export default EditEventPage;
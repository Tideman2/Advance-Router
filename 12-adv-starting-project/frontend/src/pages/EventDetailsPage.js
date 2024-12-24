 //gh GH ||''

 import { Link, useParams } from 'react-router-dom'

function EventDetailsPage() {
  let { eventId } = useParams()

    return (
        
        <>
        <p>Event details Page</p>
         <p>{eventId}</p>
         <Link to='..' relative='path'>Back</Link>
        </>
    )
}

export default EventDetailsPage;
 //gh GH ||''
 import { createBrowserRouter, RouterProvider } from 'react-router-dom';
 import Root from './pages/Root'
 import HomePage from './pages/HomePage';
import EventPage, { loader as eventsLoader } from './pages/EventsPage';
import EventDetailsPage, {
       loader as eventDetailsLoader,
       action as deleteEventDetaisAction
      } from './pages/EventDetailsPage';
import NewEventPage, {action as newEventAction} from './pages/NewEventPage';
import EditEventPage from './pages/EditEventPage';
import ErrorPage from './pages/ErrorPage';
import EventLayout from './pages/EventWrapper';

 let router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage />},
      { path: 'events', element: <EventLayout />,
        children: [
          { index: true, element: <EventPage />, loader: eventsLoader},
          { path: ':eventId', loader: eventDetailsLoader, id: 'event-detail',
            children: [
            { index: true, element: <EventDetailsPage />, action: deleteEventDetaisAction},
            { path: 'edit', element: <EditEventPage />},
          ], },
          { path: 'new', element: <NewEventPage />, action: newEventAction},
        ]
      },
    ],
  },
 ])

function App() {
  return <RouterProvider router={router}/>;
}

export default App;

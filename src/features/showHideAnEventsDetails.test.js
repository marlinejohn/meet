import { render, waitFor, within } from '@testing-library/react';
import { loadFeature, defineFeature } from 'jest-cucumber';
import App from '../App';
import Event from '../components/Event';
import { getEvents } from '../api';
import userEvent from '@testing-library/user-event';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
    test('Details of events are hidden by default', ({ given, when, then, and }) => {
        let AppComponent;
        given('the main page open', () => {
            AppComponent = render(<App />);
        });
  
        when('the user is viewing a list of events', async() => {
            const AppDOM = AppComponent.container.firstChild;
            const EventListDOM = AppDOM.querySelector('#event-list');
      
            await waitFor(() => {
              const EventListItems = within(EventListDOM).queryAllByRole('listitem');
              expect(EventListItems.length).toBe(32);
            });

        });

        then('the event details should be hidden for all events', () => {
            const AppDOM = AppComponent.container.firstChild;
            const eventDetails = AppDOM.querySelector('.details');
            expect(eventDetails).not.toBeInTheDocument();

        });

        and('the Show Details button should be displayed for each event', () => {
            const AppDOM = AppComponent.container.firstChild;
            const detailsButton = AppDOM.querySelector('.details-button');
            expect(detailsButton).toBeInTheDocument();

        });
    });

    test('User clicks on "Show Details" button to view event details', ({ given, when, then }) => {
        let AppComponent;
        let EventComponent;
        let allEvents;
        given('the user is viewing a list of events', async() => {
            AppComponent = render(<App />);
            const AppDOM = AppComponent.container.firstChild;
            const EventListDOM = AppDOM.querySelector('#event-list');
      
            await waitFor(() => {
              const EventListItems = within(EventListDOM).queryAllByRole('listitem');
              expect(EventListItems.length).toBe(32);
            });

        });

        when('the user clicks on the Show Details button for a specific event', async() => {
            const user = userEvent.setup();
            allEvents = await getEvents();
            EventComponent = render(<Event event={allEvents[0]}/>)
            const showDetails = EventComponent.queryAllByText('Show Details');
            user.click(showDetails);

        });

        then('the event details should be displayed', () => {
            expect(EventComponent.container.querySelector('.details-button')).toBeInTheDocument();
        });
    });

    test('User clicks on "Hide Details" button to hide event details', ({ given, when, then }) => {
        let EventComponent;
        let allEvents;
        given('the user is viewing an event with details displayed', async() => {
            const user = userEvent.setup();
            allEvents = await getEvents();
            EventComponent = render(<Event event={allEvents[0]} />);
            user.click(EventComponent.queryByText('Show Details'));
            expect(EventComponent.container.querySelector('.details-button')).toBeInTheDocument();

        });

        when('the user clicks on the Hide Details button for a specific event', () => {
            const hideDetails = EventComponent.queryByText('Hide Details');
            const user = userEvent.setup();
             user.click(hideDetails);

        });

        then('the event details should be hidden', () => {
            expect(EventComponent.container.querySelector('.details')).not.toBeInTheDocument();
            expect(EventComponent.queryByText('Hide Details')).not.toBeInTheDocument();
        });
    });
    

});
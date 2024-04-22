import { render, waitFor, within } from '@testing-library/react';
import { loadFeature, defineFeature } from 'jest-cucumber';
import App from '../App';

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
        given('the user is viewing a list of events', () => {

        });

        when('the user clicks on the Show Details button for a specific event', () => {

        });

        then('the event details should be displayed', () => {

        });
    });

    test('User clicks on "Hide Details" button to hide event details', ({ given, when, then }) => {
        given('the user is viewing a list of events with details displayed', () => {

        });

        when('the user clicks on the Hide Details button for a specific event', () => {

        });

        then('the event details should be hidden', () => {

        });
    });
    

});
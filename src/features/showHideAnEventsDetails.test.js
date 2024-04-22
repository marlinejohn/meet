import { loadFeature, defineFeature } from 'jest-cucumber';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
    test('Details of events are hidden by default', ({ given, when, then, and }) => {
        given('the user is viewing a list of events', () => {

        });

        when('the main page open', () => {

        });

        then('the event details should be hidden for all events', () => {

        });

        and('the Show Details button should be displayed for each event', () => {

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
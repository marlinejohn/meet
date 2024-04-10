import { render } from "@testing-library/react";
import Event from "../components/Event";
import userEvent from "@testing-library/user-event";
import { getEvents } from "../api";

describe('<Event /> component' , () => {
    let EventComponent;
    let  allEvents ;

    beforeAll(async () => {
        allEvents = await getEvents();
      })

      beforeEach(() => {
        EventComponent = render(<Event event={allEvents[0]} />);
      })

      test('renders event title', () => {
        expect(EventComponent.queryByText(allEvents[0].summary)).toBeInTheDocument()
      })

      test('renders event start time', () =>{
        expect(EventComponent.queryByText(allEvents[0].created)).toBeInTheDocument()
      })

      test('renders event location', () => {
        expect(EventComponent.queryByText(allEvents[0].location)).toBeInTheDocument();
      });

      test('event details are hidden by default', () => {
        expect(EventComponent.container.querySelector('.details')).not.toBeInTheDocument();
      });

      test('show event details when user clicks Show Details button' , async () => {
        const user = userEvent.setup();
        const button = EventComponent.queryByRole('button');
        await user.click(button, 'Show Details');
        const details = EventComponent.container.querySelector('.details')
        expect(details).toBeInTheDocument();
      })

      test("hides event details when user clicks 'hide details' button", async () => {
        const user = userEvent.setup();
        const button = EventComponent.queryByRole('button');
        const details = EventComponent.container.querySelector('.details')
        await user.click(button, 'Hide Details');
        expect(details).not.toBeInTheDocument();
      });
})
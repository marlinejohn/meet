import { render } from "@testing-library/react";
import Event from "../components/Event";
import userEvent from "@testing-library/user-event";
import { getEvents } from "../api";

describe('Event /> component' , () => {
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
})
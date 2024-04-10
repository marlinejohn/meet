import { render } from '@testing-library/react';
import NumberOfEvents from "../components/NumberOfEvents";

describe('<NumberOfEvents /> component' , ()=> {
    let NumberOfEventsComponent;
    beforeEach(() => {
        NumberOfEventsComponent = render(<NumberOfEvents eventsSetValue={() => { }} />);
      });

      test('has element with role "textbox"', ()=>{
        let textbox = NumberOfEventsComponent.queryByRole('textbox');
        expect(textbox).toBeInTheDocument();
      })

      test('render 32 events as default', () => {
        expect(NumberOfEventsComponent.queryByRole('textbox')).toHaveValue('32');
      });
})
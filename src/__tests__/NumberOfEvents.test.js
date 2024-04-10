import { render } from '@testing-library/react';

describe('<NumberOfEvents /> component' , ()=> {
    let NumberOfEventsComponent;
    beforeEach(() => {
        NumberOfEventsComponent = render(<NumberOfEvents  />);
      });

      test('has element with role "textbox"', ()=>{
        let textbox = NumberOfEventsComponent.queryByRole('textbox');
        expect(textbox).toBeInTheDocument();
      })
})
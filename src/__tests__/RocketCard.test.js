import React from 'react';
import Renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import RocketCard from '../components/RocketCard';

it('renders as expected', () => {
  const tree = Renderer.create(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <RocketCard key={0} id={0} reserved={false} name="rocket.rocket_name" description="rocket.description" img={[]} bookingHandler={() => {}} />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

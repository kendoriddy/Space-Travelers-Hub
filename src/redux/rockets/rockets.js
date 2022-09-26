import axios from 'axios';

const initialState = [];
const FETCH_ROCKETS = 'FETCH_ROCKETS';

const baseUrl = 'https://api.spacexdata.com/v3/rockets';

const fetchRockets = (rockets) => ({
  type: FETCH_ROCKETS,
  payload: {
    rockets,
  },
});

export const fetchRocketFromApi = () => async (dispatch) => {
  const rockets = await axios.get(baseUrl);
  const mappedRockets = rockets.data.map((rocket) => ({
    id: rocket.rocket_id,
    name: rocket.rocket_name,
    type: rocket.rocket_type,
    image: rocket.rocket_flickr_images[0],
  }));
  dispatch(fetchRockets(mappedRockets));
};

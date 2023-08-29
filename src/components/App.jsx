import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics';


import user from '../components/Profile/user.json';
import data from '../components/Statistics/data.json';

export const App = () => {
  return (
   <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics data={data}/>
     
    </>
  );
};
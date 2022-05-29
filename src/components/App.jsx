import Profile from './Profile';
import Statistic from './Statistics';

import user from '../dataFiles/user.json';
import data from '../dataFiles/data.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistic title="Upload stats" stats={data} />
    </div>
  );
};

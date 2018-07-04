import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import Poll from '../../containers/Poll';

const PollPage = ({ uid, signIn }) => {
  return (
    <Route
      render={({ location }) => {
        return (
          <div>
            <Route exact path="/poll/" render={() => <Redirect to="/" />} />
            <Route
              location={location}
              key={location.key}
              path="/poll/:pollId/"
              render={props => <Poll {...props} uid={uid} signIn={signIn} />}
            />
          </div>
        );
      }}
    />
  );
};

PollPage.propTypes = {
  uid: PropTypes.string,
  signIn: PropTypes.func.isRequired,
};

export default PollPage;

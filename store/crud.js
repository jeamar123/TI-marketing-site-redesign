import { Auth } from 'aws-amplify';

export const actions = {
  GET(_, params) {
    if (params.authed) {
      return Auth.currentSession().then(user => {
        const token = user.idToken.jwtToken;

        this.$axios
          .$get(params.route, { headers: { Authorization: token } })
          .then(response => response.data);
      });
    } else {
      return this.$axios
        .$get(params.route)
        .then(response => response.data);
    }
  },

  POST(_, params) {
    if (params.authed) {
      return Auth.currentSession().then(user => {
        const token = user.idToken.jwtToken;

        this.$axios
          .$post(params.route, params.data, {
            headers: {
              Authorization: token,
              'Content-Type': 'application/json',
            },
          })
          .then(response => response.data);
      });
    } else {
      return this.$axios
        .$post(params.route, params.data)
        .then(response => response.data);
    }
  },
};

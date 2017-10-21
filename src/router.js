import React from 'react';
import { Router } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Users from './routes/Users';
import Count from './routes/Count';
import UsersModel from './models/users';
import CountModel from './models/count';

const cached = {};
function registerModel(app, model) {
  if (!cached[model.nameSpace]) {
    app.model(model);
    cached[model.nameSpace] = 1;
  }
}

function RouterConfig({ history, app }) {
  const routes = [
    {
      path: '/',
      name: 'IndexPage',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, IndexPage);
        });
      },
    },
    {
      path: '/users',
      name: 'UsersPage',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          registerModel(app, UsersModel);
          cb(null, Users);
        })
      }
    },
    {
      path: '/count',
      name: 'count',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          registerModel(app, CountModel);
          cb(null, Count);
        })
      }
    }
  ];

  return <Router history={history} routes={routes} />
}

export default RouterConfig;

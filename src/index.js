import dva from 'dva';
import { browserHistory } from 'dva/router';
import { message } from 'antd';
import createLoading from 'dva-loading';
import './index.css';

// 1. Initialize
const app = dva({
  history: browserHistory,
  onError(e) {
    message.error(e.message, 3);
  }
});


// 2. Plugins
app.use(createLoading());

// 3. Model
// app.model(require('./models/example'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');

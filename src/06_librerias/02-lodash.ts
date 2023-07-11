//var _ = require('lodash');
import _ from 'lodash';

const data = [
  {
    username: 'nicole',
    role: 'admin',
  },
  {
    username: 'valentina',
    role: 'seller',
  },
  {
    username: 'zulema',
    role: 'seller',
  },
  {
    username: 'santiago',
    role: 'customer',
  },
]; //simpllemente datos

const rta = _.groupBy(data, (item) => item.role);
console.log(rta);

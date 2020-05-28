import { uniq } from 'lodash';
import moment from 'moment';

import { apiKey1, apiKey2, greet } from './config'
console.log(apiKey1, apiKey2)
greet('code casts')

const arr = [1, 2, 2, 34, 123, 123, 356]

console.log(uniq(arr));
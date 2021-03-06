/**
 * Asynchronously loads the component for Advertisers
 */

import Loadable from 'react-loadable';
import Loading from '../Loading';

export default Loadable({
  loader: () => import('./index'),
  loading: Loading,
});
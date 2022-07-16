import { setExamResult } from '../store/actions/action-creators';
import { END_POINTS } from '../helpers/constants';
import API from '../core/api';
import store from '../store';

const DashboardCtrl = {};

DashboardCtrl.getExamResult = () => {
  API.getAction(
    END_POINTS.EXAM_RESULT,
    (examResult) => {
      store.dispatch(setExamResult(examResult));
    },
    console.error
  );
}

export default DashboardCtrl;

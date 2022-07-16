import { END_POINTS, TOKEN_STORAGE_KEY } from '../helpers/constants';
import { setToken } from '../store/actions/action-creators';
import API from '../core/api';
import store from '../store';

const AuthCtrl = {};

AuthCtrl.signIn = (email, password) => {
  // Իրական BackEnd ունենալու դեպքում կանեինք POST request և տվյալները կուղարկեինք որպես body,
  // սակայն այս պարագայում փորձել եմ սիմուլացիայի միջոցով ստանալ,
  // իսկ json-server փնտրելու user նշված տվյալներով գոյություն ունի, թե ոչ,
  // տալիս էր միայն այս հնարավորությունը
  const endPoint = `${END_POINTS.SIGN_IN}?email=${email}&password=${password}`;

  API.getAction(
    endPoint,
    (data) => {
      if (data.length) {
        const token = data[0].token;
        store.dispatch(setToken(token));
        localStorage.setItem(TOKEN_STORAGE_KEY, token);
      }
    },
    console.error
  );
};

export default AuthCtrl;

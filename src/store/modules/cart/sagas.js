import { call, put, all, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';

import { addToCartSuccess } from './actions';

function* addToCart({ id }) {
  // acessa api, busca detalhes e cadastra - interceptor da action
  const response = yield call(api.get, `/products/${id}`);

  yield put(addToCartSuccess(response.data));
}

// isso ouve todas as actions, quando for @cart/ADD_REQUEST ele executa a addToCart
export default all([takeLatest('@cart/ADD_REQUEST', addToCart)]);

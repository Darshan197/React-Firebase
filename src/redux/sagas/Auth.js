import { takeEvery, call, put, fork, all } from 'redux-saga/effects'
import Firebase from '../../services/Firebase';
import { signUpSuccess, showAuthMessage, signOutSuccess, authenticated } from '../actions';

export function* signUpWithFBEmail() {
    yield takeEvery('SIGNUP', function* ({payload}) {
          const {email, password} = payload;
          try {
              const user = yield call(Firebase.signUpEmailRequest, email, password);
              if (user.message) {
                  yield put(showAuthMessage(user.message));
              } else {
                  localStorage.setItem('auth_token', user.user.uid);
                  yield put(signUpSuccess(user.user.uid));
              }
          } catch (error) {
              yield put(showAuthMessage(error));
          }
      }
      );
  }
  export function* signInWithFBEmail() {
    yield takeEvery('SIGNIN', function* ({payload}) {
          const {email, password} = payload;
          try {
              const user = yield call(Firebase.signInEmailRequest, email, password);
              if (user.message) {
                  yield put(showAuthMessage(user.message));
              } else {
                  localStorage.setItem('auth_token', user.user.uid);
                  yield put(authenticated(user.user.uid));
                  
              }
          } catch (error) {
              yield put(showAuthMessage(error));
          }
      }
      );
  }

  export function* signOut() {
      yield takeEvery('SIGNOUT', function* () {
          try {
              console.log(1)
              const user = yield call(Firebase.signOutRequest)
              if (user === undefined) {
				localStorage.removeItem('auth_token');
				yield put(signOutSuccess(user));
			} else {
				yield put(showAuthMessage(user.message));
			}
          } catch (error) {
            yield put(showAuthMessage(error));
          }
      })
  }

export default function* rootSaga() {
    yield all([
        fork(signUpWithFBEmail),
        fork(signInWithFBEmail),
        fork(signOut)
    ]);
}
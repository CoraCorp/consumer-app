import * as firebase from 'firebase/app';
import 'firebase/auth';

export async function saveAddress(address) {
  let uid;
  try {
    uid = await firebase.auth().currentUser.uid;
  } catch (err) {
    throw new Error(err);
  }

  let idToken;
  try {
    idToken = await firebase.auth().currentUser.getIdToken(true);
  } catch {
    // Swallow
  }
  return fetch(`http://localhost:8080/api/user/${uid}/address`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: idToken ? `Bearer ${idToken}` : ''
    },
    body: JSON.stringify(address)
  });
}

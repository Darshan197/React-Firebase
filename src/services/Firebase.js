import { auth } from "../config/firebase";

const Firebase = {}

Firebase.signInEmailRequest = async (email, password) =>
	await auth.signInWithEmailAndPassword(email, password).then(user => user).catch(err => err);

Firebase.signUpEmailRequest = async (email, password) =>
	await auth.createUserWithEmailAndPassword(email, password).then(user => user).catch(err => err);

Firebase.signOutRequest = async () => 
	await auth.signOut().then(user => user).catch(err => err)



export default Firebase
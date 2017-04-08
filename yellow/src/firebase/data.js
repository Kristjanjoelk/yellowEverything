import { ref } from './config'

export function saveProgress (user, progress) {
  return ref.child(`users/${user.uid}`)
    .update({
      progress
    })
    .then(() => progress)
}

export function getScore () {
  console.log("inside getScore");
  ref.child('users').on("value", function(snapshot) {
    console.log(snapshot.val());
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
  });
}

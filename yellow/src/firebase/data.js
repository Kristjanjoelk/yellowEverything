import { ref } from './config'

export function saveProgress (user, progress) {
  return ref.child(`users/${user.uid}`)
    .update({
      progress
    })
    .then(() => progress)
}
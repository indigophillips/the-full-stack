import request from 'superagent'

export function getAllSongs () {
  return request
    .get('/api/v1/songs')
    .then(res => {
      return res.body
    })
    .catch(err => {
    // eslint-disable-next-line no-console
      console.error(err)
    })
}

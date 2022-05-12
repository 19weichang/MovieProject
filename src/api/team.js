import { request } from './request'

export function getTeam (path = '/team.do') {
  const props = {
    method: 'get',
    path
  }
  console.log('props', props)
  return request(props)
}

export default {
  getTeam
}

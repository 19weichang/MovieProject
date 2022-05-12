import axios from 'axios'
// import flavor from '@/configs/flavor'

// const apiAddress = (flavor => {
//   if (flavor === 'dev') { return 'http://192.168.1.3:8763' }
//   // if (flavor === 'development') { return 'http://192.168.1.246:8763'; }
//   // if (flavor === 'development') { return 'http://192.168.1.112:8763'; }
//   return '.'
// })(flavor)
const apiAddress = 'http://192.168.1.3:8763'
const genSN = (sn => () => sn++)(0)
const middlewares = {
  beforeResolve: undefined,
  afterResolve: undefined
}

export function init ({ beforeResolve, afterResolve }) {
  middlewares.beforeResolve = beforeResolve
  middlewares.afterResolve = afterResolve
}

export function request ({ method = 'get', path = String, body, queryString, responseType = 'json' }) {
  return new Promise((resolve, reject) => {
    const now = new Date()
    const gmt = now.getTimezoneOffset() / -60
    const requestTime = `${now.toLocaleString()} GMT${gmt > 0 ? '+' : '-'}${gmt}`
    const sn = genSN()
    const url = `${apiAddress}${path}`
    const resuestProps = {
      method,
      url,
      params: queryString,
      data: body,
      responseType
    }

    console.warn(`[${sn}] ${requestTime} Client.${method}(${url})`)
    axios(resuestProps)
      .then((response) => {
        const { status, data } = response
        const { beforeResolve, afterResolve } = middlewares

        console.warn(`[${sn}] response; status: ${status}`)
        console.warn(response)

        data.requestTime = requestTime

        if (beforeResolve) { beforeResolve(resuestProps, response) }

        resolve(data)

        if (afterResolve) { afterResolve(resuestProps, response) }
      })
      .catch(err => {
        console.error(`Error status: ${err.response ? err.response.status : undefined}`)
        console.error(err)
        err.requestTime = requestTime
        reject(err)
      })
  })
}

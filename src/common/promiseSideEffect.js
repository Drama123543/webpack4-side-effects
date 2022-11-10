import 'core-js/proposals/promise-all-settled'

export const mockAsync = () => {
  return Promise.allSettled([
    new Promise((resolve) => {
      setTimeout(() => {
        resolve({success: 1, data: 'hello'})
      }, 1000)
    }),
    new Promise((_resolve, reject) => {
      setTimeout(() => {
        reject({success: 0, message: 'service error'})
      }, 1000)
    }),
  ])
}

export const getOptions = ({ method, body}) => {
    const headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=utf-8',
      }

      let options

      if (method) {
          options = {
              method,
              headers,
              body: JSON.stringify(body),
          }
      } else {
          options = {
              method: 'GET',
              headers
          }
      }
      return options
}
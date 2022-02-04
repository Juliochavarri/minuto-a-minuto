 import local from './local'
 import dev from './dev'
 import prod from './prod'
 import * as Updates from 'expo-updates'

 const ENV = {
    local,
    dev,
    prod,
  }

  const getEnvVars = (env = Updates.releaseChannel.toLocaleLowerCase()) => {
     if (env === 'local') {
      return ENV.local
    } else if (env === 'dev') {
      return ENV.dev
    }  else if (env === 'prod') {
      return ENV.prod
    }  else {
      return ENV.dev
    }
  }
 
  export default getEnvVars
import immutablePersistenceTransform from '../Store/ImmutablePersistenceTransform'
import { persistentStoreBlacklist } from '../Reducers/'

const REDUX_PERSIST = {
  active: true,
  reducerVersion: '2',
  storeConfig: {
    whitelist: ['auth'],
    blacklist: ['app','requests'],
    transforms: [immutablePersistenceTransform]
  }
}

export default REDUX_PERSIST

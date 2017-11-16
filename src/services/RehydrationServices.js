import ReduxPersist from '../config/ReduxPersist'
import { persistStore } from 'redux-persist'

const updateReducers = (store, onComplete) => {
  const config = ReduxPersist.storeConfig
  // Check to ensure latest reducer version
    persistStore(store, config, () => {
    onComplete();
})
  //     console.log(store)
  // AsyncStorage.getItem('reducerVersion').then((localVersion) => {
  //     console.log(localVersion)
  //     console.log(reducerVersion)
  //   if (localVersion !== reducerVersion) {
  //     // Purge store
  //      persistStore(store, config, onComplete).purge()
  //     AsyncStorage.setItem('reducerVersion', reducerVersion)
  //   } else {
  //     persistStore(store, config, onComplete)
  //   }
  // }).catch((err) => {
  //   //console.log(err);
  //   persistStore(store, config, onComplete)
  //   AsyncStorage.setItem('reducerVersion', reducerVersion)
  // })
}

export default {updateReducers}

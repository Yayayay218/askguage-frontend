import ReduxPersist from '../configs/ReduxPersist'
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
  //      persistStore(store, configs, onComplete).purge()
  //     AsyncStorage.setItem('reducerVersion', reducerVersion)
  //   } else {
  //     persistStore(store, configs, onComplete)
  //   }
  // }).catch((err) => {
  //   //console.log(err);
  //   persistStore(store, configs, onComplete)
  //   AsyncStorage.setItem('reducerVersion', reducerVersion)
  // })
}

export default {updateReducers}

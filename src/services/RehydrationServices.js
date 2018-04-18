import ReduxPersist from '../Configs/ReduxPersist'
import { persistStore } from 'redux-persist'

const updateReducers = (store, onComplete) => {
  const config = ReduxPersist.storeConfig
  // Check to ensure latest reducer version
    persistStore(store, config, () => {
    onComplete();
})
  //     console.log(Store)
  // AsyncStorage.getItem('reducerVersion').then((localVersion) => {
  //     console.log(localVersion)
  //     console.log(reducerVersion)
  //   if (localVersion !== reducerVersion) {
  //     // Purge Store
  //      persistStore(Store, Configs, onComplete).purge()
  //     AsyncStorage.setItem('reducerVersion', reducerVersion)
  //   } else {
  //     persistStore(Store, Configs, onComplete)
  //   }
  // }).catch((err) => {
  //   //console.log(err);
  //   persistStore(Store, Configs, onComplete)
  //   AsyncStorage.setItem('reducerVersion', reducerVersion)
  // })
}

export default {updateReducers}

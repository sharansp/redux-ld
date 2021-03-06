// middleware
export const logger = store => next => action => {
    console.group('logger')
    console.log('currentState == ', store.getState());
    console.info('next(action) // action == ', action)
    next(action);
    console.log('nextState == ', store.getState());
    console.groupEnd('logger')
}

//second middleware
export const crashReporter = store => next => action => {
    try{
        next(action);
    }catch(err){
        console.group('crashReporter');
        console.error('error happen with action == ', action);
        console.error(err);
        console.groupEnd('crashReporter');
    }

}
//third middleware
export const thunk = store => next => action => {
      if(typeof action === 'function'){
          action(store.dispatch, store.getState());
      }else{
          next(action);
      }
  }

import { createStore, compose, applyMiddleware } from 'redux';

const isFirefox = typeof InstallTrigger !== 'undefined';

export default (reducers, middlewares) => {
  const enhancer =
    process.env.NODE_ENV === 'development' && !isFirefox
      ? compose(
          console.tron.createEnhancer(),
          applyMiddleware(...middlewares)
        )
      : applyMiddleware(...middlewares);
  return createStore(reducers, enhancer);
};

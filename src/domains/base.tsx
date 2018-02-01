export interface Action<T> {
  type: T;
}

export interface ActionWithPayload <T, P> extends Action<T> {
  payload: P;
}

export interface ActionWithError <T, P> extends ActionWithPayload<T, P> {
  error: true;
}
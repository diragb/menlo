export interface ActionInterface {
  type: string;
  payload: any;
}

export interface InitialState {
  global: {
    theme: "DARK" | "LIGHT";
  };
}

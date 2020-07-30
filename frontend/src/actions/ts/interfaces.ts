export interface ToggleTheme {
  (payload: "DARK" | "LIGHT"): {
    type: string;
    payload: "DARK" | "LIGHT";
  };
}

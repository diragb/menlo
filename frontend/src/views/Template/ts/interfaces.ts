export interface TemplatePropsInterface {
  theme: "DARK" | "LIGHT";
}

export interface WrapperProps {
  theme: "DARK" | "LIGHT";
}

export interface ProfilePictureProps {
  profilePictureLoaded: boolean;
  theme: "DARK" | "LIGHT";
}

export interface AboutPictureProps {
  aboutPictureLoaded: boolean;
  theme: "DARK" | "LIGHT";
}

export interface WorkProps {
  worksLength: number;
  workIndex: number;
}

export interface WorkPictureProps {
  theme: "DARK" | "LIGHT";
}

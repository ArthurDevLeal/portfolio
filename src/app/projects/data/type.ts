export interface Project {
  title: string;
  description: string;
  date: string;
  src: string;
  links: {
    demo?: string;
    repo?: string;
    figmaLink?:string
  };

  context: string;
  challenges: Array<string>;
  solution: {
    features: Array<string>;
    stack: Array<string>;
  };
  result: string;
}

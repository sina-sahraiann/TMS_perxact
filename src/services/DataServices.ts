import Project from "../models/project";

export const PROJECTS_LIST: Project[] = [
  {
    image: "https://randomuser.me/api/portraits/men/78.jpg",
    id: "project-1",
    name: "building app",
    description:
      "Lorem ipsum dolor sit amet" +
      "consectetur adipisicing elit. Fugit fuga, molestiae" +
      "illo iusto ratione possimus ipsa aut! Ab, qui cumque.",
    status: "RUNNING",

    
  },
  {
    image: "https://randomuser.me/api/portraits/men/77.jpg",
    id: "project-2",
    name: "WEBSITE frontend",
    description:
      "Lorem ipsum dolor sit amet" +
      "consectetur adipisicing elit. Fugit fuga, molestiae" +
      +"illo iusto ratione possimus ipsa aut! Ab, qui cumque.",
    status: "STOPPED",
  },
  {
    image: "https://randomuser.me/api/portraits/men/76.jpg",
    id: "project-3",
    name: "taking mesurments",
    description:
      "Lorem ipsum dolor sit amet" +
      "consectetur adipisicing elit. Fugit fuga, molestiae" +
      +"illo iusto ratione possimus ipsa aut! Ab, qui cumque.",
    status: "RUNNING",
  },
];

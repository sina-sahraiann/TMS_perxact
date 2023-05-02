import Tag from "./tag";


export default interface Project {
    id: string,
    name: string,
    status: "RUNNING" | "ENDED" | "STOPPED", 
    image: string,
    // tasksCount: number, 
    description: string,
    tags?: Tag[],
}
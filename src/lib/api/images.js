import client from "./client";

export const loadImages = ({name}) => {
    const keyword = "name="+name;
    
    return client.get(`/api/images?${keyword}`);
}
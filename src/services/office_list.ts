
import single_office_model from "../models/office";
import { userList } from "./list_of_all_users";

export const office_list : single_office_model[] = [
    {
        Office_id : '1' ,
        Name : 'Iran' , 
        Location : 'Iran' ,
        Manager : 'Suhrab Khoshbuie',
        Members : [
            userList[0] ,
            userList[1] ,
            userList[2] ,
            userList[0] ,
            userList[1] ,
            userList[2] ,
            userList[0] ,
            userList[1] ,
            userList[2] ,
            userList[0] ,
            userList[1] ,
            userList[2] ,
            userList[0] ,
            userList[1] ,
            userList[2] ,
            userList[0] ,
            userList[1] ,
            userList[2] ,
        ]
    },
    {
        Office_id : '2' ,
        Name : 'Germany' , 
        Location : 'Germany' ,
        Manager : 'Suhrab Khoshbuie',
        Members : [
            userList[0] ,
            userList[1] ,
            userList[3] ,
            
        ]
    }
]
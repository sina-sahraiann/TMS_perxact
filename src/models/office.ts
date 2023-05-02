import UserInfoModel from "./user"

export default interface single_office_model {
    Office_id : string ,
    Name : string ,
    Manager : string ,
    Location : string ,
    Members : UserInfoModel[],
}
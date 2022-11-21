export interface Response {
    status : Status
    data: any
    message : string
}

export enum Status {
    SUCCESS = "SUCCESS",
    FAILURE = "FAILURE"
}
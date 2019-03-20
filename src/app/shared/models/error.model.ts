/**
 {
   "errorCode": "HUMAN_READABLE_FAULT_CODE",
   "message": "An optional detailed description meant for client application developers.",
 }
 */
export interface Error {
  errorCode?: string;
  message?: string;
}

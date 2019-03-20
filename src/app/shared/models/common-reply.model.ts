import { Error } from './error.model';

/**
 * CommonReply is the common response interface.
 * Making this generic still allows the end-user of a service to read the status field,
 * but without having to define a type every time you create a new service call.
 *
 * While PDBE returns a CommonReply or an ErrorReply (for errors), it's easier for the frontend
 * to code against one interface. Hence this interface also includes errors and warnings.
 *
 * All endpoints return an `CommonReply`, normally in the form of an `Observable`.
 * A common usecase is: `Observable<CommonReply<ConnectionType>>`.
 */
export class CommonReply<T> {
  /**
   * The status fields can be either 'success' or 'failure'
   */
  status?: 'success' | 'failure';

  /**
   * The status code of the message (present for failures)
   */
  code?: string;

  /**
   * If there are any errors, this array will be present and filled.
   */
  errors?: Error[];

  /**
   * If there are any warnings, this array will be present and filled.
   */
  warnings?: Error[];

  /**
   * The data payload is of the generic type `<T>`, which is whatever you pass to `CommonReply<T>`
   */
  constructor(public data: T) {}
}

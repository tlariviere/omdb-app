export default class RequestError extends Error {
  public status: number;

  public constructor(message: string, status = 400) {
    super(message);
    this.name = "RequestError";
    this.status = status;
  }
}

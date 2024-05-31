class customError extends Error {
  status: number;
  data?: any;

  constructor(status: number, message?: string, data?: any) {
    super(message || messageList[status]);

    this.status = status;
    this.data = data;

    Object.setPrototypeOf(this, customError.prototype);
  }
}

const messageList: { [key: number]: string } = {
  400: "Bad Request",
  401: "Unauthorized",
  403: "Forbidden",
  404: "Not Found",
  409: "Conflict",
};

export const HttpError = (
  status: number,
  message = messageList[status],
  data: any = undefined
) => {
  const error = new customError(status, message);

  error.status = status;
  error.data = data;

  return error;
};

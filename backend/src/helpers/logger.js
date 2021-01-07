import { winston } from '@helpers';

export default function loggerMiddleware(request, response, next) {
  const message = `${'\x1b[36m'}${request.method} ${request._parsedUrl.path} \x1b[0m`
  winston.info(message);
  next();
}
export const successResponse = (res, data, status = 200) => {
  return res.status(status).json({
    success: true,
    data
  });
};

export const tokenResponse = (res, data, status = 200) => {
  return res.status(status).json({
    data: {
      token: data
    }
  });
};

export const errorResponse = (res, code, message) => {
    return res.status(code).json({
    success: false,
    data: {
        code,
        message
    }
  });
}

export let asyncHandler = (fn) => (res, req, next) => {
  Promise.resolve(fn(res, req, next)).catch(next);
}
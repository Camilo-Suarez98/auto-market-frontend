export const validators = {
  name: /^[A-Za-zÑñÁáÉéÍíÓóÚú\s]+$/,
  email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
  password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
};

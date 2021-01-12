import { UsernamePasswordInput } from 'src/resolvers/UsernamePasswordInput';

export const validateRegister = (options: UsernamePasswordInput) => {
  if (!options.email.includes('@')) {
    return [
      {
        field: 'email',
        message: 'Use a valid email address',
      },
    ];
  }

  if (options.username.length <= 2) {
    return [
      {
        field: 'username',
        message: 'Username must be at least 2 characters',
      },
    ];
  }

  if (options.username.includes('@')) {
    return [
      {
        field: 'username',
        message: 'Cannot include an @ character',
      },
    ];
  }

  if (options.password.length <= 2) {
    return [
      {
        field: 'password',
        message: 'Password must have at least 2 characters',
      },
    ];
  }

  return null;
};

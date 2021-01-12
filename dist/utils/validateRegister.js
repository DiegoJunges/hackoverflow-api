"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRegister = void 0;
exports.validateRegister = (options) => {
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
//# sourceMappingURL=validateRegister.js.map
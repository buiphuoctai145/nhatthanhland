export interface ValidationErrors {
    phoneNumber?: string;
    password?: string;
    confirmPassword?: string;
  }
  
  export interface FormData {
    phoneNumber: string;
    password: string;
    confirmPassword: string;
  }
  
  export const validatePassword = (password: string): boolean => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{9,}$/;
    return passwordRegex.test(password);
  };
  
  export const validatePhoneNumber = (phone: string): boolean => {
    const phoneRegex = /^(\+84|84|0)?[1-9]\d{8}$/;
    return phoneRegex.test(phone);
  };
  
  export const validateForm = (formData: FormData): ValidationErrors => {
    const errors: ValidationErrors = {};
  
    // Validate phone number
    if (!validatePhoneNumber(formData.phoneNumber)) {
      errors.phoneNumber = 'Please enter a valid phone number';
    }
  
    // Validate password
    if (!validatePassword(formData.password)) {
      errors.password = 'Password must be at least 8 characters and contain numbers and special characters';
    }
  
    // Validate confirm password
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }
  
    return errors;
  };
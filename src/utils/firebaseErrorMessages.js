export const getFriendlyError = (error) => {
  if (!error?.code) return "Something went wrong. Please try again.";

  switch (error.code) {
    case "auth/invalid-email":
      return "The email address is not valid.";
    case "auth/user-disabled":
      return "This account has been disabled. Please contact support.";
    case "auth/user-not-found":
      return "No account found with this email.";
    case "auth/wrong-password":
      return "Incorrect password. Please try again.";
    case "permission-denied":
      return "You don't have permission to access this data.";
    default:
      return "An unexpected error occurred. Please try again later.";
  }
};
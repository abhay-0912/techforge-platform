
// This is a mock service that would normally connect to your backend
// In a real application, this would make API calls to your server

export type EmailNotification = {
  to: string;
  subject: string;
  body: string;
};

/**
 * Sends an email notification (mock implementation)
 */
export const sendEmailNotification = async (notification: EmailNotification): Promise<boolean> => {
  // In a real implementation, this would make an API call to your backend
  // which would handle the actual email sending
  
  console.log('Sending email notification:');
  console.log(`To: ${notification.to}`);
  console.log(`Subject: ${notification.subject}`);
  console.log(`Body: ${notification.body}`);
  
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Always return success in this mock implementation
  return true;
};

/**
 * Sends a new user signup notification
 */
export const sendSignupNotification = async (userData: {
  name: string;
  email: string;
}): Promise<boolean> => {
  return sendEmailNotification({
    to: 'abhaysrivastava9@proton.me',
    subject: 'New TechForge User Signup',
    body: `
      A new user has signed up for TechForge!
      
      Name: ${userData.name}
      Email: ${userData.email}
      Signup Time: ${new Date().toLocaleString()}
    `
  });
};

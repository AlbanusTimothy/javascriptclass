3.
const userProfile = {
  id: 101,
  name: "John Doe",
  settings: {
    theme: "dark",
    notifications: {
      email: true,
      sms: false,
    },
  },
  posts: [
    { id: 1, title: "Hello", comments: [{ text: "Nice post!" }] },
    { id: 2, title: "World" },
  ],
  getStatus: () => "Active",
};

// TASKS:

// 1. Get the user's preferred theme, default to "light" if missing.
// 2. Check if the user has SMS notifications enabled; default to false.
// 3. Get the text of the first comment of the second post; default to "No comments".
// 4. Call the getStatus function safely; default to "Unknown" if missing.
// 5. Safely access a deeply nested field that doesn't exist (e.g., userProfile.settings.layout.mode); default to "standard".

//solutions
//number 1
const theme = userProfile.settings?.theme ?? "light";
// number2
const smsEnabled = userProfile.settings?.notifications?.sms ?? false;
//number 3
const commentText =
  userProfile.posts?.[1]?.comments?.[0]?.text ?? "No comments";
//number4
const status = userProfile.getStatus?.() ?? "Unknown";
//number5
const layoutMode = userProfile.settings?.layout?.mode ?? "standard";

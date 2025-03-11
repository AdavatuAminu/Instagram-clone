# Welcome to My Instagram

## Task
This project is about creating a clone of Instagram.
To do so, you will have resources. You will use ReactJS and Amplify as backend/storing your database.
You are free to implement the schema you want.
You can also be creative on the design. You should still looks "like" instagram.

## Description
This is a simplified Instagram clone built with React and AWS Amplify. It allows users to sign up, log in, create posts, like posts, comment on posts, and view suggested friends. The app uses Amplify for authentication, storage, and GraphQL API.

Features
Authentication: User signup/login via AWS Cognito.
Posts: Create, view, like, comment, and delete posts (stored in DynamoDB and S3).
Friends Suggestions: View suggested friends with like/follow functionality.
Profile: Edit your profile or view suggested friends’ profiles.
Search: Search for users and posts by tags (basic implementation).
## Installation
1. Clone the Repository
git clone "(https://git.us.qwasar.io/my_instagram_179265_ezxjes/my_instagram.git)"
cd my_instagram
2. Install Dependencies
npm install
3. Configure AWS Amplify
amplify config
4. amplify init
Follow prompts (e.g., environment name: dev, default editor, etc.).
Add authentication:
5. amplify add auth
Choose default configuration (username/email sign-in).
Add API (GraphQL):
6. amplify add api
Select GraphQL, use the provided schema.graphql (below), and generate API.
Add storage (S3):
7. amplify add storage
Content (images/videos), authenticated users access.
Push to AWS:
8. amplify push
## Usage
Key Components
App.js: Handles authentication with Authenticator and passes currentUserId to Homepage.
Homepage.js: Layout with Sidenav, Timeline, Suggestions, and SearchBar.
Timeline.js: Fetches and displays posts, handles post updates/deletions.
Post.js: Displays individual posts with like, comment, and delete functionality.
Suggestions.js: Frontend-only friend suggestions with like/follow actions.
ProfilePage.js: Displays user profiles (editable for self, static for friendSuggests).

Usage
Once the Instagram clone is set up and running locally (or deployed), follow these steps to use its features:

1. Sign Up or Log In
Access: Open http://localhost:3000 (or your deployed URL) in a browser.
Sign Up:
Click "Sign Up" in the Amplify Authenticator UI.
Enter an email, and password.
Verify your email with the code sent by AWS Cognito.
Log In:
Enter your email and password.
Click "Sign In" to access the app.
2. View and Interact with Posts
Home Feed:
After logging in, you’ll see the Timeline with posts from all users.
Each post displays an image, text, username, timestamp, likes, and comments.
Like a Post:
Click the heart icon (FavoriteBorderIcon) below a post.
The icon toggles to FavoriteIcon, and the like count increases (e.g., "Liked by 1 people").
Click again to unlike.
Comment on a Post:
Click the comment icon (ChatBubbleOutlineIcon).
Type your comment in the input field and click "Post".
Your comment appears below the post.
Delete a Post:
If you created the post, a trash icon (DeleteIcon) appears in the top-right corner.
Click it to delete the post (it disappears from the feed).
3. Create a New Post
Navigation: Click "Create" in the sidebar (Sidenav).
Form: On the PostPage:
Upload an image/video file.
Add a caption (optional).
Click "Share" to post.
Result: The new post appears at the top of the Timeline.
4. Manage Your Profile
View/Edit Profile:
Click "Profile" in the sidebar.
See your username, bio, and profile picture (if set).
Update your username, bio, or upload a new profile picture, then click "Save Changes".
View Friend Profiles:
In the "Suggestions for you" section, click a friend’s avatar (e.g., alice).
Navigate to /profile/friend1 to see their static profile (username, bio, likes, etc.).
5. Interact with Friend Suggestions
Suggestions Section: On the right side of the home page, view suggested friends (friendSuggests).
Follow/Unfollow:
Click "Follow" next to a friend (e.g., bob).
Button toggles to "Unfollow"; click again to revert.
Like a Friend:
Click "Like" next to a friend (e.g., John Fahn).
Like count increases (e.g., 8 to 9), toggles to "Unlike"; click again to decrease.
Note: These actions update locally and persist via localStorage, not the backend.
6. Search
Search Bar: At the top of the page, enter a username or tag.
Results: View matching users and posts by tag in a simple list format.
7. Sign Out
Click "Sign Out" in the sidebar to log out and return to the Authenticator screen.

Link to the hosted site: "https://my-instagram-henna.vercel.app/" 
```
./my_project my_instagram-clone
```

### The Core Team


<span><i>Made at <a href='https://qwasar.io'>Qwasar SV -- Software Engineering School</a></i></span>
<span><img alt='Qwasar SV -- Software Engineering School's Logo' src='https://storage.googleapis.com/qwasar-public/qwasar-logo_50x50.png' width='20px' /></span>

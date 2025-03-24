# My Portfolio Card

1. Install dependencies:
   ```bash
   npm install
   ```

2. Build the project:
   ```bash
   npm run build
   ```

3. Deploy to Netlify:
   - Go to netlify.com and sign up/login
   - Click "Add new site" → "Import an existing project"
   - Connect to your GitHub repository
   - Set the following build settings:
     - Build command: `npm run build`
     - Publish directory: `out`
   - Click "Deploy site"

Note: Make sure your repository is public or you've granted Netlify access to your private repository.

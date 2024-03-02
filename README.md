
## ISBN Kannada

### To Start

1. **Clone the Repository:**
   - Ensure that you have Git installed on your machine.
   - Run the following command in your terminal:
     ```bash
     git clone https://github.com/sanchaya/isbn-kannada.git
     ```

2. **Setup Backend:**
   - Navigate to the `server` folder using:
     ```bash
     cd isbn-kannada/server
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Create a `.env` file in the `server` folder and add your MongoDB connection string:
     ```env
     URI=mongodb://localhost:27017/your-database-name
     ```
   - Start the backend:
     ```bash
     node index.js
     ```

3. **Setup Frontend:**
   - Navigate to the `search` folder using:
     ```bash
     cd isbn-kannada/search
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the client:
     ```bash
     npm run dev
     ```

4. **Deploying:**
   - To deploy on a server:
     - Navigate to the `search` folder:
       ```bash
       cd isbn-kannada/search
       ```
     - Build the project:
       ```bash
       npm run build
       ```
     - Deploy the built files on your server.

### Additional Information

- **Environment Variables:**
  - Ensure that the `.env` file in the `server` folder is properly configured with your MongoDB connection string.

- **Dependencies:**
  - Make sure you have Node.js and npm installed on your machine before running the setup.
  - The node version used here is v20.10.0 and next version is 14.0.4



// vite.config.js
import { defineConfig } from "file:///D:/Work/Mayonity/admin-pannel-final/ezRent-AdminDashboard/node_modules/vite/dist/node/index.js";
import react from "file:///D:/Work/Mayonity/admin-pannel-final/ezRent-AdminDashboard/node_modules/@vitejs/plugin-react/dist/index.mjs";
import dotenv from "file:///D:/Work/Mayonity/admin-pannel-final/ezRent-AdminDashboard/node_modules/dotenv/lib/main.js";
dotenv.config();
var reactAppApiKey = process.env.REACT_APP_API_ENDPOINT;
var vite_config_default = defineConfig({
  plugins: [react()],
  define: {
    "process.env.REACT_APP_API_ENDPOINT": JSON.stringify(reactAppApiKey)
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxXb3JrXFxcXE1heW9uaXR5XFxcXGFkbWluLXBhbm5lbC1maW5hbFxcXFxlelJlbnQtQWRtaW5EYXNoYm9hcmRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXFdvcmtcXFxcTWF5b25pdHlcXFxcYWRtaW4tcGFubmVsLWZpbmFsXFxcXGV6UmVudC1BZG1pbkRhc2hib2FyZFxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovV29yay9NYXlvbml0eS9hZG1pbi1wYW5uZWwtZmluYWwvZXpSZW50LUFkbWluRGFzaGJvYXJkL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xyXG5pbXBvcnQgZG90ZW52IGZyb20gJ2RvdGVudidcclxuZG90ZW52LmNvbmZpZygpXHJcblxyXG5jb25zdCByZWFjdEFwcEFwaUtleSA9IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9BUElfRU5EUE9JTlQ7XHJcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgcGx1Z2luczogW3JlYWN0KCldLFxyXG4gIGRlZmluZToge1xyXG4gICAgJ3Byb2Nlc3MuZW52LlJFQUNUX0FQUF9BUElfRU5EUE9JTlQnOiBKU09OLnN0cmluZ2lmeShyZWFjdEFwcEFwaUtleSksXHJcbiAgfSxcclxufSk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBdVcsU0FBUyxvQkFBb0I7QUFDcFksT0FBTyxXQUFXO0FBQ2xCLE9BQU8sWUFBWTtBQUNuQixPQUFPLE9BQU87QUFFZCxJQUFNLGlCQUFpQixRQUFRLElBQUk7QUFFbkMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUyxDQUFDLE1BQU0sQ0FBQztBQUFBLEVBQ2pCLFFBQVE7QUFBQSxJQUNOLHNDQUFzQyxLQUFLLFVBQVUsY0FBYztBQUFBLEVBQ3JFO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K

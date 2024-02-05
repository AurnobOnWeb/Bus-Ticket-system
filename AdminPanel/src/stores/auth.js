// store/auth.js
import { defineStore } from "pinia";
import axiosClient from "@/axiosClient";


export const useAuthStore = defineStore("auth", {
  state: () => ({
    adminName: "",
    adminEmail: "",
    adminRole: "",
    adminPermissions: [],
    token: "",
    loading: false,
    isAuthenticated: false,
    errors: [],
  }),

  actions: {
    initializeAuth() {
      const storedAdmin = window.localStorage.getItem("admin");
      if (storedAdmin) {
        const {
          adminName,
          adminEmail,
          adminRole,
          adminPermissions,
          token,
          isAuthenticated,
        } = JSON.parse(storedAdmin);

        this.adminName = adminName;
        this.adminEmail = adminEmail;
        this.adminRole = adminRole;
        this.adminPermissions = adminPermissions;
        this.token = token;
        this.isAuthenticated = isAuthenticated;
      }
    },

    async throttledLogin(form) {
      try {
       

        this.loading = true;
        const response = await axiosClient.post("admin/login", form);

        const { name, adminEmail, roles, rolesPermissions, token, message } =
          response.data.data;

        this.adminName = name;
        this.adminEmail = adminEmail;
        this.adminRole = roles;
        this.adminPermissions = rolesPermissions;
        this.token = token;
        this.isAuthenticated = true;
        this.errors = [message];
        console.log("Hi Here");
        window.localStorage.setItem(
          "admin",
          JSON.stringify({
            adminName: this.adminName,
            adminEmail: this.adminEmail,
            adminRole: this.adminRole,
            adminPermissions: this.adminPermissions,
            token: this.token,
            isAuthenticated: this.isAuthenticated,
          })
        );
      } catch (error) {
        // Handle error if necessary
      } finally {
        this.loading = false;
      }
    },

    logout() {
      this.adminName = "";
      this.adminEmail = "";
      this.adminRole = "";
      this.adminPermissions = [];
      this.token = "";
      this.isAuthenticated = false;

      window.localStorage.removeItem("admin");
    },
  },
});

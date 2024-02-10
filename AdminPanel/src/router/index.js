// router/index.js
import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "@/stores/auth";

//Pages
import Login from "../views/Login.vue";
import Dashboard from "@/views/Dashboard.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "Login",
      component: Login,
      meta: { requiresAuth: false },
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: { name: "Login" }, // Redirect to the home page for unknown paths
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      component: Dashboard,
      meta: {
        requiresAuth: true,
        requiredPermissions: ["admin.view"],
      },
    },
  ],
});

//guard
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  authStore.initializeAuth(); // Initialize auth store

  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next({ name: "Login" });
  } else if (to.name === "Login" && authStore.isAuthenticated) {
    next({ name: "Dashboard" });
  } else if (to.meta.requiredPermissions) {
    const requiredPermissions = to.meta.requiredPermissions;

    // Check if the user has the required permissions
    const hasRequiredPermissions = requiredPermissions.every((permission) =>
      authStore.adminPermissions.includes(permission)
    );

    if (!hasRequiredPermissions) {
      // Redirect back to the previous route if user does not have the required permissions
      if (from.name) {
        next({ name: from.name });
      } else {
        // If no previous route (e.g., direct URL entry), redirect to the Dashboard page
        next({ name: "Dashboard" });
      }
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;

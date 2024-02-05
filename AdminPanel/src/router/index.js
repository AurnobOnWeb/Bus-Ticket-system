// router/index.js
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Login from "../views/Login.vue";
import { useAuthStore } from "@/stores/auth";
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
      redirect: { name: "home" }, // Redirect to the home page for unknown paths
    },
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        requiresAuth: true,
        requiredPermissions: ["admin.view"],
      },
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
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  authStore.initializeAuth(); // Initialize auth store

  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next({ name: "Login" });
  } else if (to.name === "Login" && authStore.isAuthenticated) {
    next({ name: "home" });
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
        // If no previous route (e.g., direct URL entry), redirect to the home page
        next({ name: "home" });
      }
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;

import { onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { auth, provider, signOut } from "../firebase/firebase";
import { create } from "zustand";
import { AuthState } from "../types/types";

const useAuthStore = create<AuthState>((set) => ({
  user: null,
  loading: true,

  loginWithGoogle: async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      set({ user: result.user, loading: false });
    } catch (error) {
      console.error("Login failed:", error);
    }
  },

  logout: async () => {
    try {
      await signOut(auth);
      set({ user: null, loading: false });
    } catch (error) {
      console.error("Logout failed:", error);
    }
  },

  setUser: (user) => set({ user, loading: false }),
}));

// Listen for authentication state changes
onAuthStateChanged(auth, (user) => {
  useAuthStore.getState().setUser(user);
});

export default useAuthStore;

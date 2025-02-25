import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { SignInForm } from "./SignInForm";
import { SignUpForm } from "./SignUpForm";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [isSignIn, setIsSignIn] = useState(true);

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={overlayVariants}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={modalVariants}
            className="w-full max-w-[440px] mx-4 z-10"
          >
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl p-8 relative">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-1 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  {isSignIn ? "Welcome back!" : "Create your account"}
                </h2>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {isSignIn
                    ? "Sign in to continue to ExamQuest"
                    : "Join ExamQuest to start your journey"}
                </p>
              </div>

              <div className="w-full max-w-sm mx-auto">
                {isSignIn ? <SignInForm /> : <SignUpForm />}

                <div className="mt-6 text-center">
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {isSignIn
                      ? "New to ExamQuest?"
                      : "Already have an account?"}{" "}
                    <button
                      onClick={() => setIsSignIn(!isSignIn)}
                      className="text-blue-500 hover:text-blue-600 font-medium"
                    >
                      {isSignIn ? "Create account" : "Sign in"}
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

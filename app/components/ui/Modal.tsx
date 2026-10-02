import type { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
}: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/70"
        onClick={onClose}
      />

      <div className="relative bg-brand-purple border border-brand-mauve rounded-2xl p-8 max-w-xl w-full mx-4 shadow-2xl">
        <div className="flex justify-between items-center mb-6 border-b border-brand-plum pb-4">
          <h2 className="text-3xl text-brand-white">{title}</h2>

          <button
            onClick={onClose}
            className="text-brand-mauve hover:text-brand-white text-3xl"
          >
            ×
          </button>
        </div>

        {children}
      </div>
    </div>
  );
}
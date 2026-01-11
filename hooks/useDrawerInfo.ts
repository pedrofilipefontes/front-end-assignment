import { useState } from "react";

export const useDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => {
    setIsOpen(false);
  };
  return { isOpen, setIsOpen, onClose };
};

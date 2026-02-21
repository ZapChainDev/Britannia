import React from "react";

const motion = new Proxy(
  {},
  {
    get: (_target, prop: string) => {
      return React.forwardRef((props: Record<string, unknown>, ref) => {
        const {
          initial: _initial,
          animate: _animate,
          exit: _exit,
          transition: _transition,
          whileInView: _whileInView,
          whileHover: _whileHover,
          whileTap: _whileTap,
          viewport: _viewport,
          variants: _variants,
          ...rest
        } = props;
        return React.createElement(prop, { ...rest, ref });
      });
    },
  },
);

const AnimatePresence = ({ children }: { children: React.ReactNode }) =>
  React.createElement(React.Fragment, null, children);

export { motion, AnimatePresence };

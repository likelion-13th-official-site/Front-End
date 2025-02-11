import React from 'react';
import { createPortal } from 'react-dom';

export default function MenuPortal({
  children
}: {
  children: React.ReactNode;
}) {
  const el = document.getElementById('modal');
  return createPortal(children, el!);
}
